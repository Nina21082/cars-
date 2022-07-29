import {
    GET_CARS,
    CARS_ERROR,
    CARS_LOADING,
    GET_USER_CARS,
    CARS_USER_ERROR,
    CARS_USER_LOADING,
    DELETE_CAR,
    DELETE_CAR_ERROR,
    GET_CARS_BRAND,
    GET_CARS_MODEL
} from '../type'

const initialState = {
    carsData: [],
    loading: null,
    error: null,
    brand: [],
    model: []
}
export const getCarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return{
                ...state,
                carsData: action.payload,
                loading: null,
                error: null
            }
        case CARS_ERROR:{
            return {
                ...state,
                error: action.payload,
                loading: null
            }
        }
        case CARS_LOADING:
            return {
                ...state,
                error: null,
                loading: action.payload
            }
        case GET_USER_CARS:
            return{
                ...state,
                carsData: action.payload,
                loading: null,
                error: null
            }
        case CARS_USER_ERROR:{
            return {
                ...state,
                error: action.payload,
                loading: null
            }
        }
        case GET_CARS_BRAND:{
            return {
                ...state,
                brand: action.payload

            }
        }
        case CARS_USER_LOADING:
            return {
                ...state,
                error: null,
                loading: action.payload
            }
        case DELETE_CAR:
            let data = state.carsData.filter(item => action.payload.id !== item.id);
            return {
                ...state,
                error: null,
                carsData: data
            }
        case DELETE_CAR_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: null
            }
        default:
            return state
    }
}
