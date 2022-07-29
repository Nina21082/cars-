import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "./store/actions/getCars";
import {Link} from "react-router-dom";
import {setUser} from "./store/actions/authAction";


export const Home = () => {

    const dispatch = useDispatch()
    const car = useSelector((state) => state.getCarsReducer.carsData)
    const user = useSelector((state) => state.authReducer.currentUser)

    useEffect(() => {
        dispatch(setUser())
    }, [user])


    useEffect(() => {
        dispatch(getCars())
    }, [])

    return (
        <div className='flex flex-wrap  items-center p-20'>
            {car.map((item) => {
                return (
                    <div
                        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-60 p-10 m-10">
                        <div className="flex flex-col items-center pb-10">
                            <img className="mb-3 w-24 h-24 rounded-full shadow-lg"
                                 src={item.image}
                                 alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.brand}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.model}</span>
                        </div>
                        <Link to={`/carsData/${item.id}`}
                        className='w-96 h-1/2 bg-slate-300 rounded-lg'>
                            See ...
                        </Link>
                    </div>
                )
            })}
        </div>


    )
}
