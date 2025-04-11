import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Private = ({children}) => {
    const{isAuth}=useSelector((state)=>state.auth)
    if(!isAuth)
    {
        return<Navigate to={"/signin"}/> 
       }
       else

  return children;
  
}

export default Private