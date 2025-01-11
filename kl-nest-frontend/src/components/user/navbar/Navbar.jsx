import React from 'react'
import { Link, } from 'react-router-dom'
import navlogo from '../../../assets/kl-logo.png'
import { MdOutlineDomainAdd, MdOutlineTravelExplore } from 'react-icons/md'
import { BiMaleFemale } from 'react-icons/bi'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
   <div className='flex justify-center items-center pt-3 '>  
      <nav className='bg-white w-11/12 flex justify-around items-center gap-10  px-2  rounded-3xl z-50 shadow  fixed top-5 ' >         
                
        {/*___________________ Navbar Left side  ____________________*/}
            <Link to='/home'> <img src={navlogo} alt="" className='h-24 rounded-full ' /> </Link>  

        {/*___________________ Navbar Center  ____________________*/}
            <div className='flex gap-16  text-black'>
              <NavLinks path='/home' navlinks='Home'/>
              <NavLinks path='/about' navlinks='About'/>
              <NavLinks path='/contact' navlinks='Contact'/>
              <NavLinks path='/rooms' navlinks='Rooms'/>
            </div>          

        {/*___________________ Navbar Right side  ____________________*/}
            <div  className='text-xl flex gap-10 '>
              <div className='cursor-pointer'><BiMaleFemale/> </div>
              <Link to="/searchostels"><div ><MdOutlineTravelExplore/></div></Link>
              <div className='cursor-pointer'> <MdOutlineDomainAdd/></div>
            </div>
            
      </nav>    
   </div>

  )
}

export default Navbar
