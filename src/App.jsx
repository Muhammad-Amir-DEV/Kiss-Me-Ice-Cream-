// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import './components/navbar'
import './assets/img/menu-1.png'
import './assets/img/header-1.png'
import './assets/img/aboutus.png'
import './components/sing';

function App() {

  return (

    <>
      {/* header .............. */}
      <section className="header">
        <a href="#" className="logo">
          <i className="fas fa-ice-cream"></i>kiss
          Ice-Cream
        </a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">gallery</a>
          <a href="#reviews">reviews</a>
          <a href="#order">Order</a>
        </nav>
        <button className="menu-btn fas fa-bars ">
          <a href='' >Sing In</a >
        </button>
      </section>
      {/* header end   */}

      {/* homme    ..................... */}
      <section id="home" className="home">
        <div className="swiper home-silder">
          <div className="swiper-wrapper">
            <div className="swiper-silder silder">
              <div className="content">
                <h3>Do you know how pleasure Ice cream taste?<br /> <span className='span'></span> </h3>
                <button className='menu-btn'><a href="">Oder Now </a></button>
              </div>
            </div>
            {/* <div className="swiper-silder silder">
            <div className="hero-contect">
              <h3>Do you know how pleasure tast?</h3>
              <button className='menu-btn'><a href="">Oder Now </a></button>
            </div>
          </div>
          <div className="swiper-silder silder">
            <div className="hero-contect">
              <h3>Do you know how pleasure tast?</h3>
              <button className='menu-btn'><a href="">Oder Now </a></button>
            </div>
          </div> */}
          </div>
        </div>
      </section>
      {/* home end  */}

      {/* about ...................... */}
      <section id='about' className='about'>

        <h3 className='center-heading'>About Us</h3>
        <h1>Why choose us?</h1>
        <div class="box-about">
          <div class="left-about">
            {/* <img src="./assets/img/aboutus.png" alt="no img" /> */}
          </div>
          <div class="right-about">
            <h2>Provide Ice-Cream </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voquam praes at veritatis quo voluptate. Maiores molestias incidunt minima, modi  eos ea consequ  untur officia corrupti, eaque, dolore nihil voluptatem?</p>

            <div class=" cont">
             <div className="icon">
             <a href="#" class="bt-a">Fast Delivery</a>
              <a href="#" class="bt-a  active">Easy Payment</a>
             </div>
              <a href="#" class="bt-a block">24/7 Service</a>
            </div>

          </div>
        </div>


      </section>
      {/* about end  .......... */}

      {/* menu ................ */}
      <div id="menu" className="menu">
        <h3 className='center-heading'> Our Menu </h3>
        <h1 className=''>It's our best menu?</h1>
        <div className="grid-container">
          
        <div className="box-1 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="box-2 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="box-3 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="box-4 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div><div className="box-5 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div><div className="box-6 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div><div className="box-7 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          </div><div className="box-8 boxs">
            <div className="content">
              <h1 className='menu-heading'>Real strawberry ice cream</h1>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              <div className='oder-btn'>
                <figcaption>20$</figcaption>
                <button>Add to cart</button>
              </div>
            </div>
          
          </div>
        </div>
        <h1><button className='m-btn'><b>+</b> Add More</button></h1>
      </div>
    </>
  )
}

export default App
