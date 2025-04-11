import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from '../redux/actiontype'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
import { getdataApi } from '../redux/products/action'
import ProductCard from '../components/ProductCard'
import Sidebar from '../components/Sidebar'
import { useSearchParams } from 'react-router-dom'

const Product = () => {
  const { loading, errors, data } = useSelector(state => state.product)
  console.log(loading, errors, data)
  const dispatch = useDispatch()
const [order,setorder]=useState(null);
const[search,setsearch]=useDispatch();
const[searchParam,setsearchParam]=useSearchParams()


const paramobj={
  _sort:"price",
  _order:order,
  q:search,
  category:searchParam.getAll("category")
}
  useEffect(() => {
    const id=setTimeout(() => {
      dispatch(getdataApi(paramobj))
    },800);
    return () => clearTimeout(id);
  },[order,search,searchParam])
  return loading ? <Loading type={"balls"} color={"#eb3483"} delay={2000} /> : (
   
    <div style={{display:"flex"}}>
    
    <div style={{width:"35%",padding:"20px",margin:"20px"}}>
      <Sidebar/>
    </div>
    <div style={{ marginTop: "20px" }}>


<div style={{ display: "flex", padding: "15px", justifyContent: "space-around", borderRadius: "20px", width: "80%", margin: "auto" }}>
  {/* filteration-part */}
  <div>
    <select onChange={(e)=>setfilter(e.target.value)}>
      <option value="">select your category</option>
      <option value="men's clothing">Men</option>
      <option value="women's clothing">Women</option>
      <option value="jewelery">jewelery</option>
      <option value="electronics">electronics</option>
    </select>
  </div>
  {/* search part */}
  <div style={{ marginBottom: "20px", textAlign: "center" }}>
    <input type="text" onChange={(e)=>setsearch(e.target.value)} style={{ padding: "20px", width: "40%" }} />
  </div>

  {/* sort */}
  <div>
    <button onClick={()=>setorder("asc")}>LowtoHeigh</button>
    <button onClick={()=>setorder("desc")}>HeightoLow</button>
  </div>
</div>








{/* product part */}
<div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "5px" }}>
  {data.length > 0 && data.map((el) => {
    return (
      <ProductCard {...el} />
    );
  })}
</div>
</div>

    </div>
  )
}

export default Product