import { Routes, Route } from "react-router-dom";
import './App.css';
import {Header} from "./Header";
import {Login} from "./Login";
import React from "react";
import {Register} from "./Register";
import {Profile} from "./Profile";
import {AddCars} from "./AddCars";


function App() {


  return (
    <div className="App">
     <Header />
     <Routes>
         <Route path='login' element={<Login/>}/>
         <Route path='register' element={<Register/>}/>
         <Route path='profile' element={<Profile/>}/>
         <Route path='addCars' element={<AddCars/>}/>
     </Routes>
    </div>
  );
}
export default App;
