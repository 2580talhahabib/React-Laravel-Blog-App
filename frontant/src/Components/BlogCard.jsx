import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencil } from "react-icons/fa6";
const BlogCard = () => {
  return (
    <>
    <div className="col-md-3">
      <div className="card my-4 shadow-sm border-0">
        <div className="card-img" style={{ height: "200px", overflow: "hidden" }}>
          <img src="./Main.jpg" alt="" className='img-fluid' />
        </div>
        <div className="card-body">
        <div className="card-title">
         <h5>some quick example text to build</h5> 
        </div>
        <div className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. This is only for purpose.
        </div>
       <div className="d-flex justify-content-between my-2">
        <button className='btn btn-sm btn-dark'>Details</button>
        <FaPencil className='mt-2'/>
       </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogCard
