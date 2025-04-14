import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route,Routes} from 'react-router-dom';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import CreateBlog from './Components/CreateBlog';
import Blogdetail from './Components/Blogdetail';
import { ToastContainer } from 'react-toastify';
import EditBlog from './Components/EditBlog';

function App() {
  return (
    <>
<div className="container-fluid">
<div className="row">
  <div className="col-md-12 bg-dark text-white">
    <h3 className='text-center py-3'>React&Larave Blog App</h3>
  </div>
</div>
</div>
<Routes>
  <Route path='/' element={<Blogs />}/>
  <Route path='/contact' element={<Contact />}/>
  <Route path='/create' element={<CreateBlog />} />
  <Route path='/blog/:id' element={<Blogdetail />} />
  <Route path='/blog/update/:id' element={<EditBlog/>} />
  
</Routes>
<ToastContainer />
    </>
  )
}

export default App
