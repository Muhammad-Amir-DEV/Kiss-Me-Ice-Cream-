
import './App.css';
import './components/navbar'
import './assets/img/header-1.png'
import './assets/img/aboutus.png'
import './components/sing'
import { FaPhoneFlip } from "react-icons/fa6"
import { FaAddressCard } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import menu1 from './assets/img/menu-1.png'
import menu2 from './assets/img/menu-2.png'
import menu3 from './assets/img/menu-3.png'
import menu4 from './assets/img/menu-4.png'
import menu5 from './assets/img/menu-5.png'
import menu6 from './assets/img/menu-6.png'
import gallery1 from './assets/img/gallery7.jpg'
import gallery2 from './assets/img/gallery2.jpg'
import gallery3 from './assets/img/gallery8.jpg'
import review1 from './assets/img/review-1.png'
import review2 from './assets/img/review-2.png'
import review3 from './assets/img/review-3.png'


const grid_card = [
  {
    id: 1,
    image: menu1,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  },
  {
    id: 1,
    image: menu2,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  }, {
    id: 1,
    image: menu3,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  }, {
    id: 1,
    image: menu4,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  }, {
    id: 1,
    image: menu5,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  },
  {
    id: 1,
    image: menu4,
    heading: "Real strawberry ice cream",
    Price: 14 + "$",

  },
  {
    id: 1,
    image: menu1,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  },
  {
    id: 1,
    image: menu2,
    heading: "Real strawberry ice cream",
    Price: 12 + "$",

  },


]
const navbar = [
  {
    id: "#home",
    name: "Home"
  },
  {
    id: "#about",
    name: "About"
  },
  {
    id: "#menu",
    name: "Menu"
  },
  {
    id: "#gallery",
    name: "Gallery"
  },
  {
    id: "#review",
    name: "Reviews"
  },
  {
    id: "#orderr",
    name: "Order"
  }
]
const galler = [
  {
    link: gallery1,
    image: gallery1,
  },
  {
    link: gallery2,
    image: gallery2,
  },
  {
    link: gallery3,
    image: gallery3,
  },
  // {
  //   link: gallery4,
  //   image: gallery4,
  // }

]
const reviews = [
  {
    id: 1,
    img: review1,
    name: "M Amir",
    Rating: 100,
    reviews_para: "it amet consectetur adipisicing elit. Culpa pariatur nisi fugiat quas. Tempore sapiente velit neque quibusdam! Excepturi neque in consequatur perspiciatis?"
  },
  {
    id: 2,
    img: review2,
    name: "Fazil Abbas",
    Rating: 90,
    reviews_para: "it amet consectetur adipisicing elit. Culpa pariatur nisi fugiat quas. Tempore sapiente velit neque quibusdam! Excepturi neque in consequatur perspiciatis?"
  },
  {
    id: 3,
    img: review3,
    name: "Jone Elia",
    Rating: 100,
    reviews_para: "it amet consectetur adipisicing elit. Culpa pariatur nisi fugiat quas. Tempore sapiente velit neque quibusdam! Excepturi neque in consequatur perspiciatis?"
  },

]


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
          {
            navbar.map((items) => {
              return (
                <>
                  <a href={items.id} >{items.name}</a>
                </>
              )
            })
          }
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
          {
            grid_card.map((items) => {
              return (
                <>
                  <div className="box-1 boxs">
                    <div className="content">
                      <img className='menu-img' src={items.image} alt="" />
                      <h1 className='menu-heading'>{items.heading}</h1>
                      <div className="oder-btn">
                        <figcaption>{items.Price}</figcaption>
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }



        </div>
        <h1><button className='m-btn'><b>+</b> Add More</button></h1>
      </div>
      {/* gellery =================== */}
      <section id="gallery" className='gallery'>
        <h1 className="center-heading">Our Gallery</h1>
        <p className='para'>Following are the images of ice cream we made in pur past exprence.Our ice cream cookers are brillent and invative  </p>
        <div className="gallery-container">
          {
            galler.map((items) => {
              return (
                <>
                  <a href={items.link} className='box'>
                    <img src={items.image} alt="" />
                  </a>
                </>
              )
            })
          }
        </div>
        <h1><button className='galery-btn'>See More</button></h1>

      </section>
      {/* reviews ============== */}
      <section id="review" className='gallery review'>
        <h1 className="center-heading">Our Reviews</h1>
        <div className="reviews-container">
          {
            reviews.map((items) => {
              return (
                <>
                  <div className="review-box">
                    <i>{items.Rating}%</i>
                    <figcaption>{items.name}</figcaption>
                    <img src={items.img} alt="" />
                    <p>{items.reviews_para}</p>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>

      {/* oder  */}
      <section id="orderr" className="order">
        <h1 className="center-heading">Order Now</h1>
        <form action="">
          <div className="order-container">
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input placeholder='Enter your full name' required type="text" id='name' name='name' />
            </div>
            <div className="input-box">
              <label htmlFor="ice-cream-name">Ice Cream Name  </label>
              <input placeholder='Enter ice cream name' required type="text" id='ice-cream-name' name='ice-cream-name' />
            </div>
            <div className="input-box">
              <label htmlFor="order-detail">Order Details</label>
              <input placeholder='Enter order detalis' required type="text" id='order-detail' name='order-detail' />
            </div>

            <div className="input-box col-span">
              <label htmlFor="address">Your Address</label>
              <input placeholder='Enter your address' required type="text" id='address' name='address' />
            </div>
            <div className="input-box">
              <label htmlFor="phone">Phone Number</label>
              <input placeholder='Enter phone number' required type="number" name="phone" id="phone" />
            </div>
            <div className="input-box">
              <label htmlFor="time">When you want?</label>
              <input required type="datetime-local" name="time" id="time" />
            </div>
            <div className="input-box">
              <label htmlFor="location">Our Location</label>
              <iframe src="https://maps.app.goo.gl/uRT4JBbKJsr54xdU8" frameborder="0"></iframe>
            </div>
          </div>
          <input className='btn' type="submit" value="Submit" />
        </form>
      </section>

      <footer>
        <div className="footer-container">
          <div className="info">
            <div className="footer-inline">
              <div className="icons-box">
              <b><FaAddressCard /></b>
              <h3>Address</h3>
              <caption><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.</p></caption>
            </div>
              <div className="icons-box">
                <b><FaPhoneFlip /></b>
                <h3>Phone</h3>
                <caption>
                  <p>+923145667213</p>
                  <p>+923145667213</p>
                </caption>
              </div>
              </div>
           <div className="footer-block">
           <div className="icons-box">
              <b><MdEmail /></b>
              <h3>Eamil</h3>
              <caption><p className='lo'>amirsultan0321@gmail.com</p></caption>
            </div>
            <div className="icons-box">
              <b><MdOutlineAccessTimeFilled /></b>
              <h3>Opening Time</h3>
              <caption>
                <p>monday-fiday:9:00am -12:00pm </p>
                <p>saturday:9:00am -10:00pm </p>
              </caption>
            </div>
           </div>
          </div>
          <div className="botton-info"></div>
        </div>
      </footer>
    </>
  )
}

export default App
