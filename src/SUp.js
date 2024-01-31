import React from 'react';
import Login from './Login';
import {Route , Routes , Link} from 'react-router-dom';
import facebook from './Assets/fb.png';
import instagram from './Assets/insta.png';
import snapchatt from './Assets/snap.png';
import twitter from './Assets/twitter.png';
import './SUp.css'

function SUp() {
  return (
    <div className='mainbox'>
      <div className='leftbox' style={{backgroundColor:"rgb(73,94,87)", height:"400px" , width:"400px" ,borderRadius:"500px"}}>
         <h1 style={{color:"white", textAlign:"center" , marginTop:"105px"}}>Welcome Back!</h1>
         <h3 style={{color:"white" ,textAlign:'center', marginTop:"20px", fontWeight:"200"}}>To keep connected with us please<br></br> login with your personal information</h3>
         <Link to='/login' className='login'><button style={{color:"rgb(73,94,87)", backgroundColor:"rgb(244, 206, 20)",marginLeft:"120px",marginTop:"50px", fontSize:"80%" ,borderRadius:"50px" ,height:"35px" , width:"150px"}}>SIGN IN</button></Link>
      </div>
     <Routes>
        <Route path='/login' element={<Login/>}></Route>
     </Routes>
      <div className='rightbox'>
        <div className='topthree'>
          <h1>Create Account</h1>
          <h4>Login using social networks</h4>
          <div className='snlogo'>
           <img src={facebook} height={30} width={30} alt=''/>
           <img src={instagram} height={30} width={30} alt=''/>
           <img src={snapchatt} height={30} width={30} alt=''/>
           <img src={twitter} height={30} width={30} alt=''/>
          </div><br></br>
          <h6 style={{color:"rgb(73,94,87)", textAlign:"center"}}>or use your email for registration</h6>
          <div className='details'>
            <form>
              <input type='text' id='name' className='name' placeholder='  Name' style={{backgroundColor:"rgb(234, 217, 135)",height:"30px",width:"300px" , marginBottom:"10px",marginTop:"10px", borderRadius:"20px" , marginLeft:"80px"}}></input><br></br>
              <input type='email' id='email' className='email' placeholder='  Email' style={{backgroundColor:"rgb(234, 217, 135)",height:"30px",width:"300px" , marginBottom:"10px", borderRadius:"20px" , marginLeft:"80px"}}></input><br></br>
              <input type='password' id='password' className='password' placeholder='  Password' style={{backgroundColor:"rgb(234, 217, 135)",height:"30px",width:"300px", marginBottom:"10px", borderRadius:"20px", marginLeft:"80px"}}></input><br></br>
              <button style={{color:"rgb(73,94,87)", backgroundColor:"rgb(244, 206, 20)", marginLeft:"90px",marginTop:"20px", fontSize:"80%" ,borderRadius:"50px" ,height:"35px" , width:"150px" , }}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SUp