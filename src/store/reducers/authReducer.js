import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    REGISTER_LOADING,
    LOGOUT_ERROR,
    LOGOUT_LOADING,
    LOGOUT_SUCCESS,
    SET_USER, LOGIN_SUCCESS, LOGIN_LOADING
} from "../type";

const initialState = {
    loading: null,
    currentUser: [],
    error: null,
    token: null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS :
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: {
                    email: action.payload.user.email,
                    name: action.payload.user.displayName,
                    uid: action.payload.user.uid
                },
                token: action.payload.user.accessToken

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
                currentUser: {
                    email: action.payload.user.email,
                    name: action.payload.user.displayName,
                    uid: action.payload.user.uid
                },
                token: action.payload.user.accessToken
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
                currentUser: null,
                token: null
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