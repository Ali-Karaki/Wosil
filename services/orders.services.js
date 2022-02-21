import firebase from "firebase";
import { app } from "../firebase.js";
import { getManagerbyMail,getManagerId} from "./managers.services.js";

const db = firebase.firestore();

/**
 * async function to get all the orders of a manager
 * @param {String} mail of the manager
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of all orders
 */
async function getAllOrders(mailOfManager) {
    const manager = await getManagerbyMail(mailOfManager);
    const id = getManagerId(manager);
    const ordersArr = [];
    const ordersRef = db.collection('orders').where("manager","==", id);
    await ordersRef.get().then(snapshot => {
        snapshot.forEach(doc => { ordersArr.push(doc); });
    }).catch(error => { console.log(error); });
    return ordersArr;
}

/**
 * async function to create and add an order to the database
 * @param {Number} dimensionLength 
 * @param {Number} dimensionWidth 
 * @param {String} pickup 
 * @param {String} dropoff 
 * @param {Number} price 
 * @param {Number} deliveryCharge 
 * @returns {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} the created order
 */
async function createOrder(dimensionLength, dimensionWidth, pickup, dropoff, price,deliveryCharge,phoneNumberCustomer,mailOfManager) {
    const manager = await getManagerbyMail(mailOfManager);
    const id = getManagerId(manager);
    const data = {
        "dimensions": {
            "length": dimensionLength,
            "width": dimensionWidth,
        },
        "location": {
            "pickup": pickup,
            "dropoff": dropoff,
        },
        "price": price,
        "deliveryCharge" : deliveryCharge,
        "manager" : id,
        "driver" : '',
        "started" : false,
        "completed" : false,
        "phoneNumberCustomer" : phoneNumberCustomer,
        "startTime" : new Date(),
        "endTime" : new Date(),
    }
    const res = await db.collection('orders').add(data);
    return res;
}
export {getAllOrders,createOrder};

