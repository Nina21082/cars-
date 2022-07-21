import {REGISTER_SUCCESS,REGISTER_ERROR,REGISTER_LOADING} from "../type";

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
                error: action.error,
            }
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            }
        default:
            return state

    }
}