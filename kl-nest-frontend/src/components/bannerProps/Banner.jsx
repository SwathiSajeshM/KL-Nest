import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({title,logoName, link}) => {
  return (
    <>
      <div className="h-32 w-full bg-blue-50 flex px-20 items-center">
              <h1 className="font-extrabold text-4xl text-blue-950"> {title} |{' '}
                  <Link to={link} className="font-medium text-xl text-[#a9aec3]" > {logoName} </Link>
              </h1>
            </div>
    </>
  )
}

export default Banner
