import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password:"",
  })




  const handleLogin = async(event) =>{
    event.preventDefault();
    const {success, message} = await createAccount(newAccount);
    console.log("Success:", success);
    console.log("Message:", message);
  }



  function gotoSignup(){
    navigate('/Sign-Up');
  }


  return (
    <div className='w-screen h-screen bg-linear-to-bl from-blue-500 to-red-500 flex items-center justify-center'>
        <div className='w-auto md:min-w-96 h-auto min-h-2/4 bg-white rounded-lg flex justify-evenly items-center flex-col p-7  text-center'>
            <h1 className='topText '>Login</h1>
            <hr className='border-black border-t-2 block h-0.5 w-full mb-4'/>
            <form onSubmit={handleLogin} className='flex flex-col justify-evenly items-center h-auto md:w-5/6 w-full '>
                
                <h1 className='self-start'>Email:</h1>
                <input type="email" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='example@example.com' value={loginData.email}
                 onChange={(e) => setLoginData({...loginData, email: e.target.value})} required/>

                <h1 className='self-start'>Password:</h1>
                <input type="password" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='**********' autoComplete='on' value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})} required/>

                <button type="submit" className='bg-blue-400 w-full h-10 mt-1 rounded-lg '>Login</button>
                <h1>Don't have an account? <a onClick={gotoSignup}  className='text-blue-400 underline cursor-pointer'>Sign Up</a></h1>
            </form>
        </div>
      </div>
  );
}

export default Login;
