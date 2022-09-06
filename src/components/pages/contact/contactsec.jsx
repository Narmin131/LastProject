import React from "react";
import leaf from "../../assets/img/bg5.png";

const contactsec = () => {
  return (
    <div className="contactsec1">
      <div className="overlay">
        <div className="contact-main">
          <img src={leaf} />
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 d-flex justify-content-center mb-3">
                <h1>DROP US A LINE</h1>
              </div>
              <div className="col-lg-5">
                <div className="inputs">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Your Email" />
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text-area">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message Here"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <button className="touch">Get in touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactsec;
