import React from 'react';
import './Reservation.css';
import reservation from './Assets/reservation.jpg'

function Reservation() {
  return (
    <>
    <div className='majorbox'>
      <div className='leftinnerbox'>
        <h1>BOOKING</h1><br></br>
        <div className='dateandtime'>
          <div className='date'>
            <h5>Date<sup style={{color:"red"}}>*</sup></h5>
            <input type='date'></input>
          </div>
          <h2>bilo</h2>
          <div className='time'>
            <h5>Time<sup style={{color:"red"}}>*</sup></h5>
            <input type='time'></input>
          </div>
        </div>
        <div className='people'>
          <h5>People <sup style={{color:"red"}}>*</sup></h5>
          <input type='field'placeholder='no of people'></input>
        </div>
        <div className='fnameandlname'>
          <div className='firstname'>
            <h5>First Name<sup style={{color:"red"}}>*</sup></h5>
            <input type='field'></input>
          </div>
          <h2>bilo</h2>
          <div className='lastname'>
            <h5>Last Name<sup style={{color:"red"}}>*</sup></h5>
            <input type='field'></input>
          </div>
        </div>
        <div className='emailandphone'>
          <div className='email'>
            <h5>Email<sup style={{color:"red"}}>*</sup></h5>
            <input type='field'></input>
          </div>
          <h2>bilo</h2>
          <div className='phonenumber'>
            <h5>Phone<sup style={{color:"red"}}>*</sup></h5>
            <input type='field'></input>
          </div>
        </div>
        <div className='comment'>
          <form>
             <h5>Commetns</h5>
             <textarea id="comment" name="comment" rows="4" cols="50" placeholder='enter your comments here .....'></textarea>
          </form>
        </div>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" style={{color:"rgb(234, 217, 135)"}}> Subscribe me for the newsletter </label>
        </div>
          <button>Book A Table</button>
          <h2>b</h2>
        </div>
      <div className='image'>
        <img alt='' src={reservation} height={"400px"} width={"400px"} />
      </div>
    </div>
    </>
  )
}

export default Reservation