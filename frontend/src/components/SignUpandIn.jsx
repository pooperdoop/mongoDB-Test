import React, { useState } from 'react';

const SignUpandIn = () => {

  const [isLogin, setIsLogin] = useState(true);


  function handleIsLogin(){
      setIsLogin(l => !l);
  }

  const LoginPage = () =>{
    return(
      <div className='w-screen h-screen bg-linear-to-bl from-blue-500 to-red-500 flex items-center justify-center'>
        <div className='w-auto md:min-w-96 h-auto min-h-2/4 bg-white rounded-lg flex justify-evenly items-center flex-col p-7  text-center'>
            <h1 className='topText '>Login</h1>
            <hr className='border-black border-t-2 block h-0.5 w-full mb-4'/>
            <form action="POST" className='flex flex-col justify-evenly items-center h-auto md:w-5/6 w-full '>
                
                <h1 className='self-start'>Email:</h1>
                <input type="email" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='example@example.com' />

                <h1 className='self-start'>Password:</h1>
                <input type="password" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='**********' autoComplete='on' />

                <button type="submit" className='bg-blue-400 w-full h-10 mt-1 rounded-lg '>Login</button>
                <h1>Don't have an account? <a onClick={handleIsLogin}  className='text-blue-400 underline cursor-pointer'>Sign Up</a></h1>
            </form>
        </div>
      </div>
    )
  }

  const SignUpPage = () =>{
    return(
    <div className='w-screen h-screen bg-linear-to-bl from-red-500 to-blue-500 flex items-center justify-center'>
      <div className='w-auto md:min-w-96 h-auto min-h-2/4 bg-white rounded-lg flex justify-evenly items-center flex-col p-7  text-center'>
          <h1 className='topText '>Sign Up</h1>
          <hr className='border-black border-t-2 block h-0.5 w-full mb-4'/>
          <form action="POST" className='flex flex-col justify-evenly items-center h-auto md:w-5/6 w-full '>
              
              <h1 className='self-start'>Email:</h1>
              <input type="email" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='example@example.com' />

              <h1 className='self-start'>Password:</h1>
              <input type="password" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='**********' autoComplete='on' />

              <h1 className='self-start'>Confirm Password:</h1>
              <input type="password" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='**********' autoComplete='on' />

              <button type="submit" className='bg-blue-400 w-full h-10 mt-1 rounded-lg '>Login</button>
              <h1>Already have an account? <a onClick={handleIsLogin} className='text-blue-400 underline cursor-pointer'>Login</a></h1>
          </form>
        </div>
      </div>
    )
  }

  return (
  <>
    {isLogin ? <LoginPage /> : <SignUpPage />}
  </>
  );
}

export default SignUpandIn;
