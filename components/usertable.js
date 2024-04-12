import React from 'react'
import Image from 'next/image'
const UserTable = (props) => {
    const handleView =()=>{
        
    }
    const handleDelete =()=>{

    }
  return (
    <div>
      <table className="w-full table-auto border-collapse">
        <tbody >  
          <tr className='border border-gray-500'>
            <td className="border-none px-2 py-2">1</td>
            <td className="border-none px-2 py-2">{props.name}</td>
            <td className="border-none px-2 py-2">{props.Gender}</td>
            <td className="border-none px-2 py-2">{props.City}</td>
            <td className="border-none px-2 py-2">{props.Phone}</td>
            <td className=" flex border-none px-2 py-2 gap-3">
              <button onClick={handleView} >
                <Image src="/view.png" width={30} height={30}/>
                </button>
              <button onClick={handleDelete}>
              <Image src="/delete.png" width={30} height={30}/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
