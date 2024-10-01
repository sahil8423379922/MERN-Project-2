import React from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import {BrowserRouter,Route,Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}
