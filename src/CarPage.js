import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "./config/fbConfig";


export const CarPage = () =>{
    const [data, setData] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getCarData()
    },[])


    const getCarData = async () => {
        const car = doc(db, "cars", id);
        const docSnap = await getDoc(car);
        if (docSnap.exists()) {
            setData(docSnap.data())
        }
    }

    return(
        <div className="flex justify-start p-10">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={data.image} alt=""/>
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Brand: {data.brand}</h5>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Model: {data.model}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}