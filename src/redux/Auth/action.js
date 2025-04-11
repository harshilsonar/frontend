import axios from "axios"
import { SIGNIN, SIGNUP } from "../actiontype"

export const Registeruser=(formdata)=>(dispatch)=>{
        axios.post("https://backend-server-bisr.onrender.com/auth",{...formdata,role:"user"})
        .then((res)=>{
            console.log(res)
            dispatch({type:SIGNUP,payload:formdata})
        }).catch((err)=>{
            console.log(err)
        })
    } 


    export const LoginUser=(formdata)=>(dispatch)=>{
        const {email,password}=formdata
          axios.get("https://backend-server-bisr.onrender.com/auth")
                    .then((res)=>{
                       const useerArray=res.data
                       const currentUser=useerArray.find((el)=>el.email===email&&el.password===password)
                       console.log(currentUser)
                       dispatch({type:SIGNIN,payload:currentUser})
                    }).catch((err)=>{
                        console.log(err)
                    })
    } 