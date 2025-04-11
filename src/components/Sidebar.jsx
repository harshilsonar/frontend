import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {
    const[searchParam,setsearchParam]=useSearchParams();

 
    const [gender,setgender]=useState(searchParam.getAll("category")||[])
    const handlechange=(e)=>{

    const{value}=e.target
    let newarray=[...gender]

    if(gender.includes(value))
    {
        newarray=gender.filter((el)=>el!=value)
    }
    else
    {
        newarray.push(value)
    }
    setgender(newarray)
    }
    useEffect(()=>{
           setsearchParam({category:gender})
    },[gender])
  return (
    <div>
    <input type="checkbox" onChange={(e)=>handlechange(e)} value={"men's clothing"} checked={gender.includes("men's clothing") }/>Men <br />
    <input type="checkbox"onChange={(e)=>handlechange(e)} value={"women' clothing"}  checked={gender.includes("women's clothing") }/>Women <br />
    <input type="checkbox" onChange={(e)=>handlechange(e)} value={"electronics"} checked={gender.includes("electronics") } />electronics <br />
    <input type="checkbox" onChange={(e)=>handlechange(e)} value={"jewelery"} checked={gender.includes("jewelery") } />jewelery <br />

    </div>
  )
}

export default Sidebar