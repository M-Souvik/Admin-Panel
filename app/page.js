'use client'
import React from "react"
import Image from "next/image"
import {useState} from 'react';
import {useRouter} from 'next/navigation';
export default function Home() {
  const router=useRouter()
  const [showPhoneForm, setShowPhoneForm] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showOtp, setshowOtp] = useState(false);
  const [BtnText,setBtnText]=useState('Next');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleNextBtn =async ()=>{
    if (showPhoneForm) {
      setshowOtp(true);
      setBtnText('Login');
    } else {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
        
        const data = await response.json();
        const token = data.token;
        // Store token in local storage or state for further use, e.g., authentication
        localStorage.setItem('token', token);
        // Redirect or perform any other action upon successful login
        console.log("Login successful");
        router.push("/users")
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login failure, e.g., display error message to user
      }
    }

  }

  const handlePhoneClick = () => {
    setShowPhoneForm(true);
    setShowEmailForm(false);
    setshowOtp(false)
  };
  
  const handleEmailClick = () => {
    setShowPhoneForm(false);
    setShowEmailForm(true);
    setshowOtp(false);
    setBtnText('Login');
  };
  
  

  
  return (
    <>
    <div className="absolute inset-0 bg-cover bg-center z-0 -mt-48 flex flex-row-reverse" style={{backgroundImage: "url('/Banner.png')"}}>
        <div className="bg-gray-950 p-12 rounded-lg shadow-md max-w-md w-[36rem] h-[30rem] mt-80 z-10 mr-32">

          <div className="flex flex-col">
            <Image src="/logo.png" width={1000} height={1000} className="w-56 ml-14 mb-3"/>
          <div className="flex flex-row gap-8 justify-center mb-7">
          <button type="button" className=" text-white px-4 py-2 border-gray-600 border-2 focus:bg-white focus:text-black transition duration-500 ease-in-out bg-transparent hover:bg-white hover:text-black" onClick={handlePhoneClick}>Phone No</button>
          <button type="button" className=" text-white px-8 py-2 border-gray-600 border-2 focus:bg-white focus:text-black transition duration-500 ease-in-out bg-transparent hover:bg-white hover:text-black" onClick={handleEmailClick}>Email</button>
          </div>
          {showPhoneForm && (
            <>
            <div className="form-container fade-in mb-4">
              
              <label htmlFor="name" className="block text-white mb-2">Phone Number</label>
              <input type="text" name="Phone No." id="phone" value={phone}  onChange={(e) => setPhone(e.target.value)}  className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500 font-bold mb-1" required/>
            </div>
            
            </>
          )}
          {showEmailForm && (
    <div className="form-container fade-in mb-4">
      <label htmlFor="email" className="block text-white mb-2">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}  // Update the email state
        className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500 font-bold mb-4" 
        required 
      />
      <label htmlFor="password" className="block text-white mb-2">Password</label>
      <input 
        type="password" 
        name="password" 
        id="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}  // Update the password state
        className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500 font-bold mb-10" 
        required 
      />
      
    </div>
)}
          {showOtp && (
            <div className="form-container fade-in mb-4">
              <label htmlFor="name" className="block text-white mb-2">OTP</label>
              <input type="email" name="Email Id" className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500 font-bold" required/>
              <div className="down-transition">
              <button type="button" id="NextBtn" className="ml-72 bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 text-center" onClick={handleNextBtn}>{BtnText}</button>
            </div>
            </div>
          )}


          </div>
          <div className="down-transition">
            <button type="button" id="NextBtn" className='ml-72 bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 text-center transition duration-500 ease-in-out' onClick={handleNextBtn}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
