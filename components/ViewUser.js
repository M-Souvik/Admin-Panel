'use client'
import React from 'react'

const ViewUser = () => {
  return (
    <div className="popup-container fade-in fade-out">
    <div className="popup">
        <div className="flex flex-row-reverse">
        <button onClick={() => setshowAdd(false)}>
            <Image src="/close.png" height={20} width={20} className='m-2'/>
        </button>
        </div>
        <h1 className="text-xl text-center font-semibold ">Add User</h1>
      <div className="form-container mb-4 grid grid-cols-2 gap-5 px-16 py-8">
      
        <label htmlFor="name" className="block text-black mb-2 font-semibold">Name</label>
        <input type="text" name="name" className="w-full px-4 border focus:outline-none focus:border-blue-500 font-bold mb-1" required 
        onChange={(e)=>setName(e.target.value)}
        value={name}
        placeholder='Name'
        />
       
        <div>
        <label htmlFor="name" className="block text-black mb-2 font-semibold">Phone no.</label>
        <input type="text" name="phone" className="w-full px-4 border focus:outline-none focus:border-blue-500 font-bold mb-1" required 
        onChange={(e)=>setPhone(e.target.value)}
        value={phone}
        placeholder='Phone'/>
        </div>
        <div>
        <label htmlFor="name" className="block text-black mb-2 font-semibold">Gender</label>
        <input type="text" name="gender" className="w-full px-4 border focus:outline-none focus:border-blue-500 font-bold mb-1" required 
        onChange={(e)=>setGender(e.target.value)}
        value={gender}
        placeholder='Gender'
        />
        </div>
        <div>
        <label htmlFor="name" className="block text-black mb-2 font-semibold">City</label>
        <input type="text" name="city" className="w-full px-4 border focus:outline-none focus:border-blue-500 font-bold mb-1" required 
        onChange={(e)=>setCity(e.target.value)}
        value={city}
        placeholder='City'
        />
        </div>
        <div>
        <label htmlFor="name" className="block text-black mb-2 font-semibold">Email</label>
        <input type="email" name="email" className="w-full px-4 py-1 border focus:outline-none focus:border-blue-500 font-bold mb-1" required 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        placeholder='Email'
        />
        </div>
        <div className='flex flex-row-reverse'>
        <button type="submit" className='bg-blue-700 h-14  px-14 text-white mt-3'>Add user</button>
        </div>
      </div>
    </div>
      
     

  </div>
  )
}

export default ViewUser
