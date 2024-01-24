import React from 'react';
import Welcomepage from './Welcomepage';
import Aboutme from './Aboutme';
import {Route , Routes , Link} from 'react-router-dom';

function App() {
  return (
    <>
      <div className='navbar'>
         <Link to="/" className='homepage'>Home page</Link>
         <Link to="/aboutme" className='aboutme'>About me</Link>
      </div>
      <Routes>
        <Route path='./' element={<Welcomepage/>}></Route>
        <Route path='/aboutme'element={<Aboutme/>}></Route>
      </Routes>
    </>
  )
}

export default App