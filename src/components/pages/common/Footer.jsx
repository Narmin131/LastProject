import React from 'react'
import payment from "../../assets/img/payment.png"


const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-4 col-md-4 col-12 pb-5 pt-5">
            <ul className='links'>
              <li>
                <i class="fa-solid fa-envelope-open-text"></i>
                <h2>Email <br /> <p>needhelp@Organia.com</p></h2>

              </li>
              <li>
                <i class="fa-solid fa-phone-volume"></i>
                <h2>Phone <br /><p>666 888 888</p></h2>

              </li>
              <li>
                <i class="fa-solid fa-map-location-dot"></i>
                <h2>Address <br /> <p>88 road, borklyn street, USA</p></h2>

              </li>
            </ul>
          </div>
          <div className="col-lg-4 bx pb-5 pt-5">
            <div className="avarage">
             <div className="img">
             <img  />
             </div>
              <h4>There are many variations of
                passages of lorem ipsum
                available.</h4>
              <div className="icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 pb-5 pt-5">
            <div className="right">
              <h3>CUSTOMER SERVICE</h3>
              <div className="all">
              <ul>
                <li>Contact Us</li>
                <li>Returns Policy</li>
                <li>Loyalty Program</li>
                <li>Warranty & Repair</li>
                <li>Shopping Cart</li>
              </ul>
              <ul>
                <li>Track Your Order</li>
                <li>Delivery Information</li>
                <li>Help & Faq</li>
                <li>My Account</li>
              </ul>
              </div>

            </div>
          </div>
          <div className="col-lg-12 bt">
            <div className="last">
              <h5>© Copyright 2021 by Themewar.com</h5>
              <img src={payment} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer