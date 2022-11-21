import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Aboutsec3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="aboutsec3" >
      <div className="about-main" data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 h-100">
              <div className="email-bg">
                <div className="txt-left">
                  <p>DON’T MISS OUR DEALS.</p>
                  <h1>
                    EXCLUSIVE
                    <br /> OFFERS & SALE
                  </h1>
                  <h6>Sign up and get a voucher of worth $250.00</h6>
                </div>
                <div className="form">
                  <input type="text" placeholder="Your email address" />
                  <button>Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsec3;
