import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({path,navlinks}) => {
  return (
                   
            <Link to={path} className=' relative hover:text-blue-900 transition duration-500 ease-in-out hover:-translate-y-1'>{navlinks}</Link>                
      
  )
}

export default NavLinks




