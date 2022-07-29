import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getUserCars, deleteCar} from "./store/actions/getCars";
import {Loading} from "./Loading";


export const Profile = () => {
    const dispatch = useDispatch();
    const carsData = useSelector((state) => state.getCarsReducer.carsData);
    const user = useSelector((state) => state.authReducer.currentUser);
    const loading = useSelector((state) => state.authReducer.loading);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        dispatch(deleteCar(id));
        console.log(carsData);
    }


    useEffect(() => {
        if (user) {
            dispatch(getUserCars(user.uid))
        }
    }, [user])

    return (
        <div className="container mx-auto px-4 sm:px-8 relative">
            {loading ? <Loading/> : false}
            <div
                className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight"> My Cars List </h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-40 shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-70 leading-normal">
                            <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Cars
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Brand
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Model
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Description
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">

                                </th>
                                <Link to='/car/add'>
                                    <th
                                        className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100">
                                        <button
                                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            Add Car
                                        </button>
                                    </th>
                                </Link>
                            </tr>
                            </thead>
                            {carsData.map((item) => {
                                return (
                                    <tbody key={item.id}>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        className="w-full h-full rounded-full"
                                                        src={item.image}
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{item.brand}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{item.model}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <Link to={`/car/${item.id}`}
                                                  className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                                                Edit
                                            </Link>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                            <button
                                                onClick={(e) => handleDelete(e, item.id)}
                                                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>

                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

