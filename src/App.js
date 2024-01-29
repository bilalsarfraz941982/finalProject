import React from 'react';
import logo from './Assets/littlelemonlogo.png';
import logo1 from './Assets/littlelemonfooterlogo.jpg';
import facebook from './Assets/fb.png';
import instagram from './Assets/insta.png';
import snapchatt from './Assets/snap.png';
import twitter from './Assets/twitter.png';
import './App.css';
import {Route , Routes , Link} from 'react-router-dom';
import Homepage from './HomePage';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Orderonline from './Orderonline';
import Login from './Login'

function App() {
  return (
    <>
      <div className='navbar'>
        <img src={logo} alt='main logo picture' height={"50px"} width={"190px"}/>
         <div className='navbarele'>
          <Link style={{color:"rgb(73,94,87)"}} to="/" className='homepage'>Home</Link>
          <Link style={{color:"rgb(73,94,87)"}} to="/about" className='about'>About</Link>
          <Link style={{color:"rgb(73,94,87)"}} to="/menu" className='menu'>Menu</Link>
          <Link style={{color:"rgb(73,94,87)"}} to="/reservation" className='reservation'>Reservation</Link>
          <Link style={{color:"rgb(73,94,87)"}} to="/orderonline" className='orderonline'>Order Online</Link>
          <Link style={{color:"rgb(73,94,87)"}} to="/login" className='login'>Login</Link>
         </div>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/reservation' element={<Reservation/>}></Route>
        <Route path='/orderonline' element={<Orderonline/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <div className='footer'>
        <div className='box1'>
         <div className='imageh5'>
           <img src={logo1} height={"150px"} width={"90px"}/>
           <h5>Follow us on</h5>
         </div>
         <div className='socialmedia'>
           <img src={facebook} height={30} width={30} alt=''/>
           <img src={instagram} height={30} width={30} alt=''/>
           <img src={snapchatt} height={30} width={30} alt=''/>
           <img src={twitter} height={30} width={30} alt=''/>
         </div>
        </div>
        <div className='quicklinks'>
          <h3>Quick Links</h3><br></br>
          <Link style={{color:"rgb(73,94,87)"}} to="/" className='homepage'>Home Page</Link><br></br>
          <Link style={{color:"rgb(73,94,87)"}} to="/about" className='about'>About</Link><br></br>
          <Link style={{color:"rgb(73,94,87)"}} to="/menu" className='menu'>Menu</Link><br></br>
          <Link style={{color:"rgb(73,94,87)"}} to="/reservation" className='reservation'>Reservation</Link><br></br>
          <Link style={{color:"rgb(73,94,87)"}} to="/orderonline" className='orderonline'>Order Online</Link><br></br>
          <Link style={{color:"rgb(73,94,87)"}} to="/login" className='login'>Login</Link><br></br>
        </div>
        <div className='contact'>
        <h3>Contact</h3>
          <h5>123 Stockport Road <br></br>Greater Manchester</h5>
          <h5>Tel : +441619500163</h5>
          <h5>email : info@littlelemon.com</h5>
        </div>
      </div>
      <div><br></br></div>
    </>
  )
}

export default App