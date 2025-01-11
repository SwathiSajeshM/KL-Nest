import React, { useEffect, useState } from 'react';
import Banner from '../../../bannerProps/Banner';
import Search from '../../../searchProps/Search';


const UserManagement = () => {
{/*______________________________________ Manage user function ___________________________________*/}
const [displayuserlist, setDisplayuserlist] = useState([]);

  useEffect(() => {
    async function displayuserlistbak()  {
        const resultlist =await fetch('http://127.0.0.1:8000/api/userlist')
        const jsonuserResult = await resultlist.json(); 
        setDisplayuserlist(jsonuserResult); }
    displayuserlistbak();  }, [])

{/*______________________________________ Popup - Add - user function ___________________________________*/}
const [isPopupOpen, setIsPopupOpen] = useState(false)
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  async function formHandleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
   
    
        const response = await fetch('http://127.0.0.1:8000/api/adduser', {
          method: 'POST',
          body: formData, });
          
          if (response.ok) {
            alert('Success');  
          } else {
            alert('Fail');
          }
 
    
  }
  
  return (
    <main>
      <div>
        {/*_______________ Header Section _______________________*/}
       <Banner title='User Management'logoName='Admin' pipesimbol='|' link='/admin' />

        {/*_______________ User Management Section and Add user button */}
        <section className="py-12 px-20 bg-white">
          <div className='flex justify-between items-center' >
            <h2 className="text-3xl font-bold text-blue-950 mb-6"> Manage Users </h2>
            <Search placeholders='Find the User'/>
          </div>
            <div className='flex justify-between items-center'>
              <p className="text-gray-600 text-lg leading-relaxed mb-10"> View and manage user accounts for KL~Nest. You can edit user details or remove accounts as needed. </p>
              <button onClick={togglePopup} className="px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition">Add User </button>     
            </div>

          {/*_______________ User Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-blue-50 rounded-lg">
              <thead className="bg-blue-950 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">ID</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
                {displayuserlist.map((user)=>(
                <tbody>            
                    <tr key={user.id}  className="border-b hover:bg-blue-100">
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>   
                    <td className="px-6 py-4 flex justify-center gap-4">
                      <button className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-950 transition">Edit</button>
                      <button className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-950 transition">Delete</button>
                    </td>
                  </tr> 
                </tbody> ))}
            </table>
          </div>
        </section>
      </div>

       {/*______________________________________ Popup - Add - user ___________________________________*/}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
                <h2 className="text-2xl font-bold text-blue-950 mb-6  text-center">Add New User</h2>
                <form onSubmit={formHandleSubmit} className="space-y-4">
                  {/*___________________________________ Name field __________________________________*/}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter user name" />
                  </div>
                  {/*___________________________________ Email field __________________________________*/}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter user email" />
                  </div>
                  {/*___________________________________ Password field __________________________________*/}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter password" />
                  </div>
                  {/*___________________________________ Submit and Cancel- button field __________________________________*/}
                  <div className="text-center">
                    <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded-md shadow hover:bg-blue-800 transition duration-300"> Submit </button>
                    <button type="button" onClick={togglePopup} className="ml-4 bg-gray-500 text-white py-2 px-6 rounded-md shadow hover:bg-gray-600 transition duration-300"> Cancel </button>
                  </div>
                </form>
              </div>
            </div>)}
    </main>
  );
};

export default UserManagement;
