import {REGISTER_SUCCESS,REGISTER_ERROR,REGISTER_LOADING} from "../type";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../config/fbConfig";

export const registerAction = (data) => async (dispatch) =>{
    try {
        dispatch({
            type: REGISTER_LOADING,
            payload: true
        })

        const user = await createUserWithEmailAndPassword(auth, data.email, data.password)
        console.log(user.user.accessToken)
        const token = user.user.accessToken;
        localStorage.setItem('token', token);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: user
        })
    }catch (error) {
    dispatch({
        type: REGISTER_ERROR,
        payload: 'error'
    })

    }
}