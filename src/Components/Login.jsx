import React, { useState } from 'react'

const Login = () => {

    const [signup, setSignup] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSignupShow = () =>{
        setSignup(!signup)
    }

    const handleSign = () =>{
        // console.log("clicked")
    }

  return (
    <div className='flex flex-col justify-center items-center bg-yellow-300 p-4 m-4 rounded-md'>
       
       <div className='m-2 p-2 font-bold text-xl'>{signup?"Signup Page":"Login Page"}</div>
       
        <form onSubmit={(e)=>e.preventDefault()}>
        
        <div className='bg-black text-white p-4 rounded-md m-2 w-full'>
        
        <label>Name</label>
        <div>  
            <input className='text-black p-2 border border-gray-300 rounded-md'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
        
            <label>Email</label>
            <div>
            <input className='text-black p-2 border border-gray-300 rounded-md'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="text" />
        </div>
        
            <label>Password</label>
        <div>
            <input className='text-black p-2 border border-gray-300 rounded-md'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type="password" />
        </div>
        <div className='flex justify-center'>
        <button 
        onClick={handleSign}
        className='bg-yellow-300 p-2 rounded-lg m-2 text-black'>{signup?"Signup":"Signin"}</button>
        </div>
        </div>
        

        <p 
        className='p-2 m-2 cursor-pointer font-bold'
        onClick={handleSignupShow}>{signup?"Already a User? Login Now":"Create a new account and Sign Up"}</p>
        </form>
        </div>
  )
}

export default Login