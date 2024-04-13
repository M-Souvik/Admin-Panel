import React from 'react'
import Image from 'next/image'
const UserTable = ({data}) => {
    const handleView =()=>{
        
    }
    const handleDelete =()=>{

    }
  return (
          <tr className='border border-gray-500 w-full'>
            <td className="border-none px-2 py-2">1</td>
            <td className="border-none px-2 py-2">{data.name}</td>
            <td className="border-none px-2 py-2">{data.gender}</td>
            <td className="border-none px-2 py-2">{data.city}</td>
            <td className="border-none px-2 py-2">{data.phone}</td>
            <td className="border-none px-2 py-2">{data.email}</td>
            <td className=" flex border-none px-2 py-2 gap-3">
              <button onClick={handleView} >
                <Image src="/view.png" width={30} height={30} alt=''/>
                </button>
              <button onClick={handleDelete}>
              <Image src="/delete.png" width={30} height={30}/>
              </button>
            </td>
          </tr>
  )
}

export default UserTable
