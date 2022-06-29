import {getApp, getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCIwDPTbBV3N_tKicGttG65TFQgjnr8lpY",
    authDomain: "restaurantapp-bb60d.firebaseapp.com",
    databaseURL: "https://restaurantapp-bb60d-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-bb60d",
    storageBucket: "restaurantapp-bb60d.appspot.com",
    messagingSenderId: "458455337111",
    appId: "1:458455337111:web:d28168ec2f8ab64e1481d2"
  };
  

const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage};