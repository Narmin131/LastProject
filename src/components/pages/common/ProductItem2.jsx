import React from "react";
import { useCart } from "react-use-cart";

const ProductItem2 = (props) => {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-lg-6 p-3">
        <div className="shop-item">
          <div className="item-img">
            <img src={props.img} alt="" />
          </div>
          <div className="line"></div>
          <div className="item-info">
            <h3>{props.title}</h3>
            <h4>
              Price: <span>{props.price}$</span>
            </h4>
            <p>
              <i class="fa-solid fa-check"></i>100% Natural
            </p>
            <p>
              <i class="fa-solid fa-check"></i>Increases resistance
            </p>
            <p>
              <i class="fa-solid fa-check"></i>No growth hormones are used
            </p>
            <button onClick={() => addItem(props.product1)}>Add to card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem2;
