import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencil } from "react-icons/fa6";
import BlogCard from './Components/BlogCard';
// import mainImage  from './Main.jpg';


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
<div className="container">
 <div className="row my-4">
  <div className="col-md-6">
  <h3>Blog</h3>
</div>
  <div className="col-md-6 text-end">
  <button className=' btn btn-sm btn-dark'>Create</button>
  </div>
 </div>
</div>
<div className="container">
  <div className="row">
<BlogCard />
<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
  </div>
</div>

    </>
  )
}

export default App
