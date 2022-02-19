import firebase from "firebase";
import { app } from "../firebase.js";
import {getAllDrivers,addDriver} from "./drivers.services.js";
import { isAvailableMail,isAvailablePhone} from "./managers.services.js";

const a = await getAllDrivers();
a.forEach(doc => {console.log(doc.data().phoneNumber);});