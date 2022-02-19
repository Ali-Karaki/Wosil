import firebase from "firebase";
import { app } from "../firebase.js";
import { getAllDrivers, addDriver } from "./drivers.services.js";
import {
  isAvailableMail,
  isAvailablePhone,
  addManager,
} from "./managers.services.js";
import { createOrder } from "./orders.services.js";

createOrder(1, 1, "city", "street", 1, 1);
//addManager("asdg","you@MediaList.com","company","123456789");
