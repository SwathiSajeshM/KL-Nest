import React from 'react';
import Banner from '../bannerProps/Banner';

const superAdminTools = [
  {
    title: 'Admin Management',
    description: 'Manage all admin accounts and permissions.',
    buttonLabel: 'Manage Admins',
    link: '/superadmin/admins',},
  {
    title: 'System Analytics',
    description: 'View system-wide analytics and detailed reports.',
    buttonLabel: 'View Analytics',
    link: '/superadmin/analytics',},
  {
    title: 'User Management',
    description: 'Oversee and manage all users in the system.',
    buttonLabel: 'Manage Users',
    link: '/superadmin/users',},
  {
    title: 'Settings',
    description: 'Modify global system settings and configurations.',
    buttonLabel: 'Edit Settings',
    link: '/superadmin/settings',}];
    
const SuperAdminPage = () => {
  return (
    <main>  
      <div >
        {/*________________ Header Section ___________________*/}
       <Banner title='Super-Admin Dashboard '  />
        {/*________________ Tools Section _____________________*/}
        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Super Admin Tools</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">Access system-wide controls and manage all aspects of KL~Nest.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{superAdminTools.map((sa) => (
              <div className="p-6 bg-blue-50 rounded-lg shadow-lg flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-blue-950">{sa.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{sa.description}</p>
                <a href={sa.link} className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">{sa.buttonLabel}</a>
              </div>))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SuperAdminPage;
