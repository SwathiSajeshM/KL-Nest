import React from 'react';
import { Link } from 'react-router-dom';
import ToolTitle from './adminTools/ToolTitle';
import Banner from '../bannerProps/Banner';


const Admin = () => {
  return (
    <main>
   
      <div>
        {/*__________________ Header Section ___________________*/}
          <Banner title='Admin Dashboard' />

        {/*__________________ Admin Content Section _____________*/}
        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Welcome, Admin </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">Manage your website efficiently with the tools provided below. Use the navigation to access specific functionalities. </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/*______________ User Management _____________________*/}
            <ToolTitle title='User Management' para='View, add, edit, or delete user accounts.' viewButton='Manage Users' link='/admin/users'/>
            {/*________________ Room Bookings __________________________*/}
            <ToolTitle title='Room Bookings' para='Track and manage all room bookings.' viewButton='View Bookings' link='/admin/bookings' /> 
            {/*_________________ Content Management ___________________*/}
            <ToolTitle title='Content Management' para='Update About, Contact, and other pages.' viewButton=' Manage Content' link='/admin/content'  /> 
            {/*_________________ Reports ____________________________*/}
            <ToolTitle title='Reports' para='View analytics and generate reports.' viewButton=' View Reports' link='/admin/reports'  />            
          </div>
        </section>
      </div>
    </main>
  );
};

export default Admin;
