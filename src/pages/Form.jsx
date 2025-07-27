import React, { useState } from 'react'

export default function Form() {
    
    let [uname, setUname] = useState('')
    let [Password, setpassword]=useState('')

    let handlesubmit = (event)=>{
        event.preventDefault()
        console.log(uname, Password)
    }

  return (
        
    <div className='container'>
        <form onSubmit={handlesubmit}>
            <div className=''>
                <div><h1>Contact Form </h1></div>
                <label>Username</label>
                <input type="text" onChange={(event)=>setUname(event.target.value)} value={uname} />
            </div>

                <div>
                <label>Password</label>
                <input type="text" onChange={(event)=>setpassword(event.target.value)}    value={Password} />
            </div>
            <button>Login</button>

        </form>
    </div>

  )
}
