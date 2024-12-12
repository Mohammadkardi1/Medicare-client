import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthenticationProtect = ({children}) => {
    const userInfo = JSON.parse(localStorage.getItem('profile'))

    return userInfo?.data  ? <Navigate to='/home' />  : children
}

export default AuthenticationProtect