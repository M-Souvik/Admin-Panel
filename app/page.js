'use client'
import React from "react"
import Image from "next/image"
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import EmailForm from "../components/EmailForm";

export default function Home() {
  const router=useRouter()
  const [showPhoneForm, setShowPhoneForm] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showOtp, setshowOtp] = useState(false);
  const [BtnText,setBtnText]=useState('Next');
  
  const [phone, setPhone] = useState('');
  
  
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
          {showEmailForm && <EmailForm/>}
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
          {/* <div className="down-transition">
            <button type="button" id="NextBtn" className='ml-72 bg-orange-500 text-white px-4 py-2 hover:bg-orange-600 text-center transition duration-500 ease-in-out' onClick={handleNextBtn}>Login</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
