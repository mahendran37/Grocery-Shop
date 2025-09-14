import React, { useContext } from 'react'
import { CartContext } from './CartProvider'
import cadimg1 from '../Assesst/product-img-1.jpg'
import cadimg2 from '../Assesst/product-img-2.jpg'
import cadimg3 from '../Assesst/product-img-3.jpg'
import cadimg4 from '../Assesst/product-img-4.jpg'
import cadimg5 from '../Assesst/product-img-5.jpg'
import cadimg6 from '../Assesst/product-img-6.jpg'
import cadimg7 from '../Assesst/product-img-7.jpg'
import cadimg8 from '../Assesst/product-img-8.jpg'
import cadimg9 from '../Assesst/product-img-9.jpg'
import cadimg10 from '../Assesst/product-img-10.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const vegetable = [
  { id: 1, name: 'Buva sev', price: 35, oldprice: 42, rating: 4, image: cadimg1, },
  { id: 2, name: 'Nutrion biscut', price: 25, oldprice: 32, image: cadimg2, rating: 2, },
  { id: 3, name: '5Star', price: 80, oldprice: 95, label: '13%', image: cadimg3, rating: 2, },
  { id: 4, name: 'Onion Favour&Potato', price: 45, label: '10%', image: cadimg4, rating: 3, },
  { id: 5, name: 'Salted Instant Popcorn', price: 33, label: 'Hot', oldprice: 41, image: cadimg5, rating: 3, },

]

const snacks = [
  { id: 6, name: 'Blueberry Greak Yogurt', price: 50, label: '15%', image: cadimg6, rating: 3, },
  { id: 7, name: 'Britania Cheeses Slice', price: 28, oldprice: 24, image: cadimg7, rating: 3, },
  { id: 9, name: 'Kellogs Original Cereals', price: 27, oldprice: 42, label: 'Hot', image: cadimg8, rating: 3, },
  { id: 10, name: 'Slurrp Millet Chocolate', price: 32, label: '12%', image: cadimg9, rating: 4, },
  { id: 11, name: 'Amul Butter 500g', price: 28, oldprice: 33, image: cadimg10, rating: 3, },
]

const Breakfast = () => {
  const { AddToCart,addToWishlist } = useContext(CartContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
    <div className='breakfast-sction'>
      <div className="container-fluid">
        <Slider {...settings}>
          {vegetable.map((item) => (
            <div key={item.id} className="p-2">
              <div className="card text-center" style={{ height: '340px' }}>
                <div style={{ position: 'relative' }}>
                  {item.label && (
                    <span
                      className="badge bg-danger"
                      style={{ position: 'absolute', top: 10, left: '10px' }}
                    >
                      {item.label}
                    </span>
                  )}
                  <img
                    src={item.image}
                    className="card-img-top"
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

        <Slider {...settings}>
          {snacks.map((item) => (
            <div key={item.id} className="p-2">
              <div className="card text-center" style={{ height: '340px' }}>
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
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '180px', objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{}}>{item.name}</h5>
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

      </div >
    </div>

  );
};

export default Breakfast;
