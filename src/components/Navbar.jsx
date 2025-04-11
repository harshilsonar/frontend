import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const{currentUser}=useSelector(state=>state.auth)
  return (
    <div style={{display:"flex",justifyContent:'space-around',padding:"5px",backgroundColor:"whitesmoke"}}>
        <div>
            <Link to={"/"}>Home</Link>
        </div>
        <div>
{          currentUser?.role=="admin"&& <Link to={"/addproduct"}>Addproduct</Link>}        </div>
        <div>
            <Link to={"/product"}>Product</Link>
        </div>
        <div>
            <Link to={"/signin"}><button>Signup</button></Link>
        </div>
        <div>
            <Link to={"/signup"}><button>Signin</button></Link>
        </div>
    </div>
  )
}

export default Navbar