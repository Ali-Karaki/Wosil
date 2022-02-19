import firebase from "firebase";
import {app} from "../firebase.js";
import { isAvailableMail,isAvailablePhone,getManagerData,getManagerId,getManagerbyMail} from "./managers.services.js";

const db = firebase.firestore();

/**
 * async function to get all drivers available
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of drivers
 */
async function getAllDriversAvailable(){
    const driversArr = [];
    const driversRef = db.collection('drivers').where("taken","==",false);
    await driversRef.get().then(snapshot => {
        snapshot.forEach(doc => { driversArr.push(doc); });
    }).catch(error => { console.log(error); });
    return driversArr;
}


async function getAllDrivers(){
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
async function getAllDriversOfManager(mailOfManager){
    const manager = await getManagerbyMail(mailOfManager);
    const id = getManagerId(manager);
    const driversArr = [];
    const driversRef = await db.collection('drivers').where("manager","==",id);
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


function getDriverId(driver) {
    return driver.id;
}

function getDriverData(driver){
    return driver.data();
}

async function linkDriverToManager(driverMail,managerMail){
    try {
        //get manager Id
        const manager = await getManagerbyMail(managerMail); 
        const idManager = getManagerId(manager);
        //get driver Id
        const driver = await getDriverbyMail(driverMail);
        const idDriver = getDriverId(driver);
        //get and update the drivers field of the manager
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
        const managerRef = db.collection('managers').doc(idManager);
        managerRef.update({
            drivers: arrayUnion(idDriver)
        });
        //get and update the manager field of a driver
        const driverRef = db.collection('drivers').doc(idDriver);
        driverRef.update({manager : idManager});
        driverRef.update({taken : true});
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
 * @returns {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} driver
 * @return {Erorr} returns error incase the phone number/mail is already used
 */
async function addDriver(name,mail,phoneNumber,vehicle,city){
    const isAvailableMailvar = await isAvailableMail(mail);
    const isAvailablePhonevar = await isAvailablePhone(phoneNumber);
    if(!isAvailableMailvar){
        return new Error("email already already in use");
    }
    else if(!isAvailablePhonevar){
        return new Error("phonenumber already in use");
    }
    else{
        const data = {
            "name" : name,
            "mail" : mail,
            "phoneNumber" : phoneNumber,
            "vehicle" : vehicle,
            "order" : [],
            "manager" : '',
            "onDuty" : false,
            "taken" : false,
            "location" : {
                "city" : city,
                "street" : '',
            }
        }
        const res = await db.collection('drivers').add(data);
        return res;
    }
}


export { getAllDriversAvailable,addDriver,getAllDrivers,getAllDriversOfManager,getDriverbyMail,getDriverData,getDriverId,linkDriverToManager };
