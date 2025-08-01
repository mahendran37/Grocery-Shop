import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./components/CartProvider";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Signup from "./components/Signup";
function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Product" element={<Product />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route path="Signup"element={<Signup/>}/>
                    </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;