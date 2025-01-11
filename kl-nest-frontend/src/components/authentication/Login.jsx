import React, { useState } from 'react'
import signinimg from '../../assets/signin.png'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [role, setRole] =useState('');
  const [errors, setErrors] =useState({});

  const navigate=useNavigate();

  //------------------- submitloginfun -----------------------
    const submitloginfun = async(e)=> 
    {
      e.preventDefault();
      switch(role)
      {
        case 'user' : await userlogin();
        break;
        case 'admin' : await adminlogin();
        break;
        case 'superadmin' : await superadminlogin();
        break;
        default:setErrors({...errors,role:['Please select a role']})

      }
    }

  //------------------- handleerrors -----------------------
    const handleErrors = (response) => {
          response.json().then((data) => {
            if (response.status === 400) {
              setErrors(data.errors);
            }
            else if(response.status === 401) {
              setErrors({backend:[data.error]});
            }
            else if (response.status === 200) {
              if (role === 'user') {
                localStorage.setItem("user-info", JSON.stringify(data));
                navigate("/home");
              }
              else if (role === 'admin') {
                localStorage.setItem("admin-info", JSON.stringify(data));
                navigate("/adminhome");
              }
              else if (role === 'superadmin') {
                localStorage.setItem("superadmin-info", JSON.stringify(data));
                navigate("/superadminhome");
              }
            }
          });
        }

//------------------- User Login Function -----------------------
    async function userlogin(e)
        {       
            let item = { email, password, role };
            console.warn(item);
              let result = await fetch('http://127.0.0.1:8000/api/userlogin',
                  {
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers: 
                    {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'                              
                    }                                    
                  });  
          handleErrors(result)
        }

  //------------------- Admin-Login Function -----------------------   
    async function adminlogin(e)
    {    
      let item = { email, password };
      console.warn(item);
      let result = await fetch('http://127.0.0.1:8000/api/adminlogin',
        {
          method: 'POST',
          body: JSON.stringify(item),
          headers: 
          {
            'Content-Type': 'application/json',
            'Accept': 'application/json'                              
          }
        });
      handleErrors(result)
    }

  //------------------- Admin-Login Function -----------------------   
    async function superadminlogin(e)
    {
      let item = { email, password };
      console.warn(item);
      let result = await fetch('http://127.0.0.1:8000/api/superadminlogin',
        {
          method: 'POST',
          body: JSON.stringify(item),
          headers: 
          {
            'Content-Type': 'application/json',
            'Accept': 'application/json'                              
          }
                                        
        });
      handleErrors(result)
    }
  return (

    <div>
      <div className="flex h-screen ">
        <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-[#a4bfe1] to-white">
           <h1 className="text-4xl font-bold text-black mb-8">Login</h1>

           {/* ------------------- Form starts here -----------------------    */}
                <form onSubmit={submitloginfun} className="w-full max-w-md">
           {/*______________________ Email __________________________*/}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2"> Email</label>
                        <input type="email"  autoComplete='off' onChange={(e) => setEmail(e.target.value)}  id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500" placeholder="swshbhh@example.com"   />
                        {errors.email && <small className='text-red-700'>{errors.email[0]}</small>}
                        {errors.backend && <small>{errors.backend[0]}</small>}
                     </div> 
           {/*______________________ Password __________________________*/}
                      <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-black mb-2"> Password </label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500" placeholder="••••••••" />
                        {errors.password && <small className='text-red-700'>{errors.password[0]}</small>}
                      </div>
           {/*______________________ Role __________________________*/}
                      <div className="mb-6"> 
                        <label htmlFor="role" className="block text-sm font-medium text-black mb-2"> Role </label>
                        <select id="role" onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500 bg-white" >
                          <option value="">Select a role</option>
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                          <option value="manager">Manager</option>
                        </select>
                        {errors.role && <small className='text-red-700'>{errors.role[0]}</small>}
                      </div>
           {/*______________________ Button __________________________*/}
                      <button type="submit" className="w-full bg-[#235784] text-white py-3 px-4 rounded-md hover:bg-light-blue-600 transition duration-300 font-semibold mb-4" > Login </button>
                      <p className="text-center text-sm text-gray-600"> Don't have an account?{''} <span className='hover:underline'><Link to='/'>Sign Up</Link></span> </p>
                </form>
          </div>

           {/*______________________ image __________________________*/}
          <div className="w-1/2 bg-light-blue-100 flex justify-center items-center">
            <img src={signinimg} alt="Signup Illustration" width={600} height={600} className="max-w-full h-auto"/>
          </div> 

      </div>

    </div>
  )
}

export default Login;
