import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
//________________________ Scroll to the top of the page ________________________
import ScrollToTop from './components/user/scrolltop/ScrollToTop '
//________________________ Authentication pages ________________________
import Signup from './components/authentication/Signup'
import Login from './components/authentication/Login'
//________________________ Navbar Section ________________________
import Home from './components/user/home/Home'
import About from './components/user/about/About'
import Contact from './components/user/contact/Contact'
import NavSearch from './components/user/navbar/navbarIconspage/NavSearch'
import Pics from './components/user/home/Pics'
//________________________ Rooms page ___________________________
import Rooms from './components/user/rooms/Rooms'
import BookNow from './components/user/rooms/booknow/BookNow'
//________________________ Footer Section ___________________________
import Footer from './components/user/footer/Footer'
//________________________ Admin pages ___________________________
import Admin from './components/admin/Admin'
import AdminLogin from './components/admin/fixedAdminLogin/AdminLogin'
import UserManagement from './components/admin/adminTools/userManagements/UserManagement'
import UpdateRoom from './components/admin/adminTools/UpdateRoom'
import RoomBooking from './components/admin/adminTools/RoomBooking'
import ContentManagement from './components/admin/adminTools/contentManagements/ContentManagement'
import ReportPage from './components/admin/adminTools/ReportPage '
// __________________ Super Admin pages ____________________
import SuperAdmin from './components/superadmin/SuperAdmin'


      function App() {
        return (
          <>
            <Router>
            {/*__________________ Scroll to the top of the page ____________________*/}
              <ScrollToTop/>
              <Routes>

            {/*__________________ Authentication pages ____________________*/}
                <Route path='/' element={<Signup/>}></Route>
                <Route path='/login' element={<Login/>}></Route>

            {/*__________________ Navbar Section ____________________*/}
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/searchostels' element={<NavSearch/>}></Route>
                <Route path='/pics' element={<Pics/>}></Route>            

            {/*__________________ Rooms page ____________________*/}
                <Route path='/rooms' element={<Rooms/>}></Route>
                <Route path='/rooms/book-now' element={<BookNow/>}></Route>

            {/*__________________ Footer Section ____________________*/}
                <Route path='/footer' element={<Footer/>}></Route>

            {/*__________________ Admin pages ____________________*/}
                <Route path='/admin' element={<Admin/>}></Route>
                <Route path='/admin/login' element={<AdminLogin/>}></Route>
                <Route path='/admin/users' element={<UserManagement/>}></Route>
                <Route path='/admin/updateroom' element={<UpdateRoom/>}></Route>
                <Route path='/admin/bookings' element={<RoomBooking/>}></Route>
                <Route path='/admin/content' element={<ContentManagement/>}></Route>
                <Route path='/admin/reports' element={<ReportPage/>}></Route>

            {/*__________________ Super Admin pages ____________________*/}          
                <Route path='/superadmin' element={<SuperAdmin/>}></Route>
              </Routes>
            </Router>
          </>
        )
      }
      export default App;
