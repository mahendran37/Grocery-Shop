import React,{createContext,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItem,setCartItem] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    //cart item
    const AddToCart =(product)=>{
        setCartItem([...cartItem,product]);
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
    return(
        <div>
            <CartContext.Provider value={{cartItem,AddToCart,wishlist,addToWishlist,setWishlist,removeFromWishlist,removeFromCartItem}}>{children}</CartContext.Provider>
        </div>
    )
}

