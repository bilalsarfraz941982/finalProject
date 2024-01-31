import React from 'react';
import './Reservation.css';
import reservation from './Assets/reservation.jpg'

function Reservation() {
  return (
    <>
    <div className='majorbox'>
      <div className='leftinnerbox'>
        <h1>BOOKING</h1><br></br>
        <div className='form'>
          <form>
            <label htmlFor='firstname'>Name <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              type='text'
              className='firstname'
              id='firstname'
              placeholder='First'
              /><br></br>
              <input
              type='lastname'
              className='lastname'
              id='lastname'
              placeholder='Last'
              /><br></br>
               <label htmlFor='email'>Email <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              type='email'
              className='email'
              id='email'
              placeholder=''
              /><br></br>
               <label htmlFor=''>Phone <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              type='number'
              className='phone'
              id='phone'
              placeholder=''
              /><br></br>
               <label htmlFor='rdate'>Reservation Date <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              type='date'
              className='rdate'
              id='rdate'
              placeholder=''
              /><br></br>
               <label htmlFor='rtime'>Reservation Time <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              type='time'
              className='rtime'
              id='rtime'
              placeholder=''
              /><br></br>
               <label htmlFor='nopeople'>How many people will you be with? <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              type='text'
              className='nppeople'
              id='nopeople'
              placeholder=''
              /><br></br>
              <label htmlFor='comment'>Notes</label><br></br>
              <textarea id="comment" name="comment" rows="4" cols="50" placeholder='enter your comments here .....'></textarea>
          </form>
        </div>
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