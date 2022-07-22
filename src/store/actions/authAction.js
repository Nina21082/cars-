import {
    REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_LOADING,
    LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_LOADING, LOGOUT_SUCCESS,
    LOGOUT_ERROR, LOGOUT_LOADING, SET_USER
} from "../type";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    updateProfile
} from 'firebase/auth'
import {auth} from "../../config/fbConfig";



export const registerAction = (data) => async (dispatch) =>{
    try {
        dispatch({
            type: REGISTER_LOADING,
            payload: true
        })

        const user = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const token = user.user.accessToken;
        localStorage.setItem('token', token);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: user
        })
    }catch (error) {
    dispatch({
        type: REGISTER_ERROR,
        payload: error.message
    })

    }
}
export const loginAction = (data) => async (dispatch) =>{
    try {
        dispatch({
            type: LOGIN_LOADING,
            payload: true
        })
        const user = await signInWithEmailAndPassword(auth, data.email, data.password)
        const token = user.user.accessToken;
        localStorage.setItem('token', token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user
        })
    }catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            payload: error.message
        })
    }
}
export const logoutAction = () => async (dispatch) => {
    try{
        dispatch({
            type: LOGOUT_LOADING,
            payload: true
        });
        const resp = await signOut(auth)
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    }catch (error) {
        dispatch({
            type: LOGOUT_ERROR,
            payload: error.message
        })
    }
}
export const setUser = () => async (dispatch)  => {
    const user = await getAuth();
    dispatch({
        type: SET_USER,
        payload: user
    })

}


