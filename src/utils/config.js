import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQIzVw1PCLfv42fqzdCEXOxrI2AAa21GQ",
  authDomain: "netflix-app-5cc42.firebaseapp.com",
  projectId: "netflix-app-5cc42",
  storageBucket: "netflix-app-5cc42.appspot.com",
  messagingSenderId: "548944651139",
  appId: "1:548944651139:web:c6e2d6acce28d09c750cb6",
  measurementId: "G-WKZCTE1JNB",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
