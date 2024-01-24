import React from 'react';
import './HomePage.css'
import Reservation from './Reservation';
import Menu from './Menu'
import picture from './Assets/headerbg.jpg';
import resturant from './Assets/restauranfood.jpg';
import salad from './Assets/greek salad.jpg'
import basket from './Assets/Basket.svg'
import brunch from './Assets/bruchetta.jpg'
import dessert from  './Assets/lemon dessert.jpg'
import {Route , Routes,Link} from 'react-router-dom'

function HomePage() {
  return (
    <>
    <div className='header' style={{backgroundImage:`url(${picture})`}}>
        <div className='leftbox'>
          <h2>Little Lemon</h2>
          <h4>Chicago</h4><br></br>
          <p>Little Lemon is a Mediterranean-inspired<br></br> cocktail and wine bar that takes <br></br>pride in offering a tantalizing menu centered<br></br> around fresh seafood, succulent meats, <br></br>flavorful charcuterie, and locally sourced <br></br>ingredients. </p><br></br>
          <Link to="/reservation" className='reservation'><button>Reserve a Table</button></Link>
        </div>
        <Routes>
          <Route path='/reservation' element={<Reservation></Reservation>}></Route>
        </Routes>
        <div className='rightbox'>
           <img src={resturant} alt='resturant ' height={"400px"} width={"320px"}/>
        </div>
    </div>
    <div className='main'>
      <div className='wspecial'>
        <h1>This week special!</h1>
      </div>
      <div>
         <Link to="/menu" className='menu'><button>Online Menu</button></Link>
      </div>
      <Routes>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>
    </div>
    <div className='mainM'>
        <div className='firstbox'>
            <img src={salad} alt='salad picture' height={"200px"} width={"240px"} style={{borderRadius:"20px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}}/><br></br>
            <div className='nameprice'>
               <h4>Greek Salad</h4>
               <h4 style={{color:"rgb(238,153,114)"}}>$12.99</h4>
            </div>
            <p>The famous greek salad of <br></br>crispy lettuce, peppers, olives<br></br> and our Chicago style feta <br></br>cheese, garnished with <br></br>crunchy garlic and rosemary <br></br>croutons. </p><br></br>
            <div className='basket'>
              <h4>Order a delivery</h4>
              <img src={basket} alt='basket picture' height={"20px"} width={"20px"}/>
            </div>
        </div>
        <div className='secondbox'>
            <img src={brunch} alt='salad picture' height={"200px"} width={"240px"} style={{borderRadius:"20px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}}/>
            <div className='nameprice'>
              <h4>Brunchetta</h4>
              <h4 style={{color:"rgb(238,153,114)",marginLeft:"80px"}}>$5.99</h4>
            </div>
            <p>Our Bruschetta is made from <br></br> grilled bread that has been<br></br> smeared with garlic and<br></br> seasoned with salt and olive<br></br> oil.</p><br></br>
            <br></br>
            <div className='basket'>
              <h4>Order a delivery</h4>
              <img src={basket} alt='basket picture' height={"20px"} width={"20px"}/>
            </div>
        </div>
        <div className='thiredbox'>
            <img src={dessert} alt='salad picture' height={"200px"} width={"240px"} style={{borderRadius:"20px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}}/>
            <div className='nameprice'>
            <h4>Lemon dessert</h4>
            <h4 style={{color:"rgb(238,153,114)"}}>$5.99</h4>
            </div>
            <p>This comes straight from <br></br>grandma’s recipe book, every<br></br> last ingredient has been<br></br> sourced and is as authentic <br></br>as can be imagined. </p><br></br>
            <br></br>
            <div className='basket'>
              <h4>Order a delivery</h4>
              <img  src={basket} alt='basket picture' height={"20px"} width={"20px"} />
            </div>
        </div>
    </div>
    </>
  )
}

export default HomePage