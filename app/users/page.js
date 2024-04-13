"use client"
import { useState, useEffect } from 'react';
import AddUser from '@/components/AddUser';
import Image from 'next/image'
import ViewUser from '@/components/ViewUser';
const UserTableList = ({ data }) => {
  return (
    <div>
      {data.map((data) => (
       <tr className='border border-gray-500 w-full' key={data._id}>
       <td className="border-none px-2 py-2">1</td>
       <td className="border-none px-2 py-2">{data.name}</td>
       <td className="border-none px-2 py-2">{data.gender}</td>
       <td className="border-none px-2 py-2">{data.city}</td>
       <td className="border-none px-2 py-2">{data.phone}</td>
       <td className="border-none px-2 py-2">{data.email}</td>
       <td className=" flex border-none px-2 py-2 gap-3">
         <button onClick={handleView} >
           <Image src="/view.png" width={30} height={30}/>
           </button>
         <button onClick={handleDelete}>
         <Image src="/delete.png" width={30} height={30}/>
         </button>
       </td>
     </tr>
      ))}
    </div>
  );
};

const handleView =()=>{
        
}
const handleDelete =()=>{

}


const AdminPanel = () => {
  const [showAdd, setshowAdd] = useState(false);
  const [tabledata, setTabledata] = useState([]);

  const handleAdd = () => {
    setshowAdd(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/userdata", {
          cache: "no-store",
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const data = await res.json();
        setTabledata(data.data);
      } catch (error) {
        console.log("Error loading data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex">
        <div className="bg-gray-500 h-[50rem] w-1/4 p-4">
          <h1 className="text-xl text-left font-bold mt-11">USER</h1>
          <hr />
        </div>
        
        <div className="container mx-auto">
          <div className="bg-gray-300 w-full h-20 border-b-2 border-black"> </div>
          <div className="px-3">
            <nav className="flex flex-row w-full justify-between box-border border-2 border-black bg-slate-400  items-center p-4 mb-3 mt-3">
              <ul className="flex flex-row gap-6">
                <li className="text-lg font-semibold pr-10">SI No</li>
                <li className="text-lg font-semibold pr-10 ">Name</li>
                <li className="text-lg font-semibold pr-10">City</li>
                <li className="text-lg font-semibold pr-10">Phone Number</li>
              </ul>
              <button type="button" className="bg-blue-700  px-10 py-2 text-white" onClick={handleAdd}>+Add</button>
              {showAdd && <AddUser setshowAdd={setshowAdd} />}
            </nav>
            <table className='w-full table-auto border-collapse'>
              <tbody>
              <UserTableList data={tabledata} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;