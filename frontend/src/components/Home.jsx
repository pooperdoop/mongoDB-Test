import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

const navigate = useNavigate();
function handleLogOut(){
navigate('/');
}

  return (
    <div className='flex flex-col justify-center items-center'>
       <h1 className='text-9xl'>Hello</h1>
       <button onClick={handleLogOut} className='bg-blue-400 w-full h-10 mt-1 rounded-lg '>Login</button>
    </div>
  )
}

export default Home
