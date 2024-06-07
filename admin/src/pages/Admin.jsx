import React from 'react'
import Slidebar from '../components/Slidebar'
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

const Admin = () => {
  return (
    <div className='lg:flex'>
      <Slidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct />}/>
      </Routes>
    </div>
  )
}

export default Admin