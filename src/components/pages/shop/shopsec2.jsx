import React from "react";
import ProductItem2 from "../common/ProductItem2";
import shopData from "../../data/data3";

const Shopsec2 = () => {
  return (
    <div className="shop-products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <h1> Our Products </h1>
          </div>

          {shopData.shop.map((item, index) => {
            return (
              <ProductItem2
                title={item.title}
                img={item.img}
                price={item.price}
                product={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shopsec2;
