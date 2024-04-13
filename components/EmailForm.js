'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const EmailForm = () => {
    const router = useRouter()
    const [emailInfo, setEmailInfo] = useState({email:'',password:''});

    const handleNextBtn =async ()=>{
          try {
            const response = await fetch(`/api/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: emailInfo.email,
                password: emailInfo.password
              })
            });
      
            if (!response.ok) {
              ale('Login failed');
            }
            
            const data = await response.json();
            const token = data.token;
            // Store token in local storage or state for further use, e.g., authentication
            localStorage.setItem('token', token);
            // Redirect or perform any other action upon successful login
            console.log("Login successful:",data);
    
            router.push("/users")
          } catch (error) {
            console.error("Login failed:", error);
            // Handle login failure, e.g., display error message to user
          }
          router.push('/users')
        }
    
      const handleEmailChange=(e)=>{
        const {name, value}=e.target;
        setEmailInfo((prevData)=>({
          ...prevData,
          [name]: value,
        }))
      }

  return (
    <div className="form-container fade-in mb-4">
    <label htmlFor="email" className="block text-white mb-2">Email</label>
    <input 
      type="email" 
      name="email" 
      id="email" 
      value={emailInfo.email}
      onChange={handleEmailChange}  // Update the email state
      className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500 font-bold mb-4" 
      required 
    />
    <label htmlFor="password" className="block text-white mb-2">Password</label>
    <input 
      type="password" 
      name="password" 
      id="password" 
      value={emailInfo.password} 
      onChange={handleEmailChange}  // Update the password state
      className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500 font-bold mb-10" 
      required 
    />
     <button type="button" id="NextBtn" className='ml-72 bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 text-center transition duration-500 ease-in-out' onClick={handleNextBtn}>Login</button>
  </div>
  )
}

export default EmailForm
