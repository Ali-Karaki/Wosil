import firebase from "firebase";
import { app } from "../firebase.js";
import { getManagerbyMail, getManagerId } from "./managers.services.js";

const db = firebase.firestore();

/**
 * async function to get all the orders of a manager
 * @param {String} mailOfManager
 * @returns {Array.<firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>>} array of all orders
 */
async function getAllOrders(mailOfManager) {
    const manager = await getManagerbyMail(mailOfManager);
    const id = getManagerId(manager);
    const ordersArr = [];
    const ordersRef = db.collection('orders').where("manager", "==", id);
    await ordersRef.get().then(snapshot => {
        snapshot.forEach(doc => { ordersArr.push(doc); });
    }).catch(error => { console.log(error); });
    return ordersArr;
}

/**
 * async function to create and add an order to the database
<<<<<<< HEAD
 * @param {Number} dimensionLength 
 * @param {Number} dimensionWidth 
 * @param {String} dropoff 
 *  @param {String} phoneNumberCustomer
=======
 * @param {String} city 
 * @param {String} street 
>>>>>>> invite-remove-drivers
 * @param {Number} price 
 * @param {Number} deliveryCharge 
 * @param {string} pickupLocation
 * @param {string} phoneNumberCustomer
 * @param {string} mailOfManager
 * @param {string} dropoffStreet
 * @param {string} dropoffBuilding
 * @param {string} floor
 * @returns {firebase.firestore.DocumentReference<firebase.firestore.DocumentData>} the created order
 */
async function createOrder(city, pickupLocation, price, deliveryCharge, phoneNumberCustomer, mailOfManager, dropoffStreet, dropoffBuilding, floor) {
    const manager = await getManagerbyMail(mailOfManager);
    const id = getManagerId(manager);
    const data = {
        "priceOfproduct": price,
        "deliveryCharge": deliveryCharge,
        "manager": id, //link manager to order
        "driver": '',
        "started": false,
        "completed": false,
        "phoneNumberCustomer": phoneNumberCustomer,
        "pickupLocation": pickupLocation,
        "dropoffLocation": {
            "city": city,
            "street": dropoffStreet,
            "building": dropoffBuilding,
            "floor": floor,
        },
        "startTime": new Date(),
        "endTime": new Date(),
    }
    const res = await db.collection('orders').add(data).catch(error => { console.log(error); });;
    return res;
}



export { getAllOrders, createOrder };

