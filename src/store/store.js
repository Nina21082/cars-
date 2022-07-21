import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import fbConfig from '../config/fbConfig'
import allReducers from "./reducers/allReducers";

const middleware = [thunk]

export const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);
