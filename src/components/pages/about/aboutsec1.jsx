import React from "react";
import img from "../../assets/img/about1.png";

const aboutsec1 = () => {
  return (
    <div className="aboutsec1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-img2">
              <img src={img} alt=''/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right2">
              <p>ONLY ORGANIC</p>
              <h2>The Best Choice For</h2>
              <h2>your Business.</h2>
              <h6>
                Sumptuous, filling, and temptingly healthy, our Biona <br />{" "}
                Organic Granola with Wild Berries is just the thing to get you
                out of bed.
              </h6>
              <span>
                <i class="fa-solid fa-check"></i>100% Natural
              </span>
              <br />
              <span>
                <i class="fa-solid fa-check"></i>Increases resistance
              </span>
              <br />
              <span>
                <i class="fa-solid fa-check"></i>No growth hormones are used
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutsec1;
