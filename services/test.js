import firebase from "firebase";
import { app } from "../firebase.js";
import { isAvailableMail,isAvailablePhone,getManagerData,getManagerId,getManagerbyMail,getAllManagers,addManager} from "./managers.services.js";
import { addDriver, getAllDrivers,getAllDriversOfManager,getDriverbyMail, getDriverData, getDriverId, linkDriverToManager,removeDriver } from "./drivers.services.js";
import { getAllOrders,createOrder } from "./orders.services.js";
//addDriver("khaled jizi","jizi@gmail.com","70000111","motorcycle",'beirut',"mia59@mail.aub.edu");
//removeDriver("jizi@gmail.com","mia59@mail.aub.edu");
