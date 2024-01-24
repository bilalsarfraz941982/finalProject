import React from 'react';
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
        <Link to="/" className='homepage'>HomePage</Link>
        <Link to="/about" className='about'>About</Link>
        <Link to="/menu" className='menu'>Menu</Link>
        <Link to="/reservation" className='reservation'>Reservation</Link>
        <Link to="/orderonline" className='orderonline'>Order Online</Link>
        <Link to="/login" className='login'>Login</Link>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/reservation' element={<Reservation/>}></Route>
        <Route path='/orderonline' element={<Orderonline/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App