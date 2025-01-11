import React from 'react'
import Search from '../../../searchProps/Search'

const NavSearch = () => {
  return (
    <div className='bg-blue-50 h-24 '>   
      <div className='flex justify-center items-center pt-5'>    
        <div >
          <Search placeholders='Find your hostel . . .'/> 
        </div>
      </div>
    </div>
  )
}

export default NavSearch
