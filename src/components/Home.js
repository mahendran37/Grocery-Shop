import React, { useContext } from 'react';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { CartContext } from './CartProvider';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import modelimg from '../Assesst/modalgirl_img.jpg';
import homie from '../Assesst/home-img.jpg';
import Fruit from '../Assesst/Fruit-VitaminD.webp';
import bannerimg1 from '../Assesst/Banner-Slider_1.png';
import bannerimg2 from '../Assesst/Banner-Slider_2.png';
import bannerimg from '../Assesst/Banner-Slider.png';
import homeimg1 from '../Asesst/Apple.jpg'
import homeimg2 from '../Assesst/imglemon.jpeg'
import homeimg3 from '../Assesst/product-img10.jpg'
import homeimg4 from '../Assesst/product-img18.jpg'
import homeimg5 from '../Assesst/Guava1.jpeg'
import homeimg6 from '../Asesst/mango.jpg'
import homeimg7 from '../Asesst/cucumber.jpeg'
import homeimg8 from '../Assesst/papayya.png'
import homeimg9 from '../Asesst/potato.jpg'
import homeimg10 from '../Assesst/product-img.jpg'
import homeimg11 from '../Assesst/Tomato1.jpeg'
import homeimg12 from '../Assesst/product-img11.jpg';
import { Carousel } from "react-bootstrap";
import Breakfast from './Breakfast';
import '../components/Home.css';

const Products = [
  { id: 1, name: "Apple", price: 100, image: homeimg1, rating: 3, label: '10%', },
  { id: 2, name: "Lemon", price: 30, image: homeimg2, rating: 4, },
  { id: 3, name: "Pineapple", price: 50, image: homeimg3, rating: 3, label: '8%' },
  { id: 4, name: "Banana", price: 10, image: homeimg4, rating: 2, },
  { id: 5, name: "Guava", price: 70, image: homeimg5, rating: 4, label: '15%' },
  { id: 6, name: "mango", price: 110, image: homeimg6, rating: 3, oldprice: '150' },
  { id: 7, name: "Cucumber", price: 80, image: homeimg7, rating: 2, },
  { id: 8, name: "papaya", price: 75, image: homeimg8, rating: 4, oldprice: "83" },
  { id: 9, name: "potato", price: 40, image: homeimg9, rating: 2, label: '10%' },
  { id: 10, name: "Betroot", price: 130, image: homeimg10, rating: 1, oldprice: '141' },
  { id: 11, name: "tomato", price: 45, image: homeimg11, rating: 5, },
  { id: 12, name: "watermelon", price: 50, image: homeimg12, rating: 5, label: '5%' },
]
const Home = () => {
  const { AddToCart } = useContext(CartContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
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
      <div style={{ backgroundColor: 'rgba(202,225,230,0.2)' }} className="container">

        {/*carousel*/}

        <Carousel >
          <Carousel.Item>
            <img className=' bike d-block w-100 py-3' src={bannerimg} alt='banner1' />
          </Carousel.Item>
          <Carousel.Item>
            <img className=' bike d-block w-100 py-3' src={bannerimg1} alt='bannerimg2' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='bike d-block w-100 py-3' src={bannerimg2} alt='banner3' />
          </Carousel.Item>
        </Carousel>

        {/*Products*/}
        
          <div className='row'>
            <div className='col-12 col-md-6 mb-3 mb-lg-0'>
              <div className='card my-3 position-relative'>
                <img src={modelimg} alt='model' />
                <div className='position-absolute bottom-0 start-0 p-3'>
                  <h3 className='fw-bold mb-1'style={{fontSize:"40px",color:'white',fontFamily:'sans-serif',}}>Fruits and Vegetables</h3>
                  <p className='mb-4 fw-bold'style={{color:"pink"}}>Get up to 30% offer </p>
                  <button className='btn btn-primary fw-bold'>Shop Now</button>
                </div>
              </div>
            </div>
            <div className='col-lg-6 py-3'>
              <img src={homie} alt='Homie' style={{maxWidth:"100%",borderRadius:"10px",}}  />
              <img src={Fruit} alt='Fruit' style={{maxWidth:"100%",borderRadius:'15px',}} className='py-2'/>
              </div>
          </div>

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
                  <button className="btn btn-success btn-sm" onClick={() => AddToCart(item)}>+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Contact/>
      <About />
      <Footer />
    </>
  );
};

export default Home