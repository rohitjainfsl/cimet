import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs) 

    const trimBody = (text)=>{
        return text.split(" ").slice(0,10).join(' ')
    }
  return (
    <div>{blogs.map((blog)=>{
        return (
            <div key={blog.id}>
                <h3 className='text-2xl font-bold'>{blog.title}</h3>
                <p>{trimBody(blog.body)+"..."}</p>
            </div>
        )
    })}</div>
  )
}

export default Blog