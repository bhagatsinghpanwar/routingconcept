import React from 'react'
import Header from '../Common/Header'
import { useLocation } from 'react-router-dom'
import { blog } from '../Data/blog';

// Dynamic Routing

export default function Blogdetails() {
    let uselocation = useLocation();
     let currentId =uselocation.pathname.split('/')[2];
     let currentData = blog.filter((v)=>v.id==currentId)[0]
     console.log(currentData)
  return (
    <div><Header/>
    
    <h1>{currentData.body}</h1>
    
    
    
    </div>
  )
}
