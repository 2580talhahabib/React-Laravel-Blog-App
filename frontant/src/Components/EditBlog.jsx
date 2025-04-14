import React from 'react'
import { useState,useEffect } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditBlog = () => {

  const navigate=useNavigate();


    const [html, setHtml] = useState(null);
    const [imageFile, setImageFile] = useState(null);
  
  function onChange(e) {
    setHtml(e.target.value);
  }

const handleImage = (e) => {
  setImageFile(e.target.files[0]); // Store the selected file in state
};
const { register, handleSubmit, watch, reset,formState: { errors } } = useForm();

// const formSubmit= async (data) =>{
//    // Create FormData object
//    const formData = new FormData();
    
//    // Append all form fields
//    formData.append('title', data.title);
//    formData.append('short_desc', data.short_desc);
   
//    formData.append('Auther', data.Auther);
   
//    if(html){
//     formData.append('description', html);
//    }
//    // Append the image file if it exists
//    if (imageFile) {
//      formData.append('image', imageFile);
//    }

//    const response = await fetch('http://127.0.0.1:8000/api/update/' + param.id, {
//        method: 'put',
//        body: formData, // FormData will set the proper Content-Type header
//      });
// navigate('/')
// toast("Record Added Upadated");
//     }

// Fix the useEffect
useEffect(() => {
  detailblog();
  // Return nothing or a proper cleanup function
}, [])

// Fix the URL in the update function
const formSubmit = async (data) => {
 const formData = new FormData();
 
 formData.append('title', data.title);
 formData.append('short_desc', data.short_desc);
 formData.append('Auther', data.Auther);
 
 if(html){
  formData.append('description', html);
 }
 
 if (imageFile) {
   formData.append('image', imageFile);
 }

 try {
   // Fix the URL concatenation
   const response = await fetch(`http://127.0.0.1:8000/api/update/${param.id}`, {
     method: 'post',
     body: formData,
   });
   
   const result = await response.json();
   if(result.status ) {
     navigate('/');
     toast("Record Updated Successfully");
   } else {
     toast.error("Failed to update record");
   }
 } catch (error) {
   console.error("Error updating blog:", error);
   toast.error("An error occurred while updating");
 }
}
    
  const [blog,setblog]=useState([])
  const param=useParams();

  const detailblog=async ()=>{
      const res= await fetch('http://127.0.0.1:8000/api/show/'+param.id);
      const result= await res.json();
      setblog(result.data);
      reset(result.data)
      setHtml(result.data.description)
      console.log(result);
      }
    //   useEffect(() => {
    //     detailblog();
        
    // }, [])
  return (
 <>
 <div className="container">
  <div className="row my-4">
   <div className="col-md-6">
   <h3>Create Blog</h3>
 </div>
   <div className="col-md-6 text-end">
   <a href='/' className=' btn btn-sm btn-dark'>Back</a>
   </div>
  </div>
 </div>
 
 <div className="container">
     <div className="row">
 <form onSubmit={handleSubmit(formSubmit)}>
 <div className="card shadow border-0 my-5">
             <div className="form-group m-3">
                 <label htmlFor="" className='form-label'>Title</label>
                 <input type="text" {...register("title", { required: true })} name='title' className={`form-control ${errors.title && 'is-invalid'}`}  placeholder='Title'/>
                 {errors.title && <p className='text-danger mt-1 invalid-feedback'>Title field is required</p>}
             </div>
             <div className="form-group m-3">
                 <label htmlFor="" className='form-label'>Short Descripation</label>
              <textarea name="short_desc" {...register("short_desc")} id="" cols="30" rows="5" className='form-control'></textarea>
             </div>
             
             <div className="form-group m-3">
                 <label htmlFor="" className='form-label'>Descripation</label>
                 <Editor value={html} 
                 containerProps={{ style: { height: '400px' } }}
                 onChange={onChange}  name='description' />
             </div>
             <div className="form-group m-3">
                 <label htmlFor="" className='form-label'>Image</label>
                 <input type="file" onChange={handleImage} className='form-control'  name='image'/>
             </div>
             <div className="form-group m-3">
                 <label htmlFor="" className='form-label'>Author</label>
                 <input name='Auther'  {...register("Auther", { required: true })}  type="text" className={`form-control ${errors.Auther && 'is-invalid'}`}  />
                 {errors.Auther && <p className='text-danger mt-1 '>Auther field is required</p>}
            
             </div>
             <div className="col-md-1 text-end my-2">
             <button className='btn btn-dark'>Update</button> 
             </div>
         </div>
 </form>
     </div>
 </div>
 </>
   )
 
}

export default EditBlog
