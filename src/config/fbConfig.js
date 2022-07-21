import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsVyqqtM68lXtl2bUKojwoWqOtt8XktYk",
    authDomain: "car-app-b3cc4.firebaseapp.com",
    projectId: "car-app-b3cc4",
    storageBucket: "car-app-b3cc4.appspot.com",
    messagingSenderId: "339264734605",
    appId: "1:339264734605:web:9808d7e05f575e1ec9e9c4"
};
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
