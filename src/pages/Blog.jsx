import React from 'react'
import Header from '../Common/Header'
import { blog } from '../Data/blog'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allBlog = blog.map((v,i)=>{
        return(
            <div className='divItems' key={i}>
               <h3>{v.title}</h3> 
                <p> {v.body}</p> 
                <button> <Link to={`/blog/${v.id}`}>  More info</Link> </button>
                           </div>
            
        )
    })
  return (

    <div>
        <Header/>

        
        <h1>Blog</h1>
        <div className='container'>
             
          {allBlog}
        </div>
           


        </div>
  )
}
