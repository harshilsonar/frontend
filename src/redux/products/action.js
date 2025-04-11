import axios from "axios";
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "../actiontype";
import { toast } from "react-toastify";

export const getdataApi=(paramobj)=>(dispatch)=>{
     dispatch ({type:GET_PRODUCT_REQUEST})
    axios.get(`https://backend-server-bisr.onrender.com/product`,{
      params:paramobj
    })
    .then((response) => {
      console.log(response.data);
      toast.success("data get successfully")
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
  }).catch((err)=>{
    console.log(err);
    toast.error(err?.message)
    dispatch({type:GET_PRODUCT_ERROR,payload:err?.message})
  })
  }


  export const handleDelete=(id)=>(dispatch)=>{
  axios.delete(`https://backend-server-bisr.onrender.com/product${id}`)
  .then(res=>{
    console.log(res)
    getdataApi(dispatch)
  })
  .catch(err=>{
    console.log(err)
    })
    }