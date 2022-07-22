import React from "react";
import {useDispatch } from "react-redux";
import {useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import {loginAction} from "./store/actions/authAction";

export const  Login = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [state, setState] = useState({
        email: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(
            {email: state.email,
                password: state.password
            }))
        if (localStorage.getItem('token')) {
            navigate("/profile", { replace: true })
        }
    };
    const handleChange = (name, value) => {
        setState({...state, [name]: value})

    }


    return(
        <div className='flex justify-center p-40'>
        <div className="w-full max-w-xs">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        value={state.email}
                        onChange={(e) => {
                            handleChange('email', e.target.value)
                        }}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="email" placeholder="Email" required/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        value={state.password}
                        onChange={(e) => {
                            handleChange('password', e.target.value)
                        }}
                        className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************" required/>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                    <Link to='/register' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                       href="#">
                        Register
                    </Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
        </div>
    )

}