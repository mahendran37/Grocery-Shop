import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(CartContext);

  return (
    <>
    <div className='container '>
        <h2>wishlist</h2>
        <p>total Items: {wishlist.length}</p>
        <h2 className='text-dark text-center py-4'>wishlist Page</h2>
        {wishlist.length === 0 ?
          <p className='text-secondary'>No items in a wishlist</p> :

          (wishlist.map((item,) => (           
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
                  <button className="btn btn-primary" onClick={()=>removeFromWishlist(item.id)}>Remove</button>
                </div>
              </div>
              </div>
            </div>
            </div>
          )))}

      </div>
    </>
  );
}

export default Wishlist;