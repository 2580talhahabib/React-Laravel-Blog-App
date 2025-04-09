import React from 'react'
import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';
const CreateBlog = () => {
    const [html, setHtml] = useState('my <b>HTML</b>');
  
  function onChange(e) {
    setHtml(e.target.value);
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
        <div className="card shadow border-0 my-5">
            <div className="form-group m-3">
                <label htmlFor="" className='form-label'>Title</label>
                <input type="text" className='form-control'  placeholder='Title'/>
            </div>
            <div className="form-group m-3">
                <label htmlFor="" className='form-label'>Short Descripation</label>
             <textarea name="" id="" cols="30" rows="5" className='form-control'></textarea>
            </div>
            
            <div className="form-group m-3">
                <label htmlFor="" className='form-label'>Descripation</label>
                <Editor value={html} 
                containerProps={{ style: { height: '400px' } }}
                onChange={onChange} />
            </div>
            <div className="form-group m-3">
                <label htmlFor="" className='form-label'>Image</label>
                <input type="file" className='form-control' />
            </div>
            <div className="form-group m-3">
                <label htmlFor="" className='form-label'>Author</label>
                <input type="text" className='form-control' />
            </div>
            <div className="col-md-1 text-end my-2">
            <button className='btn btn-dark'>Create</button> 
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default CreateBlog
