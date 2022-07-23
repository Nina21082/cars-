import React, {useEffect} from "react";
import { useState } from "react";
import { storage } from './config/fbConfig';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {db} from "./config/fbConfig";
import { collection, addDoc } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";


export const AddCars = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
         image: '',
         brand: '',
         model: '',
         description: ''
     })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await addDoc(collection(db, "cars"), {
            image: imgUrl,

            brand: formData.brand,

            model: formData.model,

            description: formData.description
        })

        const file = e.target[0]?.files[0]
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            () => {
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            }
        );

            navigate("/profile", { replace: true })

    }
    const handleChange = (name, value) => {
        setFormData({...formData, [name]: value})
    };

    return (
        <div className="App">
            <div className='flex justify-center p-20'>
                         <div className=" p-6 rounded-lg shadow-lg bg-white max-w-md">
                             <form
                                 onSubmit={handleSubmit}
                             >
                                 <div className="form-group mb-6">
                                     <input className="form-control
                     block
                     w-full
                     px-3
                     py-1.5
                     text-base
                     font-normal
                     text-gray-700
                     bg-white bg-clip-padding
                     border border-solid border-gray-300
                     rounded
                     transition
                     ease-in-out
                     m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple"
                                            multiple
                                            accept='image/jpg'
                                            name='image'
                                            required
                                     />
                                 </div>
                                 <div className="form-group mb-6">
                                     <input type="text" className="form-control block
                         w-full
                         px-3
                         py-1.5
                         text-base
                         font-normal
                         text-gray-700
                         bg-white bg-clip-padding
                         border border-solid border-gray-300
                         rounded
                         transition
                         ease-in-out
                         m-0
                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                            placeholder="brand"
                                            required
                                            onChange={(e) => {
                                                handleChange('brand', e.target.value)
                                            }}
                                     />
                                 </div>
                                 <div className="form-group mb-6">
                       <input
                           className="
                         form-control
                         block
                         w-full
                         px-3
                         py-1.5
                         text-base
                         font-normal
                         text-gray-700
                         bg-white bg-clip-padding
                         border border-solid border-gray-300
                         rounded
                         transition
                         ease-in-out
                         m-0
                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                       "
                           id="exampleFormControlTextarea13"
                           rows="3"
                           placeholder="model"
                           required
                           onChange={(e) => {
                               handleChange('model', e.target.value)
                           }}
                       />

                                     <textarea
                                         className="
                                         mt-8
                         form-control
                         block
                         w-full
                         px-3
                         py-1.5
                         text-base
                         font-normal
                         text-gray-700
                         bg-white bg-clip-padding
                         border border-solid border-gray-300
                         rounded
                         transition
                         ease-in-out
                         m-0
                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                       "
                                         id="exampleFormControlTextarea13"
                                         rows="3"
                                         required
                                         placeholder="description"
                                         onChange={(e) => {
                                             handleChange('description', e.target.value)
                                         }}
                                     />
                                 </div>

                                 <button type="submit" className="
                       w-full
                       px-6
                       py-2.5
                       bg-blue-600
                       text-white
                       font-medium
                       text-xs
                       leading-tight
                       uppercase
                       rounded
                       shadow-md
                       hover:bg-blue-700 hover:shadow-lg
                       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                       active:bg-blue-800 active:shadow-lg
                       transition
                       duration-150
                       ease-in-out">
                                     Send
                                 </button>

                             </form>
                         </div>
                         </div>
            }
        </div>
    );
}
