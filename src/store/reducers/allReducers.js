import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";



export default combineReducers({authReducer,firestoreReducer,firebaseReducer})