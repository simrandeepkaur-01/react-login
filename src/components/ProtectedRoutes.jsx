import React from 'react'
import Home from './Home'
import LoginForm from './Login'

function ProtectedRoutes({ children, isLoggedIn,setIsLoggedIn }) {
    return <>
        {isLoggedIn ? children : <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
    </>

}

export default ProtectedRoutes