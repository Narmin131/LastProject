import React, {useEffect} from "react";
import ProductItem2 from "../common/ProductItem2";
import shopData from "../../data/data3";
import AOS from 'aos';
import "aos/dist/aos.css"

const Shopsec2 = () => {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <div className="shop-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <h1> Our Products </h1>
          </div>

          {shopData.shop.map((item, index) => {
            return (
             <div className="col-lg-6 p-4" data-aos="flip-up"
             data-aos-duration="1000">
               <ProductItem2
                title={item.title}
                img={item.img}
                price={item.price}
                product={item}
              />
             </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shopsec2;
