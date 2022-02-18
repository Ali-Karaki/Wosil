
import firebase from "firebase";
import { app } from "../firebase.js";

const db = firebase.firestore();

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

/**
 * async function to create and add an order to the database
 * @param {Number} dimensionLength 
 * @param {Number} dimensionWidth 
 * @param {String} city 
 * @param {String} street 
 * @param {Number} price 
 * @param {Number} deliveryCharge 
 * @returns {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} the created order
 */
async function createOrder(dimensionLength, dimensionWidth, city, street, price,deliveryCharge) {
    const data = {
        "dimensions": {
            "length": dimensionLength,
            "width": dimensionWidth,
        },
        "location": {
            "city": city,
            "street": street,
        },
        "price": price,
        "deliveryCharge" : deliveryCharge,
        "manager" : '',
        "driver" : '',
        "started" : false,
        "completed" : false,
        "startTime" : new Date(),
        "endTime" : new Date(),
    }
    const res = await db.collection('orders').add(data);
    return res;
}
export {getAllOrders,createOrder};

