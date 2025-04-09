import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
<>
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

export default Blogs
