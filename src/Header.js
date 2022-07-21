import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const Header = () => {
    let navigate = useNavigate()
    return (
        <nav
            className="bg-slate-300 navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between">
            <div className="px-6">
                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <ul className="navbar-nav mr-auto flex flex-row">
                        <li className="nav-item">
                            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                               href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => {
                                navigate('/', {replace: true})
                                window.location.reload();
                            }}>Cars.am</a>
                        </li>
                        <li className="nav-item dropdown static ml-16">
                            <select defaultValue="" className="form-select appearance-none
                                         cursor-pointer
                                          block
                                          w-full
                                          px-3
                                          py-1.5
                                          text-base
                                          font-normal
                                          text-gray-700
                                          bg-white bg-clip-padding bg-no-repeat
                                          border border-solid border-gray-300
                                          rounded
                                          transition
                                          ease-in-out
                                          m-0
                                          focus:text-gray-700 focus:bg-white focus:outline-none"
                                    aria-label="Default select example">
                                <option value='' disabled>Brands  ▼</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-around'>
                <Link  to="/login">
                <button
                    className="mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Sign in
                </button>
                </Link>
                <Link  to="/register">
                <button
                    className="mr-16 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Sign up
                </button>
                </Link>
            </div>
        </nav>
    )
}