import firebase from "firebase";
import {app} from "../firebase.js";

const db = firebase.firestore()

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

export { getAllDrivers };
