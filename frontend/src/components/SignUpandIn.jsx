import React, { useState } from 'react';
import { createNewAccount } from '../accounts/newAccount';

const SignUpandIn = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [newAccount, setNewAccount] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const {createAccount} = createNewAccount()

  const handleCreateAccount = async(event) => {
    event.preventDefault();
    const {success, message} = await createAccount(newAccount);
    console.log("Success:", success);
    console.log("Message:", message);
  }


  function handleIsLogin(){
      setIsLogin(l => !l);
  }


  return (
  <>
    {isLogin ?       
    
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
    
    :     
    
    <div className='w-screen h-screen bg-linear-to-bl from-red-500 to-blue-500 flex items-center justify-center'>
      <div className='w-auto md:min-w-96 h-auto min-h-2/4 bg-white rounded-lg flex justify-evenly items-center flex-col p-7  text-center'>
          <h1 className='topText '>Sign Up</h1>
          <hr className='border-black border-t-2 block h-0.5 w-full mb-4'/>
          <form onSubmit={handleCreateAccount} className='flex flex-col justify-evenly items-center h-auto md:w-5/6 w-full '>

              <h1 className='self-start'>Full Name:</h1>
              <input type="text" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='John' value={newAccount.name} 
              onChange={(e) => setNewAccount({...newAccount, name: e.target.value})}/>

              <h1 className='self-start'>Username:</h1>
              <input type="text" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='Doe' value={newAccount.userName} 
              onChange={(e) => setNewAccount({...newAccount, userName: e.target.value})}/>
              
              <h1 className='self-start'>Email:</h1>
              <input type="email" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='example@example.com' value={newAccount.email}
              onChange={(e) => setNewAccount({...newAccount, email: e.target.value})}/>

              <h1 className='self-start'>Password:</h1>
              <input type="password" className='bg-gray-200 w-full h-10 rounded-lg mb-5 p-2' placeholder='**********' autoComplete='on' value={newAccount.password}
              onChange={(e) => setNewAccount( {...newAccount, password: e.target.value})}/>

              <button type="submit" className='bg-blue-400 w-full h-10 mt-1 rounded-lg '>Login</button>
              <h1>Already have an account? <a onClick={handleIsLogin} className='text-blue-400 underline cursor-pointer'>Login</a></h1>
          </form>
        </div>
      </div>}
  </>
  );
}

export default SignUpandIn;
