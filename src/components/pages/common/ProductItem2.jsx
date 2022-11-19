import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import addWishList from "../../store/actions/AddWishList";
import { useDispatch, useSelector } from "react-redux";
const ProductItem2 = (product) => {
  const { addItem } = useCart();

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <div className="col-lg-6 p-3">
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
                  addItem(product.product);
                  toast.success("Product was added successfully");
                }}
                className="button btn btn-success m-1"
              >
                Add to card <i class="fa-solid fa-basket-shopping"></i>
              </button>

              <button
                className="btn btn-primary btn2 m-1"
                onClick={() => {
                  addWishList(product, wishlist, dispatch);
                  console.log("salam");
                }}
              >
                add wish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem2;
