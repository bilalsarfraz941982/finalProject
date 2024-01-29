import React from 'react';
import './Login.css';
import facebook from './Assets/fb.png';
import instagram from './Assets/insta.png';
import snapchatt from './Assets/snap.png';
import twitter from './Assets/twitter.png';
import {Route , Routes , Link} from 'react-router-dom';
import Singup from './Signup';

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
          <h6 style={{color:"rgb(73,94,87)", textAlign:"center"}}>---------------------------- OR ----------------------------</h6>
          <div className='details'>
            <form>
              <input type='email' id='email' className='email' placeholder='  Email' style={{backgroundColor:"rgb(234, 217, 135)",height:"30px",width:"300px" , marginBottom:"10px",marginTop:"10px", borderRadius:"20px" , marginLeft:"80px"}}></input><br></br>
              <input type='password' id='password' className='password' placeholder='  Password' style={{backgroundColor:"rgb(234, 217, 135)",height:"30px",width:"300px", marginBottom:"10px", borderRadius:"20px", marginLeft:"80px"}}></input><br></br>
              <button style={{color:"rgb(73,94,87)", backgroundColor:"rgb(244, 206, 20)", marginLeft:"150px",marginTop:"10px", fontSize:"80%" ,borderRadius:"50px" ,height:"35px" , width:"150px" , }}>Sign in</button>
            </form>
          </div>
        </div>
      </div>
      <div className='rightbox' style={{backgroundColor:"rgb(73,94,87)", height:"400px" , width:"400px" ,borderRadius:"500px"}}>
         <h1 style={{color:"white", textAlign:"center" , marginTop:"85px"}}>New Here?</h1>
         <h3 style={{color:"white" ,textAlign:'center', marginTop:"20px", fontWeight:"200"}}>Sin up and discover a great <br></br> amount of discounts and offers!!!</h3>
         <Link to='/signup' className='signup'><button style={{color:"rgb(73,94,87)", backgroundColor:"rgb(244, 206, 20)",marginLeft:"120px",marginTop:"50px", fontSize:"80%" ,borderRadius:"50px" ,height:"35px" , width:"150px"}}>Sing up</button></Link>
         <Routes>
          <Route path='/signup' element={<Singup/>}></Route>
         </Routes>
      </div>
    </div>
  )
}

export default Login