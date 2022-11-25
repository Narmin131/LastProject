import React from "react";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import WishListIcon from "./WishListIcon";
const ProductItem = ({ product }) => {
  const { addItem, items } = useCart();
  const { t } = useTranslation();
  return (
    <div className="box" key={product.id}>
      <div className="box-img">
        <img src={product.img} alt="" />
        <span>Fresh</span>
      </div>
      <div className="box-content">
        <h4>{t(product.title)}</h4>
        <h6>{product.price}$</h6>
        <div className="d-flex">
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

          <WishListIcon productItem={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
