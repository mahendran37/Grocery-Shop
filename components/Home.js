import React, { useContext } from 'react';
import Footer from './Footer';
import About from './About';
import { CartContext } from './CartProvider';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerimg1 from '../Assesst/Banner-Slider_1.png';
import bannerimg2 from '../Assesst/Banner-Slider_2.png';
import bannerimg from '../Assesst/Banner-Slider.png';
import homeimg1 from '../Asesst/Apple.jpg'
import homeimg2 from '../Asesst/carrot.jpg'
import homeimg3 from '../Assesst/product-img10.jpg'
import homeimg4 from '../Assesst/product-img18.jpg'
import homeimg5 from '../Asesst/Guava.jpg'
import homeimg6 from '../Asesst/mango.jpg'
import homeimg7 from '../Asesst/onion.jpg'
import homeimg8 from '../Asesst/papaya.jpg'
import homeimg9 from '../Asesst/potato.jpg'
import homeimg10 from '../Assesst/product-img.jpg'
import homeimg11 from '../Asesst/tomato.jpg'
import homeimg12 from '../Assesst/product-img11.jpg';
import { Carousel } from "react-bootstrap";
import Breakfast from './Breakfast';
import '../components/Home.css';

const Products = [
  { id: 1, name: "Apple", price: 100, image: homeimg1,rating: 3,label:'10%', },
  { id: 2, name: "carrot", price: 30, image: homeimg2, rating:4,},
  { id: 3, name: "cauliflower", price: 50, image: homeimg3,rating:3,label:'8%' },
  { id: 4, name: "egg", price: 10, image: homeimg4,rating:2, },
  { id: 5, name: "Guava", price: 70, image: homeimg5 ,rating:4, label:'15%'},
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
    <div style={{backgroundColor:'rgba(202, 225, 230, 0.38)'}} className="container">

      {/*carousel*/}

      <Carousel >
        <Carousel.Item>
          <img className=' bike d-block w-100 py-3' src={bannerimg} alt='banner1'/>
        </Carousel.Item>
        <Carousel.Item>
          <img className=' bike d-block w-100 py-3' src={bannerimg1} alt='bannerimg2' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='bike d-block w-100 py-3'src={bannerimg2} alt='banner3'  />
        </Carousel.Item>
      </Carousel>

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
    </div>
    <About/>
    <Footer/>
    </>
  );
};

export default Home