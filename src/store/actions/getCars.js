import {GET_CARS,
    CARS_ERROR,
    CARS_LOADING} from '../type'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/fbConfig";

export const getCars = () => async (dispatch) => {
    try{
        dispatch({
            type: CARS_LOADING,
            payload: true
        })
        const carsCollectionRef = collection(db, "cars");
        const data = await getDocs(carsCollectionRef);
        dispatch({
            type: GET_CARS,
            payload: data.docs[0]._document.data.value.mapValue.fields
        })
    }catch (error) {
        dispatch({
            type:CARS_ERROR,
            payload: error.message
        })

    }
}