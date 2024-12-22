import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/authentication/Signup'
import Login from './components/authentication/Login'
import Admin from './components/admin/Admin'
import SuperAdmin from './components/superadmin/SuperAdmin'
import Home from './components/user/home/Home'
import About from './components/user/about/About'
import Contact from './components/user/contact/Contact'
import Rooms from './components/user/rooms/Rooms'
import Footer from './components/user/footer/Footer'
import Pics from './components/user/home/Pics'
import UserManagement from './components/admin/adminTools/UserManagement'
import AdminLogin from './components/admin/fixedAdminLogin/AdminLogin'
import RoomBooking from './components/admin/adminTools/RoomBooking'
import ContentManagement from './components/admin/adminTools/ContentManagement'
import ReportPage from './components/admin/adminTools/ReportPage '
import BookNow from './components/user/rooms/booknow/BookNow'
import ScrollToTop from './components/user/scrolltop/ScrollToTop '

function App() {

  return (
    <>
      <Router>
       {/*__________________ Scroll to the top of the page ____________________*/}
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>

          <Route path='/home' element={<Home/>}></Route>
          <Route path='/pics' element={<Pics/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

          <Route path='/rooms' element={<Rooms/>}></Route>
          <Route path='/rooms/book-now' element={<BookNow/>}></Route>

          <Route path='/footer' element={<Footer/>}></Route>

          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/admin/login' element={<AdminLogin/>}></Route>
          <Route path='/admin/users' element={<UserManagement/>}></Route>
          <Route path='/admin/bookings' element={<RoomBooking/>}></Route>
          <Route path='/admin/content' element={<ContentManagement/>}></Route>
          <Route path='/admin/reports' element={<ReportPage/>}></Route>
          
          <Route path='/superadmin' element={<SuperAdmin/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
