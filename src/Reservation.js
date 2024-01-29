import React from 'react';
import './Reservation.css'

function Reservation() {
  return (
  <>
    <h1>BOOKING</h1>
    <div className='mainBox'>
      <div className='bookinginfo'>
        <div className='date'>
          <h3>Date<sup>*</sup></h3>
          <input type='date' style={{tabSize:""}}></input>
        </div>
        <div className='time'></div>
        <h3>Time<sup>*</sup></h3>
        <input type='time'></input>
      </div>
      <div className='image'></div>
    </div>
  </>
  )
}

export default Reservation