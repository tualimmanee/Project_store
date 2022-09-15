import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDkZdpbaDo0PchZz5gEVT5SJFdvdzLWVR4",
    authDomain: "projectstore-a21b4.firebaseapp.com",
    databaseURL: "https://projectstore-a21b4-default-rtdb.firebaseio.com",
    projectId: "projectstore-a21b4",
    storageBucket: "projectstore-a21b4.appspot.com",
    messagingSenderId: "1040429790244",
    appId: "1:1040429790244:web:35af18a17aaaff182fd4b1"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore , storage };