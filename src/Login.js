import React from 'react';
import './Login.css';
import facebook from './Assets/fb.png';
import instagram from './Assets/insta.png';
import snapchatt from './Assets/snap.png';
import twitter from './Assets/twitter.png';
import ygbackground from './Assets/ygbackground.jpg'

function Login() {
  return (
    <div className='mainbox'>
      <div className='leftbox'>
        <div className='topthree'>
          <h1>Login to Your Account</h1>
          <h4>Login using social networks</h4>
          <div className='snlogo'>
           <img src={facebook} height={30} width={30} alt=''/>
           <img src={instagram} height={30} width={30} alt=''/>
           <img src={snapchatt} height={30} width={30} alt=''/>
           <img src={twitter} height={30} width={30} alt=''/>
          </div><br></br>
          <h5>----------------- OR -----------------</h5>
          <div className='details'>
            <form>
              <input type='email' id='email' className='email' placeholder='Email'></input><br></br>
              <input type='password' id='password' className='password' placeholder='Password'></input><br></br>
              <button style={{color:"rgb(244,206,20)"}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className='rightbox' style={{backgroundImage:`url(${ygbackground})`, height:"400px" , width:"400px"}}>
         <h1>New Here?</h1>
      </div>
    </div>
  )
}

export default Login