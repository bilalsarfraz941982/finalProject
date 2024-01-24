import React from 'react';
import './HomePage.css'
import Reservation from './Reservation';
import picture from './Assets/headerbg.jpg';
import resturant from './Assets/restauranfood.jpg';
import {Route , Routes,Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
    <div className='header' style={{backgroundImage:`url(${picture})`}}>
        <div className='leftbox'>
          <h2>Little Lemon</h2>
          <h4>Chicago</h4><br></br>
          <p>Little Lemon is a Mediterranean-inspired<br></br> cocktail and wine bar that takes <br></br>pride in offering a tantalizing menu centered<br></br> around fresh seafood, succulent meats, <br></br>flavorful charcuterie, and locally sourced <br></br>ingredients. </p><br></br>
          <Link to="/reservation" className='reservation'><button>Reserve a Table</button></Link>
        </div>
        <Routes>
          <Route path='/reservation' element={<Reservation></Reservation>}></Route>
        </Routes>
        <div className='rightbox'>
           <img src={resturant} alt='resturant ' height={"400px"} width={"320px"}/>
        </div>
    </div>
    </>
  )
}

export default HomePage