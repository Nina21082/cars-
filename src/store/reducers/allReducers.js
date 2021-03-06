import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import {getCarsReducer} from "./getCarsReducer";
import {loginReducer} from "./loginReducer";


export default combineReducers({authReducer,firestoreReducer,firebaseReducer,getCarsReducer,loginReducer})