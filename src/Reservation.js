import React, { useState } from 'react';
import './Reservation.css';
import reservation from './Assets/reservation.jpg'


function Reservation() {
  const [firstName , setFirstname] = useState("");
  const [lastName , setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rdate , setRdate] = useState("");
  const [rtime, setRtime] = useState("");
  const [nopeople , setNopeople] = useState("");
  const [occa , setOcca] = useState("");

  const condition = function(){
      return (
        firstName &&
        lastName&&
        email&&
        phone&&
        rdate&&
        rtime&&
        nopeople&&
        occa
      )
  }

  const reset = function(){
      setFirstname("");
      setLastname("");
      setEmail("");
      setPhone("");
      setRdate("");
      setRtime("");
      setNopeople("");
      setOcca("");
  }

  const buttonHnadler = function(e){
    e.preventDefault();
    reset();
    console.log("thanks for the reservation you will get a confirmation email soon!!!")
    console.log(alert("thanks for the reservation you will get a confirmation email soon!!!"))
  }

  return (
    <>
    <div className='majorbox'>
      <div className='leftinnerbox'>
        <h1>BOOKING</h1><br></br>
        <div className='form'>
          <form>
            <label style={{color:"rgb(73,94,87)"}} htmlFor='firstname'>Name <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              style={{width:"400px" , height:"35px", marginTop:"5px", backgroundColor:"rgb(243, 239, 221"}}
              type='text'
              className='firstname'
              id='firstname'
              placeholder='  First'
              value={firstName}
              onChange={function(e){
                setFirstname(e.target.value)
              }}
              /><br></br>
              <input
              style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"5px", backgroundColor:"rgb(243, 239, 221"}}
              type='lastname'
              className='lastname'
              id='lastname'
              placeholder='  Last'
              value={lastName}
              onChange={function(e){
                setLastname(e.target.value)
              }}
              /><br></br>
               <label style={{color:"rgb(73,94,87)"}} htmlFor='email'>Email <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"10px", backgroundColor:"rgb(243, 239, 221"}}
              type='email'
              className='email'
              id='email'
              value={email}
              onChange={function(e){
                setEmail(e.target.value)
              }}
              /><br></br>
               <label style={{color:"rgb(73,94,87)"}} htmlFor='phone'>Phone <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"10px", backgroundColor:"rgb(243, 239, 221"}}
              type='number'
              className='phone'
              id='phone'
              value={phone}
              onChange={function(e){
                setPhone(e.target.value)}}
              /><br></br>
               <label style={{color:"rgb(73,94,87)"}} htmlFor='rdate'>Reservation Date <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"10px", backgroundColor:"rgb(243, 239, 221"}}
              type='date'
              className='rdate'
              id='rdate'
              value={rdate}
              onChange={function(e){
                setRdate(e.target.value)}}
              /><br></br>
               <label style={{color:"rgb(73,94,87)"}} htmlFor='rtime'>Reservation Time <sup style={{color:"salmon"}} >*</sup></label><br></br>
               <select value={rtime}
              onChange={function(e){
                setRtime(e.target.value)}} style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"10px", backgroundColor:"rgb(243, 239, 221"}} id="rtime " >
               <option>17:00</option>
               <option>18:00</option>
               <option>19:00</option>
               <option>20:00</option>
               <option>21:00</option>
              <option>22:00</option>
              </select>
              <br></br>
               <label style={{color:"rgb(73,94,87)"}} htmlFor='nopeople'>How many people will you be with? <sup style={{color:"salmon"}} >*</sup></label><br></br>
              <input
              style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"10px", backgroundColor:"rgb(243, 239, 221"}}
              type='text'
              className='nppeople'
              id='nopeople'
              value={nopeople}
              onChange={function(e){
                setNopeople(e.target.value)}}
              /><br></br>
              <label htmlFor="occasion" style={{color:"rgb(73,94,87)"}}>Occasion<sup style={{color:"salmon"}} >*</sup></label><br></br>
              <select value={occa}
              onChange={function(e){
                setOcca(e.target.value)}}
              style={{width:"400px" , height:"35px", marginTop:"5px",marginBottom:"10px", backgroundColor:"rgb(243, 239, 221"}} id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
              </select><br></br>
              <label style={{color:"rgb(73,94,87)"}} htmlFor='comment'>Notes</label><br></br>
              <textarea style={{marginTop:"5px", backgroundColor:"rgb(243, 239, 221"}} id="comment" name="comment" rows="4" cols="52" placeholder='enter your comments here .....'></textarea>
          </form>
        </div><br></br>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" style={{color:"rgb(92, 113, 106)"}}> Subscribe me for the newsletter </label>
        </div>
          <button onClick={buttonHnadler} disabled={!condition()}>Book A Table</button>
        </div>
      <div className='image'>
        <img alt='' src={reservation} height={"400px"} width={"400px"} />
      </div>
    </div>
    </>
  )
}

export default Reservation