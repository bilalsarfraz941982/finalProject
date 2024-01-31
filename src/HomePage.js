import React from 'react';
import './HomePage.css'
import Reservation from './Reservation';
import Menu from './Menu'
import picture from './Assets/headerbg.jpg';
import resturant from './Assets/restauranfood.jpg';
import salad from './Assets/greek salad.jpg';
import basket from './Assets/Basket.svg';
import brunch from './Assets/bruchetta.jpg';
import dessert from  './Assets/lemon dessert.jpg';
import customer2 from './Assets/customer2.jpeg';
import customer3 from './Assets/customer3.jpeg';
import customer4 from './Assets/customer4.jpeg';
import star5 from  './Assets/5star.jpg';
import star4 from  './Assets/4star.jpg';
import chefimage from './Assets/chefs.png';
import {Route , Routes,Link} from 'react-router-dom';

function HomePage() {
  return (
    <>
    <div className='header' style={{backgroundImage:`url(${picture})`}}>
        <div className='leftbox'>
          <h2>Little Lemon</h2>
          <h4>Chicago</h4><br></br>
          <p>Welcome to Little Lemon,<br></br> where we offer delicious and fresh cuisine<br></br> inspired by the flavors of the Mediterranean.<br></br> Our menu features a range of tasty <br></br>options that are perfect for any occasion,<br></br> all served in a warm and inviting atmosphere. </p><br></br>
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
               <h4 style={{color:"rgb(238,153,114)",marginLeft:"75px"}}>$12.99</h4>
            </div>
            <p>The famous greek salad of <br></br>crispy lettuce, peppers, olives<br></br> and our Chicago style feta <br></br>cheese, garnished with <br></br>crunchy garlic and rosemary <br></br>croutons. </p><br></br>
            <div className='basket'>
              <h4>Order a delivery</h4>
              <img  style={{marginLeft:"40px"}} src={basket} alt='basket picture' height={"20px"} width={"20px"}/>
            </div>
        </div>
        <div className='secondbox'>
            <img src={brunch} alt='salad picture' height={"200px"} width={"240px"} style={{borderRadius:"20px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}}/>
            <div className='nameprice'>
              <h4>Brunchetta</h4>
              <h4 style={{color:"rgb(238,153,114)",marginLeft:"90px"}}>$5.99</h4>
            </div>
            <p>Our Bruschetta is made from <br></br> grilled bread that has been<br></br> smeared with garlic and<br></br> seasoned with salt and olive<br></br> oil.</p><br></br>
            <br></br>
            <div className='basket'>
              <h4>Order a delivery</h4>
              <img style={{marginLeft:"40px"}} src={basket} alt='basket picture' height={"20px"} width={"20px"}/>
            </div>
        </div>
        <div className='thiredbox'>
            <img src={dessert} alt='salad picture' height={"200px"} width={"240px"} style={{borderRadius:"20px",borderBottomRightRadius:"0px",borderBottomLeftRadius:"0px"}}/>
            <div className='nameprice'>
            <h4>Lemon dessert</h4>
            <h4 style={{color:"rgb(238,153,114)",marginLeft:"65px"}}>$5.99</h4>
            </div>
            <p>This comes straight from <br></br>grandma’s recipe book, every<br></br> last ingredient has been<br></br> sourced and is as authentic <br></br>as can be imagined. </p><br></br>
            <br></br>
            <div className='basket'>
              <h4>Order a delivery</h4>
              <img style={{marginLeft:"40px"}} src={basket} alt='basket picture' height={"20px"} width={"20px"} />
            </div>
        </div>
    </div>
    <div className='commentBox'>
       <h4></h4><br></br>
       <h1>What our customer say about us !!</h1>
       <div className='commentBoxsection'>
          <div className='comment1'>
             <div className='customer1'>
               <img style={{borderRadius:"100px"}} src={customer4}></img>
               <h4>Andy</h4>
             </div>
             <p>"Excellent food, service well priced <br></br> and offer discount for NHS staff.<br></br> Very busy for Saturday lunch time."</p>
             <img src={star5} alt='reviewstar' height={"20px"} width={"100px"}></img>
          </div>
          <div className='comment2'>
             <div className='customer2'>
               <img style={{borderRadius:"100px"}} src={customer2}></img>
               <h4>Sharan</h4>
             </div>
             <p>"I ordered chicken Szechuan with <br></br>fries and brownie and custard. It was <br></br>delicious and our waiter Haris <br></br>was really helpful and nice and gave<br></br> us the best service we have had so <br></br>far coming to MyLahore. Thanks Haris."</p>
             <img src={star5} alt='reviewstar' height={"20px"} width={"100px"}></img>
          </div>
          <div className='comment3'>
             <div className='customer3'>
               <img style={{borderRadius:"100px"}} src={customer3}></img>
               <h4>Bilal</h4>
             </div>
             <p>"Nice place to eat, has a <br></br>good variety on the menu too, <br></br>Nice decor."</p>
             <img src={star4} alt='reviewstar' height={"20px"} width={"100px"}></img>
          </div>
       </div>
       <h2></h2><br></br><br></br><br></br>
    </div>
    <div className='box'>
      <div className='information'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3><br></br>
        <p>Little Lemon is a Mediterranean-inspired <br></br>cocktail and wine bar that takes <br></br>pride in offering a tantalizing <br></br>menu centered around fresh seafood, <br></br>succulent meats, flavorful charcuterie, <br></br>and locally sourced ingredients.</p>
      </div>
      <div className='cheffimage'>
        <br></br>
         <img src={chefimage} height={"350px"} width={"350px"}/>
        <br></br>
      </div>
    </div>
    </>
  )
}

export default HomePage