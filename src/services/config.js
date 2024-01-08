import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvy4SoZIT_IDKvgH-mmK170Ww4ynmCn0c",
  authDomain: "react-proyect-fd478.firebaseapp.com",
  projectId: "react-proyect-fd478",
  storageBucket: "react-proyect-fd478.appspot.com",
  messagingSenderId: "1021196762278",
  appId: "1:1021196762278:web:c8582e88859a435f014867",
  measurementId: "G-49260T7PSR"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
