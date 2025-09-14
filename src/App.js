import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Header from "./components/Header";
import Product from "./components/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./components/CartProvider";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Signup from "./components/Signup";
import Wishlist from "./components/Wishlist";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500)
    })
    return (
        <>
            {loading ? (<Loading />):(
            <CartProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Product" element={<Product />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route path="Signup" element={<Signup />} />
                        <Route path="/Wishlist" element={<Wishlist />} />
                        <Route path="Contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        )}
        </>
    );
}

export default App;