import React,{useContext} from 'react';
import { CartContext } from './CartProvider';
import cardimg1 from '../Assesst/atta-rice-dal.jpg'
import cardimg2 from '../Assesst/baby-care.jpg'
import cardimg3 from '../Assesst/bakery-biscuits.jpg'
import cardimg4 from '../Assesst/chicken-meat-fish.jpg'
import cardimg5 from '../Assesst/cleaning-essentials.jpg'
import cardimg6 from '../Assesst/cold-drinks-juices.jpg'
import cardimg7 from '../Assesst/dairy-bread-eggs.jpg'
import cardimg8 from '../Assesst/fruits-vegetables.jpg'
import cardimg9 from '../Assesst/instant-food.jpg';
import cardimg10 from '../Assesst/pet-care.jpg';
import cardimg11 from '../Assesst/snack-munchies.jpg';
import cardimg12 from '../Assesst/tea-coffee-drinks.jpg';
import Breakfast from './Breakfast';
import Slider from 'react-slick';
import './Header.css';
const Products = [
  { id: 1, name: "Atta & rice", price:500,oldPrice:550,label:'sale',image: cardimg1,rating:4},
  { id: 2, name: "Baby care",price:100,label:'14%', image: cardimg2 ,rating:4},
  { id: 3, name: "Biscuits",price:30, oldPrice:45,image: cardimg3,rating:3 },
  { id: 4, name: "chicken meat & fish",price:250,oldPrice:320,label:'Hot', image: cardimg4,rating:3.5 },
  { id: 5, name: "Cleaning Essential",price:200, image: cardimg5,rating:3 },
  { id: 6, name: "Cool Drinks",price:50, image: cardimg6,rating:2 },
  { id: 7, name: "Bread & Egg",price:40, image: cardimg7,rating:4 },
  { id: 8, name: "Fruits & vegetales",price:120,label:'10%', image: cardimg8,rating:3},
  { id: 9, name: "Instant food",  price:90, image: cardimg9,rating:2 },
  { id: 10, name: "Pet care", price:210,image: cardimg10,rating:3 },
  { id: 11, name: "Snack munchies",price:30, image: cardimg11,rating:2 },
  { id: 11, name: "Tea & coffee",price:50, image: cardimg12,rating:3 },
]

const Product = () => {
  const { AddToCart,addToWishlist} = useContext(CartContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    swipe:true,
    touchMove:true,
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
    <div className="container my-4">
      <h3>Fruits & Vegetables</h3>
      <p>Eat fresh, stay healthy</p>
      <Slider {...settings}>
        {Products.map((item) => (
          <div key={item.id} className="p-2">
            <div className="card text-center" style={{height:'340px',position:"relative",}}>
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
                  style={{ height: '130px', objectFit: 'contain' }}
                />
              </div>
               <div className="card-body" >
                <h5 className="card-title"style={{marginTop:'30px'}} >{item.name}</h5>
                <p className="card-text">
                  <strong>₹{item.price}</strong>{' '}
                  {item.oldPrice && (
                    <span className="text-muted text-decoration-line-through">
                      ₹{item.oldPrice}
                    </span>
                  )}
                </p>
                <i className=" heart bi bi-heart-fill" onClick={()=>addToWishlist(item)}></i>
                <div children='rating'>{renderStars(item.rating)}</div>
                <button className="btn btn-success btn-sm" onClick={()=>AddToCart(item)} >+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Breakfast/>
    </div>
  );
};

export default Product
