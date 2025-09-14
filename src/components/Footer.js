import React from "react";
import footerimg1 from '../Assesst/googleplay-btn.svg';
import footerimg2 from '../Assesst/appstore-btn.svg';
import footerimg3 from '../Asesst/visa.svg';
import footerimg4 from '../Asesst/paypal.svg';
import footerimg5 from '../Asesst/mastercard.svg';
import footerimg6 from '../Asesst/amazonpay.svg';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" pt-5 pb-" style={{backgroundColor:'#eeeeeeff',color:"block",}}>
      <div className="container text-left text-md-start">
        <div className="row mb-4">
          {/* Categories */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-unstyled">
              <li>Vegetables & Fruits</li>
              <li>Breakfast & instant food</li>
              <li>Bakery & Biscuits</li>
              <li>Atta, rice & dal</li>
              <li>Sauces & spreads</li>
              <li>Organic & gourmet</li>
              <li>Baby care</li>
              <li>Cleaning essentials</li>
              <li>Personal care</li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Get deliveries with FreshCart</h5>
            <img src={footerimg1} alt="App Store" maxwidth="120" className="m-1 store-logo" />
            <img src={footerimg2} alt="Play Store" maxwidth="120" className="m-1 store-logo" />  {/* Freshcart Programs */}
            <h5 className="fw-bold py-3">Freshcart programs</h5>
            <ul className="list-unstyled">
              <li>Gift Cards</li>
              <li>Promos & Coupons</li>
              <li>Freshcart Ads</li>
              <li>Careers</li>
            </ul>
          
          </div>
                   
          {/* Get to know us */}
          <div className="col-md-2 mb-3">
            <h5 className="fw-bold">Get to know us</h5>
            <ul className="list-unstyled">
              <li>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Our Value</li>
            </ul>
          </div>

          {/* For Consumers */}
          <div className="col-md-2">
            <h5 className="fw-bold">For Consumers</h5>
            <ul className="list-unstyled">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Product Returns</li>
              <li>FAQ</li>
              <li>Shop Checkout</li>
            </ul>
          </div>
               
               <hr className="bg-light"/>
         


          {/* App Store & Payment */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          
            <div className="mb-2 mb-md-0">
              <span className="me-2">We accept :</span>
              <img src={footerimg3} alt="Amazon Pay" width="40" className="me-1 payment-icon" />
              <img src={footerimg4} alt="Mastercard" width="40" className="me-1 payment-icon" />
              <img src={footerimg5} alt="PayPal" width="40" className="me-1 payment-icon" />
              <img src={footerimg6} alt="Visa" width="40" className="me-1 payment-icon" />
            </div>
          </div>
        </div>

        <hr />

        {/* Bottom bar */}
       
          <div className="text-center">
            <p className="tmb-0">
              Designed and Developed by <strong>MAHENDRAN</strong>
            </p>
          </div>
          <div className="d-flex justify-content-center mt-2 mt-md-0 social-icons">
            <i className="bi bi-facebook me-3"></i>
            <i className="bi bi-whatsapp me-3"></i>
            <i className="bi bi-instagram me-3"></i>
          </div>
           {/* Become a Shopper */}
      </div>
    </footer>
  );
}

export default Footer;
