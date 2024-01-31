import React from 'react';
import './Reservation.css';
import reservation from './Assets/reservation.jpg'

function Reservation() {
  return (
    <>
    <div className='majorbox'>
      <div className='leftinnerbox'>
        <h1>BOOKING</h1><br></br>
        
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" style={{color:"rgb(92, 113, 106)"}}> Subscribe me for the newsletter </label>
        </div>
          <button>Book A Table</button>
        </div>
      <div className='image'>
        <img alt='' src={reservation} height={"400px"} width={"400px"} />
      </div>
    </div>
    </>
  )
}

export default Reservation