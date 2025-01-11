import { useState } from 'react';
import Banner from '../../bannerProps/Banner';

const RoomBooking = () => {



{/*______________________________________ Popup - Add - user function ___________________________________*/}
const [isPopupOpen, setIsPopupOpen]=useState(false)


const togglePopup = () => {
  setIsPopupOpen(!isPopupOpen);
};


  return (
    <main>
     
      <div>
       <Banner title='Room Bookings' logoName='Admin' pipesimbol='|' link='/admin'/>

        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Manage Room Bookings</h2>
          <button onClick={togglePopup} className="mb-6 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">Add Booking</button>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-blue-50 border rounded-lg">
              
              {/*___________________ headings of table ________________*/}
              <thead>
                <tr className="text-left border-b">
                  <th className="px-6 py-4 font-bold text-blue-950">ID</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Guest Name</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Hostel Name</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Status</th>
                </tr>
              </thead>

              {/*___________________ Body of datas in table ________________*/}            
              <tbody>               
                <tr className="border-b">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">swathi</td>
                  <td className="px-6 py-4">heavens</td>
                  <td className="px-6 py-4">confirm/pending</td>
                </tr>              
              </tbody>     
            </table>
          </div>
        </section>
      </div>
      
    {/*______________________________________ Popup - Add - user ___________________________________*/}
      {isPopupOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
                <h2 className="text-2xl font-bold text-blue-950 mb-6  text-center">Add New Booking</h2>
                <form className="space-y-4">
                  {/*___________________________________ Name field __________________________________*/}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                    <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter user name" />
                  </div>
                  {/*___________________________________ Email field __________________________________*/}
                  <div>
                    <label htmlFor="hostelname" className="block text-sm font-medium text-gray-700"> Hostel Name </label>
                    <input type="text" id="hostelname" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter user email" />
                  </div>
                  {/*___________________________________ Password field __________________________________*/}
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700"> Status </label>
                    <input type="text" id="status" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter password" />
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

export default RoomBooking;
