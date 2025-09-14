import React from "react";
import '../components/About.css';


const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Left Side - Contact Info */}
        <div className="col-lg-5">
          <h2 className="mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions about our products or services? Get in touch with us using the details below or send us a message through the form.
          </p>

          <div className="mb-3">
            <h5><i className="bi bi-office"></i> Address</h5>
            <p>123, Main Street, Chennai - 600001</p>
          </div>

          <div className="mb-3">
            <h5><i className="bi bi-phone"></i> Phone</h5>
            <p>+91 98765 43210</p>
          </div>

          <div className="mb-3">
            <h5><i className="bi bi-Email"></i> Email</h5>
            <p>support@shopgrid.com</p>
          </div>

          <div className="d-flex gap-3">
            <a href="/" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
            <a href="/" className="text-dark fs-4"><i className="bi bi-twitter"></i></a>
            <a href="/" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-lg-7">
          <div className="card shadow-sm p-4 rounded-3">
            <h4 className="mb-4">Send a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;