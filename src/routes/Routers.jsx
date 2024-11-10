import React from 'react'
import Home from '../pages/Home/Home'
import Contact from './../pages/Contact';
import Login from './../pages/Login';
import Services from './../pages/Services';
import Register from './../pages/Register';
import FindDoctor from '../pages/FindDoctor';
import DoctorDetails from './../pages/DoctorDetails/DoctorDetails';
import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/FindDoctor' element={<FindDoctor/>} />
      <Route path='/doctors/:id' element={<DoctorDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />

      {/* here we should add a Not Found page */}
      {/* in case not matched by previously defined routes */}
      {/* This can be used for handling 404 errors  */}
      <Route path='*' element={<Home/>}/>
    </Routes>
  )
}

export default Routers
