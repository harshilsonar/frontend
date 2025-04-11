import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete } from '../redux/products/action';

const ProductCard = ({id,image,title,price}) => {
  const {currentUser}=useSelector(state=>state.auth)
  const dispatch= useDispatch (); 

  return (
    
      <div key={id} style={{border:"2px solid red",padding:"10px",backgroundColor:"whitesmoke",borderRadius:"20px",textAlign:"center" ,width:"80%",margin:"auto"}}>
        <img src={image} alt="" height={"200px"} />
        <h3>{title}</h3>
         <h3>{price}</h3>
     {currentUser.role==="admin" && <button onClick={()=>{
      dispatch(handleDelete(id))
     }}>Delete</button>}
      { currentUser.role==="admin"&& <button>Edit</button>}
      </div>
      );
      }

export default ProductCard