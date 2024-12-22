import React from 'react';
import Banner from '../../bannerProps/Banner';
import Search from '../../searchProps/Search';

// Sample user data for demonstration purposes
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  { id: 3, name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'User' },
  { id: 4, name: 'Emily Johnson', email: 'emily@example.com', role: 'User' },
];

const UserManagement = () => {
  return (
    <main>
  
      <div >
        {/*______________ Header Section _______________________*/}
       <Banner title='User Management'logoName='Admin' link='/admin' />

        {/* User Management Section */}
        <section className="py-12 px-20 bg-white">
          <div className='flex justify-between items-center' >
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Manage Users</h2>
          <Search placeholders='Find the User'/>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            View and manage user accounts for KL~Nest. You can edit user details or remove accounts as needed.
          </p>

          {/* User Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-blue-50 rounded-lg">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">ID</th>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Role</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-blue-100">
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4 flex justify-center gap-4">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition">Edit</button>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition">Delete</button>
                    </td>
                  </tr> ))}
              </tbody>
            </table>
          </div>

        </section>
      </div>
    </main>
  );
};

export default UserManagement;
