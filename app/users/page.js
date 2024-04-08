'use client'

import React, { useState } from 'react'
import Image from 'next/image'
const AdminPanel = () => {
    const [showAdd,setshowAdd]=useState(false)
    const handleAdd =()=>{
        setshowAdd(true);
    }
  return (
    <>
    <div className="flex">
        <div className="bg-gray-500 h-[50rem] w-1/4 p-4">
          <h1 className='text-xl text-left font-bold mt-11'>USER</h1>
          <hr/>
        </div>

    <div class="container mx-auto">
        <div className="bg-gray-300 w-full h-20 border-b-2 border-black"> </div>
      {/* <h1 class="text-4xl font-bold mb-5 text-center">USERS</h1> */}
      <div class="flex justify-center mb-5">
        {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Add
        </button> */}
      </div>
      <div className="px-3">
      <nav className="flex flex-row w-full justify-between box-border border-2 border-black bg-slate-400  items-center p-4 mb-3">
        <ul className="flex flex-row gap-6">
            <li className='text-lg font-semibold pr-10'>SI No</li>
            <li className='text-lg font-semibold pr-10 '>Name</li>
            <li className='text-lg font-semibold pr-10'>City</li>
            <li className='text-lg font-semibold pr-10'>Phone Number</li>
        </ul>
        <button type='button' className="bg-blue-700  px-10 py-2 text-white" onClick={handleAdd}>+Add</button>
        {showAdd && (
            <div className="popup-container fade-in fade-out">
            <div className="popup">
                <div className="flex flex-row-reverse">
                <button onClick={() => setshowAdd(false)}>
                    <Image src="/close.png" height={20} width={20} className='m-2'/>
                </button>
                </div>
                <h1 className="text-xl text-center font-semibold ">Add User</h1>
              <div className="form-container mb-4 grid grid-cols-2 gap-5 px-16 py-8">
              <div>
                <label htmlFor="name" className="block text-black mb-2 font-semibold">Name</label>
                <input type="text" name="name" className="w-full px-4 py-1 border focus:outline-none focus:border-blue-500 font-bold mb-1" required />
                </div>
                <div>
                <label htmlFor="name" className="block text-black mb-2 font-semibold">Phone no.</label>
                <input type="text" name="name" className="w-full px-4 border focus:outline-none focus:border-blue-500 font-bold mb-1" required />
                </div>
                <div>
                <label htmlFor="name" className="block text-black mb-2 font-semibold">Gender</label>
                <input type="text" name="name" className="w-full px-4 py-1 border focus:outline-none focus:border-blue-500 font-bold mb-1" required />
                </div>
                <div>
                <label htmlFor="name" className="block text-black mb-2 font-semibold">City</label>
                <input type="text" name="name" className="w-full px-4 py-1 border focus:outline-none focus:border-blue-500 font-bold mb-1" required />
                </div>
                <div>
                <label htmlFor="name" className="block text-black mb-2 font-semibold">Email</label>
                <input type="email" name="name" className="w-full px-4 py-1 border focus:outline-none focus:border-blue-500 font-bold mb-1" required />
                </div>
                <div className='flex flex-row-reverse'>
                <button type="button" className='bg-blue-700 h-14  px-14 text-white mt-3'>Add user</button>
                </div>
              </div>
              
             
            </div>
          </div>
          )}
      </nav>
      <table class="w-full table-auto border-collapse">
        {/* <thead className='mb-8'>
          <tr>
            <th class="border border-gray-300 px-4 py-2">SI NO</th>
            <th class="border border-gray-300 px-4 py-2">Name</th>
            <th class="border border-gray-300 px-4 py-2">City</th>
            <th class="border border-gray-300 px-4 py-2">Phone Number</th>
            <th class="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead> */}
        <tbody >
          <tr>
            <td class="border border-gray-300 px-4 py-2">1</td>
            <td class="border border-gray-300 px-4 py-2">John Doe</td>
            <td class="border border-gray-300 px-4 py-2">New York</td>
            <td class="border border-gray-300 px-4 py-2">123-456-7890</td>
            <td class="border border-gray-300 px-4 py-2">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                Edit
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">Jane Doe</td>
            <td class="border border-gray-300 px-4 py-2">Los Angeles</td>
            <td class="border border-gray-300 px-4 py-2">987-654-3210</td>
            <td class="border border-gray-300 px-4 py-2">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                Edit</button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  )
}

export default AdminPanel
