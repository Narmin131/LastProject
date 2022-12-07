import React from "react";
import { useDispatch, useSelector } from "react-redux";
import addWishList from "../../store/actions/AddWishList";

const WishListIcon = ({ productItem }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <button className="btn btn-primary button2" onClick={() => addWishList(productItem, wishlist, dispatch)}>
     
      {wishlist.find((selectedProduct) => selectedProduct.id === productItem.id) ? (
         <i className="fa-solid fa-heart"></i>
      ) : (
         <i className="fa-regular fa-heart"></i>
      )}
      
    </button>
  );
};

export default WishListIcon;