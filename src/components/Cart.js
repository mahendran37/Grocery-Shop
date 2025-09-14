import React, { useContext } from 'react'
import { CartContext } from './CartProvider'

const Cart = () => {
  const { cartItem,removeFromCartItem} = useContext(CartContext);
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

  //total price calculation
  const totalprice = cartItem.reduce((acc, product) => acc + product.price, 0);
  return (
    <>
      <div className='container '>
        <h2>Cart</h2>
        <p>total Items: {cartItem.length}</p>
        <h2 className='text-dark text-center py-4'>Cart Page</h2>
        {cartItem.length === 0 ?
          <p className='text-secondary'>No items in a Cart</p> :

          (cartItem.map((item,) => (           
            <div className='row'>
              <div className='cards col-12 col-sm-7 col-md-6 col-lg-4  '>
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

                  <button className="btn btn-primary" onClick={()=>removeFromCartItem(item.id)}>Remove</button>

                </div>
              </div>
              </div>
            </div>
            </div>
          )))}
        <h3>Total Price: ₹{totalprice}</h3>

      </div>
    </>
  );
}

export default Cart