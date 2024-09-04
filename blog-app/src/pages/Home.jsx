import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    const logout=()=>{
        navigate('/signup')
    }
  return (
    <div>
        <h1>Home</h1>
        <button onClick={logout}>Logout</button>
    </div>
    
  )
}

export default Home