import React from 'react'
import Navbar from '../navbar/Navbar'
import heroimg from '../../../assets/headerhostl.jpg'
import Footer from '../footer/Footer'
import Pics from './Pics'
import Testimonials from './Testimonial'



const Home = () => {
  return (
      <div className=' h-auto'>
        
        <Navbar />

        {/*__________________ Home Page _________________________*/}

            <main className='pt-56 '>
              <div className='w-full gap-1 flex justify-between items-center px-20' >
                <div className=' w-[50rem]'> <h1 className=' font-bold '> <span className=' text-8xl text-[#154c79]'>KL Nest |</span><br /><span className='text-4xl text-blue-950'>Amazing hostel for the free <br />spirited traveler. </span> </h1> </div> 
                <div className=''> <img className='h-[34rem]  rounded-md' src={heroimg} alt="" />  </div>
              </div>
            </main>

        <Pics/>
        <Testimonials/>
        <Footer/>
        
      </div>
  )
}

export default Home
