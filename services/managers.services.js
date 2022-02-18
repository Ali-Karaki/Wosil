import firebase from "firebase";
import { app } from "../firebase.js";
import {getAllDrivers} from "./drivers.services.js";

const db = firebase.firestore();

/**
 * async function to get all manager
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of all managers
 */
async function getAllManagers() {
    const managersArr = [];
    const managersRef = db.collection('managers');
    await managersRef.get().then(snapshot => {
        snapshot.forEach(doc => { managersArr.push(doc); });
    }).catch(error => { console.log(error); });
    return managersArr;
}

/**
 * async function to check is the email is available
 * @param {string} mail 
 * @returns {boolean} boolean indicating if the mail is available
 */
async function isAvailableMail(mail){
    const managers = await getAllManagers();
    const drivers = await getAllDrivers();
    for (let index = 0; index < managers.length; index++) {
        const existingMail = managers[index].data().mail;
        if (existingMail == mail) {
            return false;
        }
    }
    for (let index = 0; index < drivers.length; index++) {
        const existingMail = drivers[index].data().mail;
        if (existingMail == mail) {
            return false;
        }
    }
    return true;
}

/**
 * async function to check is the phone number is available
 * @param {string} phoneNumber 
 * @returns {boolean} boolean indicating if the phoneNumber is available
 */
async function isAvailablePhone(phoneNumber){
    const managers = await getAllManagers();
    const drivers = await getAllDrivers();
    for (let index = 0; index < managers.length; index++) {
        const existingPhoneNumber = managers[index].data().phoneNumber;
        if (existingPhoneNumber == phoneNumber) {
            return false;
        }
    }
    for (let index = 0; index < drivers.length; index++) {
        const existingPhoneNumber = drivers[index].data().phoneNumber;
        if (existingPhoneNumber == phoneNumber) {
            return false;
        }
    }
    return true;
}

/**
 * async function to add manager to the database
 * @param {string} name 
 * @param {string} mail 
 * @param {string} companyName 
 * @param {string} phoneNumber 
 * @returns {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} reference to the document added
 * @returns {Error} error incase the email/phoneNumber is already in use
 */
async function addManager(name, mail, companyName, phoneNumber) {
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
            "name": name,
            "mail": mail,
            "companyName": companyName,
            "phoneNumber": phoneNumber,
            "drivers" : []
        }
        const res = await db.collection('managers').add(data);
        return res;
    }
}

export {getAllDrivers,addManager,isAvailableMail,isAvailablePhone};