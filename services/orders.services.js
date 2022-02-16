import firebase from "firebase";
import { app } from "../firebase.js";

const db = firebase.firestore()

/**
 * async function to get all the orders
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of all orders
 */
async function getAllOrders() {
    const ordersArr = [];
    const ordersRef = db.collection('orders');
    await ordersRef.get().then(snapshot => {
        snapshot.forEach(doc => { ordersArr.push(doc); });
    }).catch(error => { console.log(error); });
    return ordersArr;
}



