import {
    LOGIN_ERROR,

} from "../type";

const initialState = {

    error: null,
}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}