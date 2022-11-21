import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import WishListIcon from "./WishListIcon";
const ProductItem2 = ({product}) => {
  const { addItem, items } = useCart();
  return (
    <>
        <div className="shop-item">
          <div className="item-img">
            <img src={product.img} alt="" />
          </div>
          <div className="item-info">
            <h3>{product.title}</h3>
            <h4>
              Price: <span>{product.price}$</span>
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
            <div className=" d-flex justify-content-start align-items-center">
              <button
                onClick={() => {
                  addItem(product);
                  toast.success("Product was added successfully");
                }}
                className="button btn btn-success m-1"
                disabled={items.find((a) => a.id === product.id)}
              >
                {
              items.find((a) => a.id === product.id) ? ('Added to cart') : ('Add to cart')
            } <i class="fa-solid fa-basket-shopping"></i>
              </button>

             <WishListIcon productItem={product}/>
            </div>
          </div>
      </div>
    </>
  );
};

export default ProductItem2;
