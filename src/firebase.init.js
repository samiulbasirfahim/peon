// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAAxJUwi2z1RvlyPtRuAMAVxU7cwxvSS0w",
	authDomain: "peon-4f4a6.firebaseapp.com",
	projectId: "peon-4f4a6",
	storageBucket: "peon-4f4a6.appspot.com",
	messagingSenderId: "954821141825",
	appId: "1:954821141825:web:2483cbd02a282f38796dc0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getFirestore(app)

export { auth, database }
