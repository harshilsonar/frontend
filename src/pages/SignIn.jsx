import axios from 'axios';
import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SIGNIN } from '../redux/actiontype';
import { LoginUser } from '../redux/Auth/action';

const initalstate={

    email:"",
    password:""
}
const SignIn = () => {

    const [formdata, setformdata] = useState( initalstate)
        const{email,password}=formdata;
const dispatch=useDispatch()
const{currentUser}=useSelector(state=>state.auth)
console.log(currentUser)
        const handlechange=(e)=>{
            setformdata({...formdata,[e.target.name]:e.target.value})
        }
    
        const handleSubmit=(e)=>{
            e.preventdefault()
    
            // LoginUser(dispatch,formdata)
            dispatch(LoginUser(formdata))
          
        }

  return (
    <div> <form onSubmit={handleSubmit}>
    <input type="email" value={email} name='email' onChange={handlechange} placeholder='enter your Email  '/> <br /> 
    <input type="password" value={password} name='password' onChange={handlechange} placeholder='enter your password '/><br />
    <input type="submit" />  
</form>
</div>
  )
}

export default SignIn