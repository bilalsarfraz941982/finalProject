import React from 'react';
import './App.css';
import {Route , Routes , Link} from 'react-router-dom';
import Homepage from './HomePage';
import About from './About';

function App() {
  return (
    <>
      <div className='navbar'>
        <Link to="/" className='homepage'>HomePage</Link>
        <Link to="/about" className='about'>About</Link>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App