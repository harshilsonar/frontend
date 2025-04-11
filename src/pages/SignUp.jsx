import axios from 'axios';
import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP } from '../redux/actiontype';
import { Registeruser } from '../redux/Auth/action';
const initalstate={

    name:"",
    email:"",
    password:""
}


 function reducer(state=initalstate,action){

    switch(action.type){
        default:
            state;
    }

}

const SignUp = () => {

    const [formdata, setformdata] = useReducer(reducer, initalstate)
    const{name,email,password}=formdata

    const datafromstore=useSelector(state=>state.auth)
console.log(datafromstore)

const dispatch=useDispatch()
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

   

    const handleSubmit=(e)=>{
        e.preventdefault();
        // Registeruser(dispatch,formdata)
        dispatch(Registeruser(formdata))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} name='name' onChange={handlechange}  placeholder='enter your name '/> <br />
            <input type="email" value={email} name='email' onChange={handlechange} placeholder='enter your Email '/> <br /> 
            <input type="password" value={password} name='password' onChange={handlechange} placeholder='enter your password '/><br />
            <input type="submit" />  
        </form>
    </div>
  )
}

export default SignUp