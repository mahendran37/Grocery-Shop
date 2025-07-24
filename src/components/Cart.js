import React, { useContext } from 'react'
import { CartContext } from './CartProvider'

const Cart = () => {
    const { cartItem } = useContext(CartContext);

    //total price calculation
    const totalprice = cartItem.reduce((acc, product) => acc + product.price, 0);
    return (
        <>
            <div className='container'>
                <h2>Cart</h2>
                <p>total Items: {cartItem.length}</p>
                <h2 className='text-dark text-center py-4'>Cart Page</h2>
                {cartItem.length === 0 ?
                    (<p className='text-secondary'>No items in a Cart</p>) :

                    (cartItem.map((item, index) => {
                        return (
                            <div className='row'>
                                <div className=' col-12 col-sm-7 col-md-6 col-lg-4 mx-auto my-4' key={index}>
                                    <div className='pro-card'>
                                        <img src={item.image} alt='cartImg' className=' mx-auto my-3' width='150px' height='200px' />
                                        <h4 className='text-center'>{item.name}</h4>
                                        <p className='text-center'>₹{item.price}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    }))}
                <h3>Total Price: ₹{totalprice}</h3>

            </div>
        </>
    );
}

export default Cart