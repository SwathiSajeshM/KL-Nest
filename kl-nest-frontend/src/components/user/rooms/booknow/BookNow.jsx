import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Banner from '../../../bannerProps/Banner';
import roomImage1 from '../../../../assets/hostel-1.webp'; 


const BookNow = () => {

  return (
    <main>
      <Navbar />
      <div className="pt-36">
        <Banner title='Book Now' logoName='Rooms' pipesimbol='|' link='/rooms'/>
       
        <section className="py-12 px-20 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/*____________ Room Details _____________________*/}
            <div className="bg-blue-50  rounded-lg shadow-lg flex flex-col items-center">
              <img src={roomImage1} className="w-full h-64 object-cover mb-6 rounded-lg" />
              <h2 className="text-3xl font-bold text-blue-950 mb-4">Zephyr Hostel</h2>
              <p className="text-gray-600 text-lg mb-6">Experience comfort and convenience in this wonderful room, perfectly tailored to make your stay memorable.</p>
              <p className="text-2xl font-semibold text-blue-950">₹4500/month</p>
            </div>

            {/* Booking Form */}
            <form  className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-blue-950 mb-4">Complete Your Booking</h3>

              <div className="flex flex-col">
                <label htmlFor="name" className="font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name"  required className="mt-2 p-2 border rounded-md" placeholder="Enter your full name" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email"  required className="mt-2 p-2 border rounded-md" placeholder="Enter your email" />
              </div>

           

              <div className="flex flex-col">
                <label htmlFor="guests" className="font-medium text-gray-700">Hostel Name</label>
                <input type="number" id="guests" name="guests"  required min={1} className="mt-2 p-2 border rounded-md" placeholder="Enter number of guests" />
              </div>

              <button type="submit" className="mt-4 px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition">Confirm Booking</button>
            </form>

          </div>

        </section>

      </div>

      <Footer />
      
    </main>
  );
};

export default BookNow;
