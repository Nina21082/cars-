import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerAction} from "./store/actions/authAction";
import {useNavigate} from 'react-router-dom';

export const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const user = useSelector((state) => state.authReducer.currentUser)
    const error = useSelector((state) => state.authReducer.error)
    console.log(error)
    console.log(user)
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPass: ''
    })


    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/profile')
        }
    }, [localStorage.getItem('token')])

    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPass) {
            return
        }
        dispatch(registerAction({
            email: formData.email,
            password: formData.password,
            name: formData.name,
            surname: formData.surname
        }))

    };
    return (
        <div>
            {error ? <p className='text-red-700 truncate p-8 transition duration-700 ease-in-out'>User already registered</p> : null}
            <div className='flex justify-center p-20'>

                <form
                    className="w-full max-w-lg"
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                First Name
                            </label>
                            <input
                                value={formData.name}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Name"
                                onChange={(e) => {
                                    handleChange('name', e.target.value)
                                }}
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Last Name
                            </label>
                            <input value={formData.surname}
                                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="grid-last-name" type="text" placeholder="Surname"
                                   onChange={(e) => {
                                       handleChange('surname', e.target.value)
                                   }}
                                   required
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Email
                            </label>
                            <input value={formData.email}
                                   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   type="email" placeholder="email"
                                   onChange={(e) => {
                                       handleChange('email', e.target.value)
                                   }}
                                   required
                            />
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    Password
                                </label>
                                <input value={formData.password}
                                       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                       type="password" placeholder="**************"
                                       onChange={(e) => {
                                           handleChange('password', e.target.value)
                                       }}
                                       required
                                />
                            </div>
                            <div className="w-full px-3">
                                <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                       htmlFor="grid-password">
                                    Confirm password
                                </label>
                                <input value={formData.confirmPass}
                                       className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                       type="password" placeholder="***************"
                                       onChange={(e) => {
                                           handleChange('confirmPass', e.target.value)
                                       }}
                                       required
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )
}