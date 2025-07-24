import React, { useContext } from 'react'
import { CartContext } from './CartProvider';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerimg from '../Assesst/carouselimg.jpg'
import bannerimg1 from '../Assesst/Banner-Slider_1.png'
import bannerimg2 from '../Assesst/Banner-Slider_2.png'
import homeimg1 from '../Asesst/Apple.jpg'
import homeimg2 from '../Asesst/carrot.jpg'
import homeimg3 from '../Asesst/cauliflower.jpg'
import homeimg4 from '../Asesst/egg.jpg'
import homeimg5 from '../Asesst/Guava.jpg'
import homeimg6 from '../Asesst/mango.jpg'
import homeimg7 from '../Asesst/onion.jpg'
import homeimg8 from '../Asesst/papaya.jpg'
import homeimg9 from '../Asesst/potato.jpg'
import homeimg10 from '../Asesst/stawberry.jpg'
import homeimg11 from '../Asesst/tomato.jpg'
import homeimg12 from '../Asesst/watermelon.jpg'
import aboutimg from '../Asesst/about-icons-1.svg'
import mobileimg from '../Assesst/mobile.png'
import { Carousel } from "react-bootstrap";
import Breakfast from './Breakfast';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import '../components/Home.css'

const Products = [
  { id: 1, name: "Apple", price: 100, image: homeimg1,rating: 3, },
  { id: 2, name: "carrot", price: 30, image: homeimg2, rating:4,},
  { id: 3, name: "cauliflower", price: 50, image: homeimg3,rating:3, },
  { id: 4, name: "egg", price: 10, image: homeimg4,rating:2, },
  { id: 5, name: "Guava", price: 70, image: homeimg5 ,rating:4,},
  { id: 6, name: "mango", price: 110, image: homeimg6,rating:3, },
  { id: 7, name: "onion", price: 80, image: homeimg7,rating:2, },
  { id: 8, name: "papaya", price: 75, image: homeimg8,rating:4, },
  { id: 9, name: "potato", price: 40, image: homeimg9 ,rating:2,},
  { id: 10, name: "stawberry", price: 130, image: homeimg10,rating:1, },
  { id: 11, name: "tomato", price: 45, image: homeimg11,rating:5, },
  { id: 12, name: "watermelon", price: 50, image: homeimg12,rating:5, },
]
const Home = () => {
  const { AddToCart } = useContext(CartContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  //function display in star
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= count ? '#ffc107' : '#e4e5e9' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="Home-container">

      <div className='download row'>
        <div className='uped col-12 col-sm-7 col-md-6 col-lg-4'>
          <img src={aboutimg} alt='aboutimg' />
        </div>
        <div className='onup col-12 col-sm-7 col-md-6 col-lg-4'>
          <h2>Welcome To Fresh Cart</h2>
          <p>Download the app get free food & $30 off on your first order.</p>
          </div>

          <div className='key col-12 col-sm-7 col-md-6 col-lg-4'>
            <h3>Dowload Fresh Cart</h3>
          </div>

      </div>

      {/*carousel*/}

      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100 py-3' src={bannerimg} alt='bannerimg' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 py-3' src={bannerimg1} alt='bannerimg1' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 py-3' src={bannerimg2} alt='bannerimg2' />
        </Carousel.Item>
      </Carousel>

      {/*Products*/}

      <Breakfast />
      <Slider {...settings}>
        {Products.map((item) => (
          <div key={item.id} className="p-2">
            <div className="cards text-center">
              <div style={{ position: 'relative' }}>
                {item.label && (
                  <span
                    className="badge bg-danger"
                    style={{ position: 'absolute', top: 10, left: 10 }}
                  >
                    {item.label}
                  </span>
                )}
                <img
                  src={item.image}
                  className="cards-img-top"
                  alt={item.name}
                  style={{ height: '180px', width: '200px', }}
                />
              </div>
              <div className="cards-body">
                <h5 className="cards-title">{item.name}</h5>
                <p className="cards-text">
                  <strong>${item.price}</strong>{' '}
                  {item.oldprice && (
                    <span className="text-muted text-decoration-line-through">
                      ${item.oldprice}
                    </span>
                  )}
                </p>
                <div>{renderStars(item.rating)}</div>
                <button className="btn btn-success btn-sm" onClick={() => AddToCart(item)}>+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className='mobileimges row'>
        <div className='col-12 col-sm-7 col-md-6 col-lg-4'>
          <img  src={mobileimg} alt='mobileimg' />
        </div>
        <div className=' col-12 col-sm-7 col-md-6 col-lg-4'>
          <div className='tittle-card'>
            <h1 className='tidel'>Get the FreshCart app</h1>
            <p className='tidel'>We will send you a link, open it on your phone to download the app.</p>
            <input type='radio' name='gender' />Email<input type='radio' name='gender' style={{ marginLeft: '20px', }} />Phone number
            <input type='text & email' placeholder='email or phone num' style={{ marginLeft: '5px', display: 'flex', marginTop: '10px', }} />
            <input type='submit' style={{ marginTop: '10px', }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home