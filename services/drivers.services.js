import firebase from "firebase";
import {app} from "../firebase.js";
import { isAvailableMail,isAvailablePhone} from "./managers.services.js";

const db = firebase.firestore();

/**
 * async function to get all drivers
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of drivers
 */
async function getAllDrivers(){
    const driversArr = [];
    const driversRef = db.collection('drivers');
    await driversRef.get().then(snapshot => {
        snapshot.forEach(doc => { driversArr.push(doc); });
    }).catch(error => { console.log(error); });
    return driversArr;
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
            "order" : '',
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


export { getAllDrivers,addDriver };
