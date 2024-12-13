import React from 'react'
import Home from '../pages/Home/Home'
import Contact from './../pages/Contact'
import Login from './../pages/Login'
import Services from './../pages/Services'
import Register from './../pages/Register'
import FindDoctor from '../pages/FindDoctor'
import DoctorDetails from './../pages/DoctorDetails/DoctorDetails'
import { Routes, Route } from 'react-router-dom'
import VerifyEmail from '../pages/VerifyEmail'
import AuthenticationProtect from './AuthenticationProtect'
import AuthorizationProtect from './AuthorizationProtect';
import NotFoundPage from '../pages/NotFoundPage';
import PatientProfile from './../Dashboard/PatientProfile/PatientProfile';
import Dashboard from '../Dashboard/DoctorProfile/Dashboard'



const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />

      <Route path='/login' element={<AuthenticationProtect><Login/></AuthenticationProtect>} />
      <Route path='/register' element={<AuthenticationProtect><Register/></AuthenticationProtect>} />

      
      <Route path='/FindDoctor' element={<FindDoctor/>} />
      <Route path='/doctors/:id' element={<DoctorDetails/>} />

      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />



      <Route path='/api/auth/:role/:id/verify/:token' element={<VerifyEmail/>}/>

      <Route path='/patient/profile' element={
                <AuthorizationProtect allowedRoles={['patient']}>
                  <PatientProfile/>
                </AuthorizationProtect>
                }/>
      <Route path='/doctor/profile' element={
                <AuthorizationProtect allowedRoles={['doctor']}>
                  <Dashboard/>
                </AuthorizationProtect>
                }/>

      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default Routers
