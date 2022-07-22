import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    REGISTER_LOADING,
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT_LOADING,
    LOGOUT_SUCCESS,
    SET_USER
} from "../type";

const initialState = {
    loading: null,
    currentUser: [],
    error: null,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS :
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: action.payload
            }
        case REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case  LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOGOUT_SUCCESS :
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: null
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case  LOGOUT_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case  SET_USER:
            return {
                ...state,
                loading: null,
                error: null,
                currentUser: action.payload
            }
        default:
            return state
    }
}