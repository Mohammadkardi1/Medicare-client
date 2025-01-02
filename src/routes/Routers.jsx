import React from 'react'
import Home from '../pages/Home/Home'
import Contact from './../pages/Contact'
import Login from './../pages/Login'
import Services from './../pages/Services'
import Register from './../pages/Register'
import FindDoctor from '../pages/FindDoctor'
import { Routes, Route } from 'react-router-dom'
import VerifyEmail from '../pages/VerifyEmail'
import AuthenticationProtect from './AuthenticationProtect'
import AuthorizationProtect from './AuthorizationProtect';
import NotFoundPage from '../pages/NotFoundPage';
import PatientDashboard from './../Dashboard/PatientProfile/PatientDashboard';
import DoctorDashboard from '../Dashboard/DoctorProfile/DoctorDashboard'
import DoctorProfile from './../pages/DoctorProfile';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<AuthenticationProtect><Login/></AuthenticationProtect>} />
      <Route path='/register' element={<AuthenticationProtect><Register/></AuthenticationProtect>} />
      <Route path='/FindDoctor' element={<FindDoctor/>} />
      <Route path='/doctor/:doctorID' element={<DoctorProfile/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/api/auth/:role/:id/verify/:token' element={<VerifyEmail/>}/>
      <Route path='/patient/profile' element={
                <AuthorizationProtect allowedRoles={['patient']}>
                  <PatientDashboard/>
                </AuthorizationProtect>
                }/>
      <Route path='/doctor/profile' element={
                <AuthorizationProtect allowedRoles={['doctor']}>
                  <DoctorDashboard/>
                </AuthorizationProtect>
                }/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default Routers
