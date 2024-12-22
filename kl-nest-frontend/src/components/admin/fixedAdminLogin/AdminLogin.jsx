import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const adminCredentials = {
    username: 'klnest',
    password: 'nest123',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === adminCredentials.username && password === adminCredentials.password) {
      navigate('/admin'); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter username" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter password"/>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
