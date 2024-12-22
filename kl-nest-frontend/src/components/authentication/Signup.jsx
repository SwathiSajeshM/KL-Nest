import React, { useState } from 'react'
import signinimg from '../../assets/signin.png'
import { useNavigate } from 'react-router-dom';

const Signup = () =>
{ 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({}); 
  const navigate=useNavigate();

//______________________ submit-sign-fun_______________________
  const submitsignfun = async(e)=>
    {
      e.preventDefault();
      switch (role)
        {
          case 'user' : await userfun();
          break;
          case 'admin' : await adminfun();
          break;
          case 'superadmin' : await superadminfun();
          break;
          default:setErrors({...errors,role:['Please select a role']})
        }
    } 

    //______________________ handleErrors sign-fun_______________________
    const handleErrors = (response) => 
      {
        response.json().then((data) => {
          if (response.status === 400) 
           { setErrors(data); }
          else if (response.status === 201) 
            {
                if (role === 'user') 
                  {
                    localStorage.setItem("user-info", JSON.stringify(data));
                    navigate("/home");
                  }
                else if (role === 'admin') 
                  {
                    localStorage.setItem("admin-info", JSON.stringify(data));
                    navigate("/admin");
                  }
                else if (role === 'superadmin') 
                  {
                    localStorage.setItem("superadmin-info", JSON.stringify(data));
                    navigate("/superadmin");
                  }
            }
        });
      }

    //______________________ User -functions _______________________
    async function userfun(e) 
    {
        let item = { name, email, password, role };
        console.warn(item);
        let result = await fetch("http://127.0.0.1:8000/api/user",
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers: 
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        handleErrors(result);
    };

    //______________________ Admin-fun_______________________
    async function adminfun(e)
    {
        let item = { name, email, password, role };
        console.warn(item);
        let result = await fetch("http://127.0.0.1:8000/api/admin",
        {
            method: 'POST',
            body: JSON.stringify(item),
            headers: 
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        handleErrors(result);
   
    };

    //______________________ Admin-fun_______________________
    async function superadminfun(e) 
    {
        let item = { name, email, password, role };
        console.warn(item);
        let result = await fetch("http://127.0.0.1:8000/api/superadmin",
        {
          method: 'POST',
          body: JSON.stringify(item),
          headers: 
            {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
        });
        handleErrors(result);
    };

  return (
 
    <div>

      <div className="flex h-screen ">
     
          <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-[#a4bfe1] to-white">
                          <h1 className="text-4xl font-bold text-black mb-8">Sign Up</h1>
                <form onSubmit={submitsignfun} className="w-full max-w-md">

                {/*___________________________ Name __________________________*/}
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-2"> Full Name </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500" autoComplete='off' placeholder="John Doe"  />
                        {errors.name && <small className='text-red-500'>{errors.name[0]}</small>}
                      </div>

                {/*___________________________ Email __________________________*/}
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2"> Email Address </label>
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500" autoComplete='off' placeholder="john@example.com" />
                        {errors.email && <small className='text-red-500'>{errors.email[0]}</small>}
                      </div>

                {/*___________________________ Password __________________________*/}
                      <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-black mb-2"> Password </label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500" autoComplete='off' placeholder="••••••••"  />
                        {errors.password && <small className='text-red-500'>{errors.password[0]}</small>}
                      </div>

                {/*___________________________ Role __________________________*/}
                      <div className="mb-6"> 
                        <label htmlFor="role" className="block text-sm font-medium text-black mb-2"> Role </label>
                        <select value={role} onChange={(e) => setRole(e.target.value)} id="role" className="w-full px-4 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue-500 bg-white"  >
                          <option value="">Select a role</option>
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                          <option value="superadmin">Manager</option>
                        </select>
                        {errors.role && <small className='text-red-500'>{errors.role[0]}</small>}
                      </div>

                {/*___________________________ Button __________________________*/}
                      <button type="submit" className="w-full bg-[#235784] text-white py-3 px-4 rounded-md hover:bg-light-blue-600 transition duration-300 font-semibold mb-4" > Register </button>
                      <p className="text-center text-sm text-gray-600"> Already have an account?{' '}
                        <a href="/login" className="text-light-blue-500 hover:underline"> Log in </a>
                      </p>
                </form>
          </div>

                {/*___________________________ image __________________________*/}
          <div className="w-1/2 bg-light-blue-100 flex justify-center items-center">
            <img src={signinimg} alt="Signup Illustration" width={600} height={600} className="max-w-full h-auto"/>
          </div> 

      </div>

    </div>
  )
}

export default Signup