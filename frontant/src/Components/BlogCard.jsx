import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPencil } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { toast } from 'react-toastify';
const BlogCard = ({blog,blogs,setBlogs}) => {
  const deletblog= async (id) =>{
if(confirm("Are you sure you want to delete")){
const res= await fetch("http://127.0.0.1:8000/api/Destroy/"+id,{
  method:"DELETE",
})
const newblog=blogs.filter((blog)=> blog.id != id )
setBlogs(newblog)
toast("Blog Deleted successfully")
}
  }
  const showimage =(img)=>{
  return (img) ? 'http://127.0.0.1:8000/storage/product/'+img : './Main.jpg';
  }
  return (
    <>
    <div className="col-md-3">
      <div className="card my-4 shadow-sm border-0">
        <div className="card-img" style={{ height: "200px", overflow: "hidden" }}>
          <img src={showimage(blog.image)} alt="" className='img-fluid' />
        </div>
        <div className="card-body">
        <div className="card-title">
         <h5>{blog.title}</h5> 
        </div>
        <div className="card-text">
          {blog.short_desc}
        </div>
       <div className="d-flex justify-content-between my-2">
        <a href={`/blog/${blog.id}`} className='btn btn-sm btn-dark'>Details</a>
        <div className="flex">
        <a href={`/blog/update/${blog.id}`}><FaPencil className='mt-2'/></a>
        <a  ><CiShoppingBasket className='m-1 text-danger' onClick={()=> deletblog(blog.id)} style={{ fontSize:"25px" }} /></a>
        </div>
   
       </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogCard
