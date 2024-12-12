import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthorizationProtect = ({children, allowedRoles}) => {

    const userInfo = JSON.parse(localStorage.getItem('profile'))
    const isAllowed = allowedRoles.includes(userInfo?.role)

  return isAllowed ? children : <Navigate to='/login' replace={true}/>
  
}

export default AuthorizationProtect
