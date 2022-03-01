import firebase from "firebase";
import { app } from "../firebase.js";
import { isAvailableMail,isAvailablePhone,getManagerData,getManagerId,getManagerbyMail,getAllManagers,addManager} from "./managers.services.js";
import { addDriver, getAllDrivers,getAllDriversOfManager,getDriverbyMail, getDriverData, getDriverId, linkDriverToManager,removeDriver } from "./drivers.services.js";
import { getAllOrders,createOrder } from "./orders.services.js";

//getting all managers test
//const managers = await getAllManagers();
//managers.forEach(doc => {console.log(doc.data());});

//adding a manager test
//addManager("moe2","moe2@gmail.com","moesCompany","700930142");

//adding a manager with a used email test
//addManager("moe2","moe2@gmail.com","moesCompany","700930141");

//adding a manager with a used phoneNumber test
//addManager("moe2","moe3@gmail.com","moesCompany","700930142");

//get manager by mail and get manager id and get manager data test
//const manager = await getManagerbyMail("moe2@gmail.com");
//console.log(getManagerId(manager),getManagerData(manager));

//get all drivers test
//const drivers = await getAllDrivers();
//drivers.forEach(doc => {console.log(doc.data());}); 

//get all available drivers test
//const avDriver = await getAllDriversAvailable();
//avDriver.forEach(doc => {console.log(doc.data());}); 

//get driver by mail test
//const driver = await getDriverbyMail("test");
//console.log(getDriverId(driver),getDriverData(driver));

//add driver test
//addDriver("mohamad al aaraj","test@hotmail.com","71678092","car","beirut","kwe04@mail.aub.edu");

//get all drivers of manager
//const drivers = await getAllDriversOfManager("moe@gmail.com")
//drivers.forEach(doc => {console.log(doc.data());});

//link driver to manager test
//linkDriverToManager("test1","moe@gmail.com");

//get all orders test
// const o = await getAllOrders("mia59@mail.aub.edu");
// o.forEach(doc => {console.log(doc.data());});

//create order test
//createOrder(1,1,"city","street",1,1,"121","moe@gmail.com");
//addDriver("khaled jizi","jizi@gmail.com","70000111","motorcycle",'beirut',"mia59@mail.aub.edu");
//removeDriver("jizi@gmail.com","mia59@mail.aub.edu");
