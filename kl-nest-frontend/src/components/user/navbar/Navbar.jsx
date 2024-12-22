import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../../../assets/kl-logo.png'
import { MdOutlineDomainAdd, MdOutlineTravelExplore } from 'react-icons/md'
import { BiMaleFemale } from 'react-icons/bi'

const Navbar = () => {
  return (
   <div className='flex justify-center items-center pt-3 '> 
    
          <nav className='bg-white w-11/12 flex justify-around items-center gap-10  px-2  rounded-3xl z-50 shadow  fixed top-5 ' >         
                
        {/*___________________ Navbar Left side  ____________________*/}

            <Link to='/home'> <img src={navlogo} alt="" className='h-24 rounded-full ' /> </Link>  

        {/*___________________ Navbar Center  ____________________*/}


            <div className='flex gap-16  text-black'>
              <Link to="/home" className='relative hover:text-blue-900 transition duration-500 ease-in-out hover:-translate-y-1'>Home</Link>
              <Link to="/about" className='relative hover:text-blue-900 transition duration-500 ease-in-out hover:-translate-y-1'>About </Link>
              <Link to="/contact" className='relative hover:text-blue-900 transition duration-500 ease-in-out hover:-translate-y-1'>Contact</Link>
              <Link to="/rooms" className='relative hover:text-blue-900 transition duration-500 ease-in-out hover:-translate-y-1'>Rooms</Link>         
            </div>

        {/*___________________ Navbar Right side  ____________________*/}

            <div  className='text-xl flex gap-10 '>
              <div><BiMaleFemale/> </div>
              <div><MdOutlineTravelExplore/></div>
              <div> <MdOutlineDomainAdd/></div>
            </div>
            
          </nav>    
   </div>

  )
}

export default Navbar
