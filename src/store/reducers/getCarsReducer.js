import {GET_CARS,
    CARS_ERROR,
    CARS_LOADING} from '../type'

const initialState = {
    carsData: [{}],
    loading: null,
    error: null
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
        default:
            return state
    }

}
