import React from 'react'

const AuthorizationProtect = ({children}) => {

    const user = JSON.parse(localStorage.getItem('profile'))

  return user?.data ? children : <Navigate to='/login' state={{ path:location.pathname}}/>
  
}

export default AuthorizationProtect
