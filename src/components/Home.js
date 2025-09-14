import React, { useContext } from 'react';
import Footer from './Footer';
import About from './About';
import Product from './Product';
import { CartContext } from './CartProvider';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import modelimg from '../Assesst/modalgirl_img.jpg';
//import homie from '../Asesst/organic.png';
import bannerimg1 from '../Asset/slide-1.jpg';
import bannerimg2 from '../Asset/slide-2.jpg';
import bannerimg from '../Assesst/Banner-Slider_1.png';
import homeimg1 from '../Assesst/product-img-15.jpg'
import homeimg2 from '../Assesst/imglemon.jpeg'
import homeimg3 from '../Assesst/product-img10.jpg'
import homeimg4 from '../Assesst/product-img18.jpg'
import homeimg5 from '../Assesst/Guava1.jpeg'
import homeimg6 from '../Asesst/mango.jpg'
import homeimg7 from '../Asesst/cucumber.jpeg'
import homeimg8 from '../Assesst/papayya.png'
//import homeimg9 from '../Asesst/potato.jpg'
import homeimg10 from '../Assesst/product-img.jpg'
import homeimg11 from '../Assesst/Tomato1.jpeg'
import homeimg12 from '../Assesst/product-img11.jpg';
import { Carousel } from "react-bootstrap";
import Breakfast from './Breakfast';
import '../components/Home.css';
import { Link } from 'react-router-dom';

const Products = [
  { id: 1, name: "Apple", price: 100, image: homeimg1, rating: 3, label: '10%', },
  { id: 2, name: "Lemon", price: 30, image: homeimg2, rating: 4, },
  { id: 3, name: "Pineapple", price: 50, image: homeimg3, rating: 3, label: '8%' },
  { id: 4, name: "Banana", price: 10, image: homeimg4, rating: 2, },
  { id: 5, name: "Guava", price: 70, image: homeimg5, rating: 4, label: '15%' },
  { id: 6, name: "mango", price: 110, image: homeimg6, rating: 3, oldprice: '150' },
  { id: 7, name: "Cucumber", price: 80, image: homeimg7, rating: 2, },
  { id: 8, name: "papaya", price: 75, image: homeimg8, rating: 4, oldprice: "83" },
  //{ id: 9, name: "potato", price: 40, image: homeimg9, rating: 2, label: '10%' },
  { id: 10, name: "Betroot", price: 130, image: homeimg10, rating: 1, oldprice: '141' },
  { id: 11, name: "tomato", price: 45, image: homeimg11, rating: 5, },
  { id: 12, name: "watermelon", price: 50, image: homeimg12, rating: 5, label: '5%' },
]
const Home = () => {
  const { AddToCart,addToWishlist } = useContext(CartContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <>


       <Carousel >
          <Carousel.Item>
            <img className=' bike d-block w-100 py-3' src={bannerimg} alt='banner1' style={{borderRadius:"40px",}}/>

          </Carousel.Item>

          <Carousel.Item>
            <img className=' bike d-block w-100 py-3' src={bannerimg1} alt='bannerimg2' style={{borderRadius:"40px",}}/>
            <Carousel.Caption >
            <span className='badge bg-warning text-dark'>Opening Sale Discount 50%</span>
            <h3 className='text-dark'>Supermarket for Fresh grocery</h3>
            <p className="text-dark">Gonvenient shopping with great Discount</p>
            <Link to='/Breakfast' className='shop-link'>Shop now</Link>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img className='bike d-block w-100 py-3' src={bannerimg2} alt='banner3' style={{borderRadius:"40px",}}/>
            <Carousel.Caption >
              <span className='badge bg-warning text-dark'>Free Shipping</span>
              <h3 className='text-dark'>Free Shipping on Orders over $100</h3>
              <p className='text-dark'>Free shipping for first-time customer only after promotion and discount are applied</p>
              <Link to='/Product' className='shop-link'>Shop now</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       
      <div className="container">
 
        {/*carousel*/}
        
       

       
        {/*Products*/}
        <Breakfast />
        <Slider {...settings}>
          {Products.map((item) => (
            <div key={item.id} className="p-2">
              <div className="card text-center">
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
                    className="card-img-top py-4"
                    alt={item.name}
                    style={{ height: '180px', objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <strong>₹{item.price}</strong>{' '}
                    {item.oldprice && (
                      <span className="text-muted text-decoration-line-through">
                        ₹{item.oldprice}
                      </span>
                    )}
                  </p>
                  <div>{renderStars(item.rating)}</div>
                  <i className=" heart bi bi-heart-fill" onClick={()=>addToWishlist(item)}></i>
                  <button className="btn btn-success btn-sm" onClick={() => AddToCart(item)}>+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home