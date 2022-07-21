import { Routes, Route } from "react-router-dom";
import './App.css';
import {Header} from "./Header";
import {Login} from "./Login";
import React from "react";
import {Register} from "./Register";

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
         <Route path='login' element={<Login/>}/>
         <Route path='register' element={<Register/>}/>
     </Routes>
    </div>
  );
}
export default App;
