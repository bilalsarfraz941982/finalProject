import React from 'react';
import './Reservation.css';
import reservation from './Assets/reservation.jpg'

function Reservation() {
  return (
    <div className='mainBox'>
      <h1>BOOKING</h1>
      <div className='bookinginfo'>
        <div className='date'>
          <h3>Date<sup style={{color:"red"}}>*</sup></h3>
          <input type='date' style={{tabSize:""}}></input>
        </div>
        <div className='time'></div>
        <h3>Time<sup style={{color:"red"}}>*</sup></h3>
        <input type='time'></input>
      </div>
      <div className='image'>
        <img alt='' src={reservation} height={"200px"} width={"200px"} />
      </div>
    </div>
  )
}

export default Reservation