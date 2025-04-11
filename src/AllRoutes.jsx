import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'
import Product from './pages/Product'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Private from './components/Private'

const AllRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/product' element={
         <Private>
         <Product/>
         </Private>
   }></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
     </Routes>
  )
}

export default AllRoutes