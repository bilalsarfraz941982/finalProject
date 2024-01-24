import React from 'react';
import './Reservation.css'

function Reservation() {
  return (
    <div className='mainBox'>
      <br></br>
      <h1>Find the table for any occasion</h1>
      <div className='fields'>
         <div className='date'>
          <h4>Date</h4>
          <input type='date' style={{tabSize:"200px"}}></input>
         </div>
         <div className='time'>
          <h4>Time</h4>
          <input type='time'></input>
         </div>
      </div>
    </div>
  )
}

export default Reservation