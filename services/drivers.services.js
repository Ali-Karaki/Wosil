import firebase from "firebase";
import { app } from "../firebase.js";
import { isAvailableMail, isAvailablePhone, getManagerData, getManagerId, getManagerbyMail } from "./managers.services.js";

const db = firebase.firestore();

// /**
//  * async function to get all drivers available
//  * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of drivers
//  */
// async function getAllDriversAvailable(){
//     const driversArr = [];
//     const driversRef = db.collection('drivers').where("taken","==",false);
//     await driversRef.get().then(snapshot => {
//         snapshot.forEach(doc => { driversArr.push(doc); });
//     }).catch(error => { console.log(error); });
//     return driversArr;
// }

/**
 * async function to get all driver 
 * @returns {Array.<doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>} array of drivers
 */
async function getAllDrivers() {
    const driversArr = [];
    const driversRef = db.collection('drivers');
    await driversRef.get().then(snapshot => {
        snapshot.forEach(doc => { driversArr.push(doc); });
    }).catch(error => { console.log(error); });
    return driversArr;
}

/**
 * async function to get all drivers that belong to a manager
 * @param {String} mailOfManager 
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of drivers
 */
async function getAllDriversOfManager(mailOfManager) {
    const manager = await getManagerbyMail(mailOfManager);
    const id = getManagerId(manager);
    const driversArr = [];
    const driversRef = await db.collection('drivers').where("manager", "==", id);
    await driversRef.get().then(snapshot => {
        snapshot.forEach(doc => { driversArr.push(doc); });
    }).catch(error => { console.log(error); });
    return driversArr;
}

/**
 * async function to get a driver by mail
 * @param {String} mail 
 * @returns {snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>}
 */
async function getDriverbyMail(mail) {
    const query = await db.collection('drivers').where('mail', '==', mail).get();
    if (!query.empty) {
        const snapshot = query.docs[0];
        return snapshot;
    } else {
        console.log("mail not found");
        return new Error("mail not found");
    }
}

/**
 * function to get the driver's Id
 * @param {doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>} driver 
 * @returns {string} driver's Id
 */
function getDriverId(driver) {
    return driver.id;
}

/**
 * function to get the driver's data
 * @param {*} driver 
 * @returns {JSON} json object representing the data of the driver
 */
function getDriverData(driver) {
    return driver.data();
}

/**
 * async function to link a driver to a manager usinf their document Ids
 * @param {String} driverMail 
 * @param {String} managerMail 
 * @return {Error} incase no such Manager exists with managerMail or no such Driver exists with driverMail
 */
async function linkDriverToManager(driverMail, managerMail) {
    try {
        //get manager Id
        const manager = await getManagerbyMail(managerMail);
        const idManager = getManagerId(manager);
        //get driver Id
        const driver = await getDriverbyMail(driverMail);
        const idDriver = getDriverId(driver);
        if (manager instanceof Error) {
            console.log("no such manager exists with managerMail");
            return new Error("no such manager exists with managerMail");
        }
        if (driver instanceof Error) {
            console.log("no such driver exists with driverMail");
            return new Error("no such driver exists with driverMail");
        }
        //get and update the drivers field of the manager
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const managerRef = db.collection('managers').doc(idManager);
        managerRef.update({
            drivers: arrayUnion(idDriver)
        });
        //get and update the manager field of a driver
        const driverRef = db.collection('drivers').doc(idDriver);
        driverRef.update({ manager: idManager });
    } catch (error) {
        console.log(error)
    }
}

/**
 * async function to add a driver to the database
 * @param {string} name 
 * @param {string} mail 
 * @param {string} phoneNumber 
 * @param {string} vehicle 
 * @param {string} city 
 * @param {string} mailOfManager
 * @returns {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} driver
 * @return {Erorr} returns error incase the phone number/mail is already used
 */
async function addDriver(name, mail, phoneNumber, vehicle, city, mailOfManager) {
    const isAvailableMailvar = await isAvailableMail(mail);
    const isAvailablePhonevar = await isAvailablePhone(phoneNumber);
    if (!isAvailableMailvar) {
        return new Error("email already already in use");
    }
    else if (!isAvailablePhonevar) {
        return new Error("phonenumber already in use");
    }
    else {
        const data = {
            "name": name,
            "mail": mail,
            "phoneNumber": phoneNumber,
            "vehicle": vehicle,
            "order": [],
            "manager": '',
            "onDuty": false,
            "location": {
                "city": city,
            }
        }
        const res = await db.collection('drivers').add(data).catch(error => { console.log(error); });;
        linkDriverToManager(mail, mailOfManager);
        return res;
    }
}

/**
 * async function to remove the driver from the db
 * @param {string} mailOfDriver 
 * @param {string} mailOfManager 
 * @returns {Error} incase the mail driver/manager doesn't exist
 */
async function removeDriver(mailOfDriver, mailOfManager) {
    const driver = await getDriverbyMail(mailOfDriver);
    if (driver instanceof Error) {
        return driver;
    }
    const manager = await getManagerbyMail(mailOfManager);
    if (manager instanceof Error) {
        return manager;
    }
    const driverId = getDriverId(driver);
    db.collection('drivers').doc(driverId).delete();
    const managerId = getManagerId(manager);
    const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
    const doc = await db.collection("managers").doc(managerId);
    doc.update({
        drivers: arrayRemove(driverId)
    });
}


export { addDriver, getAllDrivers, getAllDriversOfManager, getDriverbyMail, getDriverData, getDriverId, linkDriverToManager, removeDriver };
