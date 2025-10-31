import React,{createContext,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItem,setCartItem] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    //cart item
    const AddToCart = (product) => {
    setCartItem((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // if product already in cart, just increase qty
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // if product not in cart, add with qty = 1
      return [...prev, { ...product, qty: 1 }];
    });
  };
    //remove card
    const removeFromCartItem = (id) =>{
        setCartItem(cartItem.filter((item)=>item.id !== id));
    };

    //wishlist 
    const addToWishlist = (product) =>{
       setWishlist((prev)=>[...prev,product])
    };

    //remove wishlist 
    const removeFromWishlist = (id) =>{
        setWishlist(wishlist.filter((item) =>item.id !== id));
    };

    const increaseQty = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };
    return(
        <div>
            <CartContext.Provider value={{cartItem,AddToCart,wishlist,addToWishlist,setWishlist,removeFromWishlist,removeFromCartItem,increaseQty,decreaseQty}}>{children}</CartContext.Provider>
        </div>
    )
}

