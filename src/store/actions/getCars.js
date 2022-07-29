import {
    GET_CARS,
    CARS_ERROR,
    CARS_LOADING,
    DELETE_CAR,
    DELETE_CAR_ERROR,
    GET_CARS_BRAND,
    GET_CARS_MODEL
} from '../type'
import {collection, deleteDoc, doc, getDocs, query, where} from "firebase/firestore";
import {db} from "../../config/fbConfig";

export const getUserCars = (userId) => async (dispatch) => {
    try{
        dispatch({
            type: CARS_LOADING,
            payload: true
        })
        const q = query(collection(db, "cars"), where("user_id", "==", userId));
        const querySnapshot = await getDocs(q);
        let list = [];
        querySnapshot.forEach(doc => {
            list.push({...doc.data(), id: doc.id})
        });
        dispatch({
            type: GET_CARS,
            payload: list
        })
    }catch (error) {
        dispatch({
            type:CARS_ERROR,
            payload: error.message
        })
    }
}
export const getCars = () => async (dispatch) => {
    try{
        dispatch({
            type: CARS_LOADING,
            payload: true
        })
        const q = query(collection(db, "cars"));
        const querySnapshot = await getDocs(q);
        let car = [];
        querySnapshot.forEach(doc => {
            car.push({...doc.data(), id: doc.id})
        });
        dispatch({
            type: GET_CARS,
            payload: car
        })
    }catch (error) {
        dispatch({
            type:CARS_ERROR,
            payload: error.message
        })
    }
}

export const getCarBrand = () => async (dispatch) => {
    try{
        const q = query(collection(db, "CarBrand"));
        const querySnapshot = await getDocs(q);
        let brand = [];
        querySnapshot.forEach(doc => {
            brand.push({...doc.data(), id: doc.id})
        });
        dispatch({
            type: GET_CARS_BRAND,
            payload: brand
        })

    }catch (error) {
        }
    }


export const deleteCar = (id) => async (dispatch) => {
    try{
        dispatch({
            type: CARS_LOADING,
            payload: true
        })
        deleteDoc(doc(db, 'cars', id)).then(() => {
            dispatch({
                type: DELETE_CAR,
                payload: { id }
            })
        })

    }catch (error) {
        dispatch({
            type: DELETE_CAR_ERROR,
            payload: error.message
        })

    }
}


