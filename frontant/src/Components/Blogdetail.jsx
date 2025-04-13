import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Blogdetail = () => {
    const [blog,setblog]=useState([])
    const param=useParams();

    const detailblog=async ()=>{
        const res= await fetch('http://127.0.0.1:8000/api/show/'+param.id);
        const result= await res.json();
        setblog(result.data);
        console.log(result);
        }
    useEffect(()=>(
        detailblog()
    ),[])
    const showimage =(img)=>{
        return (img) ? 'http://127.0.0.1:8000/storage/product/'+img : '/Main.jpg';
        }
  return (
  <>
 <div className="container">
    <div className="row">
        <div className="col-md-12 d-flex justify-content-between my-3">
            <h3>{blog.title}</h3>
            <a href="" className='btn btn-dark '>Back to Blogs</a>
        </div>
        <div className="col-md-4">
            by <b>{blog.Auther}</b> {Date(blog.created_at)}
        </div>
    </div>
    <div className="row">
    <div className="col-md-12" >
  <img 
  className='mt-3 rounded shadow-sm' src={showimage(blog.image)}   alt="Descriptive text"  style={{ position: 'relative', top: 0,left: 0,width: '100%', height: '300px',objectFit: 'cover'}}
  />
</div>
    </div>
    <div className="row mt-5">
       <div className="col-md-12">
       <div className="content">
            <p>{blog.description}</p>
        </div>
       </div>
    </div>
 </div>
  </>
  )
}

export default Blogdetail
