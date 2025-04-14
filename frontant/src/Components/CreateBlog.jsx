import React from 'react'
import { useState,useEffect } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CreateBlog = () => {
const navigate=useNavigate();

    const [html, setHtml] = useState(null);
    const [imageFile, setImageFile] = useState(null);
  
  function onChange(e) {
    setHtml(e.target.value);
  }
// useEffect(() => {

//   const form=$("#formsubmit");
// function handle(e){
// e.preventDefault();
// var formdata=new FormData(form[0]);
// console.log(formdata)
// formdata.append('description',html)
// $.ajax({
//   url:'http://127.0.0.1:8000/api/store',
//   type:'post',
//    dataType:'json',
//    data:formdata,
//    processData: false, 
//    contentType: false, 
//    success:function(response){
//    if(response.status == false){
//     $('.is-invalid').removeClass('is-invalid');
//     $('.invalid-feedback').html('');
//     let error =response.errors;
//     if(error){
//       for (const key in error) {
//         if (Object.prototype.hasOwnProperty.call(error, key)) {
//           const element = error[key];
//             $(`[name=${key}]`).addClass('is-invalid').siblings('p').addClass('invalid-feedback').html(element)
          
//         }
//       }
//     }
//    }else{
//     alert("Data get successfully")
//    }
//    }
  
//   })
// }


//   form.on('submit',handle)
//   return () => form.off('submit', handle);
// }, [html])
const handleImage = (e) => {
  setImageFile(e.target.files[0]); // Store the selected file in state
};
const { register, handleSubmit, watch, formState: { errors } } = useForm();

const formSubmit= async (data) =>{
   // Create FormData object
   const formData = new FormData();
    
   // Append all form fields
   formData.append('title', data.title);
   formData.append('short_desc', data.short_desc);
   
   formData.append('Auther', data.Auther);
   
   if(html){
    formData.append('description', html);
   }
   // Append the image file if it exists
   if (imageFile) {
     formData.append('image', imageFile);
   }

     const response = await fetch('http://127.0.0.1:8000/api/store', {
       method: 'POST',
       body: formData, // FormData will set the proper Content-Type header
     });
navigate('/')
toast("Record Added successfully");


}

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
            <button className='btn btn-dark'>Create</button> 
            </div>
        </div>
</form>
    </div>
</div>
</>
  )
}

export default CreateBlog
