import React,{createContext,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItem,setCartItem] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const AddToCart =(product)=>{
        setCartItem([...cartItem,product]);
    }
    return(
        <div>
            <CartContext.Provider value={{cartItem,AddToCart,searchTerm,setSearchTerm}}>{children}</CartContext.Provider>
        </div>
    )
}

