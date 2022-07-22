
import { useState } from "react";
import { storage } from './config/fbConfig';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


export const AddCars = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
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
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className='form'>
                <input type='file' />
                <button type='submit'>Upload</button>
            </form>
            {
                !imgUrl &&
                <div className='outerbar'>
                    <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                </div>
            }
            {
                imgUrl &&
                <img src={imgUrl} alt='uploaded file' height={200} />
            }
        </div>
    );
}








// import React, {useEffect, useState} from "react";
// import { collection, addDoc } from "firebase/firestore";
// import {db} from "./config/fbConfig";
// import {useDispatch, useSelector} from "react-redux";
// import {storage} from "./config/fbConfig";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
//
//
// export const AddCars = () => {
//     const carsData = useSelector((state) => state.getCarsReducer.carsData)
//     const dispatch = useDispatch()
//     const [formData, setFormData] = useState({
//         image: '',
//         brand: '',
//         model: '',
//         description: ''
//     })
//     const [image, setImage] = useState('');
//     const [Url, setUrl] = useState('');
//     const handleChange = (name, value) => {
//         setFormData({...formData, [name]: value})
//     };
//     // const handleImageChange = (e) => {
//     //     setFormData({...formData, image: e.target.files[0]})
//     // };
//
//
//
//     const handleSubmit = async (e)  => {
//         e.preventDefault()
//       const data = await addDoc(collection(db, "cars"), {
//             brand: formData.brand,
//             model: formData.model,
//             description: formData.description
//         });
//
//     }
//
//
//
//
//
//
//     return (
//         <div className='flex justify-center p-20'>
//         <div className=" p-6 rounded-lg shadow-lg bg-white max-w-md">
//             <form
//                 onSubmit={handleSubmit}
//             >
//                 <div className="form-group mb-6">
//                     <input className="form-control
//     block
//     w-full
//     px-3
//     py-1.5
//     text-base
//     font-normal
//     text-gray-700
//     bg-white bg-clip-padding
//     border border-solid border-gray-300
//     rounded
//     transition
//     ease-in-out
//     m-0
//     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFileMultiple"
//                            multiple
//                            accept='image/jpg'
//                            name='image'
//                            onChange={(e) => { setImage(e.target.files[0]) }}
//                            required
//                     />
//                 </div>
//                 <div className="form-group mb-6">
//                     <input type="text" className="form-control block
//         w-full
//         px-3
//         py-1.5
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
//                            placeholder="brand"
//                            required
//                            onChange={(e) => {
//                                handleChange('brand', e.target.value)
//                            }}
//                     />
//                 </div>
//                 <p><a href={Url}>{Url}</a></p>
//                 <div className="form-group mb-6">
//       <input
//           className="
//         form-control
//         block
//         w-full
//         px-3
//         py-1.5
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//       "
//           id="exampleFormControlTextarea13"
//           rows="3"
//           placeholder="model"
//           required
//           onChange={(e) => {
//               handleChange('model', e.target.value)
//           }}
//       />
//
//                     <textarea
//                         className="
//                         mt-8
//         form-control
//         block
//         w-full
//         px-3
//         py-1.5
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//       "
//                         id="exampleFormControlTextarea13"
//                         rows="3"
//                         required
//                         placeholder="description"
//                         onChange={(e) => {
//                             handleChange('description', e.target.value)
//                         }}
//                     />
//                 </div>
//                 <button type="submit" className="
//       w-full
//       px-6
//       py-2.5
//       bg-blue-600
//       text-white
//       font-medium
//       text-xs
//       leading-tight
//       uppercase
//       rounded
//       shadow-md
//       hover:bg-blue-700 hover:shadow-lg
//       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//       active:bg-blue-800 active:shadow-lg
//       transition
//       duration-150
//       ease-in-out">
//                     Send
//                 </button>
//             </form>
//         </div>
//         </div>
//     )
//
// }