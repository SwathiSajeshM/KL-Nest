import React, { useState } from 'react';

const UpdateRoom = () => {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');

async function formHandleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);
  formData.append('price', price);
  formData.append('image', image);
    const response = await fetch('http://127.0.0.1:8000/api/updaterooms', {
        method: 'POST',
        body: formData, });
        if (response.ok) {
          alert('Success');  
        } else {
          alert('Fail');
        }
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-8" >
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center"> Add a New Room </h1>
        <form className="space-y-4" onSubmit={formHandleSubmit}>
          {/*_____________________ Name input _______________________*/}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Room Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}value={name} id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"placeholder="Enter room name" />
          </div>

          {/*______________________ Price input */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price} id="price" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter room price" />
          </div>

          {/*_______________________ Description input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700"> Description </label>
            <textarea id="description" value={description} onChange={(e)=>setDescription(e.target.value)} rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter room description" > </textarea>
          </div>

          {/*________________________ Image input */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700"> Upload Image </label>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="image" className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm" />
          </div>

          {/*_________________________ Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-blue-700 text-white py-2 px-6 rounded-md shadow hover:bg-blue-800 transition duration-300"> Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoom;
