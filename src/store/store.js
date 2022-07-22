import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers/allReducers";

const middleware = [thunk]

export const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);
