import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  const [blogs,setBlogs]=useState([]);
  const fetchBlogs=async ()=>{
  const res= await fetch('http://127.0.0.1:8000/api/index');
  const result= await res.json();
  setBlogs(result.blogs);
  console.log(result);
  }


  useEffect(()=>{
  fetchBlogs();
  },[])

  return (
<>
<div className="container">
 <div className="row my-4">
  <div className="col-md-6">
  <h3>Blog</h3>
</div>
  <div className="col-md-6 text-end">
  <a href='/create' className=' btn btn-sm btn-dark'>Create</a>
  </div>
 </div>
</div>
<div className="container">
  <div className="row">
    {
     blogs.map((blog)=>{
 return <BlogCard key={blog.id} setBlogs={setBlogs} blogs={blogs} blog={blog} />
     })
    }
  </div>
</div>

</>
  )
}

export default Blogs
