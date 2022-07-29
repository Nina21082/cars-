import React, {useEffect} from "react";
import {useState} from "react";
import {storage} from './config/fbConfig';
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import {db} from "./config/fbConfig";
import {collection, addDoc, doc, getDoc, setDoc, query, getDocs, where} from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCarBrand} from "./store/actions/getCars";


export const AddCars = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authReducer.currentUser);
    const  brand = useSelector((state) => state.getCarsReducer.brand)
    const [modelData, setModelData] = useState([])
    const [brandData, setBrandData] = useState([])

    const navigate = useNavigate()
    const {id} = useParams();
    const [isEdit, setIsEdit] = useState(false)
    const [formData, setFormData] = useState({
        image: '',
        brand: '',
        model: '',
        description: '',
        user_id: '',
        brandId: ''
    })


    useEffect(() => {
        if (id === 'add') {
            setIsEdit(false)
        } else {
            setIsEdit(true)
            getCar()
        }
    }, [])

    useEffect(() => {
        dispatch(getCarBrand())
    }, [dispatch])


    const getCar = async () => {
        const car = doc(db, "cars", id);
        const docSnap = await getDoc(car);
        if (docSnap.exists()) {
            setFormData(docSnap.data())
            handleChange('brand', docSnap.data().brandId)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            edit(e)
        } else {
            save(e)
        }
    }


    const handleChange = async (name, value) => {
        if (name === 'brand'){
            const q = query(collection(db, "CarModel"), where("brandId", "==", value));
            const querySnapshot = await getDocs(q);
            const model = []
            querySnapshot.forEach(doc => {
                model.push({...doc.data(), id: doc.brandId})
            })
            setModelData(model);
        }
        setFormData(e => {
            return {...e, [name]: value}
        })
    };


    const save = async (e) => {
        const file = e.target[0].files[0];
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
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    brand.map(item => {
                        if (item.id === formData.brand) {
                            formData.brand = item.name
                            formData.brandId = item.id
                        }
                        return item;
                    })
                    await addDoc(collection(db, "cars"), {
                        image: downloadURL,

                        brand: formData.brand,

                        brandId: formData.brandId,

                        model: formData.model,

                        description: formData.description,

                        user_id: user?.uid,

                    }).then(() => {
                        navigate("/profile", {replace: true})
                    }).finally(() => {

                    })
                });
            }
        );

    };

    const edit = (e) => {
        const file = e.target[0].files[0];
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
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    brand.map(item => {
                        if (item.id === formData.brand) {
                            formData.brand = item.name
                            formData.brandId = item.id
                        }
                        return item;
                    })
                    await setDoc(doc(db, "cars", id), {
                        image: downloadURL,

                        brand: formData.brand,

                        brandId: formData.brandId,

                        model: formData.model,

                        description: formData.description,

                        user_id: user?.uid,


                    }).then(() => {
                        navigate("/profile", {replace: true})
                    })
                });
            }
        );
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
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file"
                                   id="formFileMultiple"
                                   multiple
                                   accept='image/jpg'
                                   name='image'
                                   required
                            />
                        </div>
                        {formData && formData.image &&
                            <img src={formData.image} width="120px" height="120px" className="mb-2"/>
                        }
                        <div className="form-group mb-6">

                            <select
                                value={formData.brand}
                                onChange={(e) => {
                                    handleChange('brand', e.target.value)
                                }}
                                className='form-select appearance-none
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
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
                                <option selected value=''>Choose car brand</option>
                                {brand.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>


                            <select
                                value={formData.model}
                                onChange={(e) => {
                                    handleChange('model', e.target.value)
                                }}
                                className='form-select appearance-none
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

      mt-4
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
                                <option selected value=''>Choose car model</option>
                                {modelData.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                                ))}
                            </select>
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
                                value={formData.description}
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
