import { toast } from "react-toastify";

const addWishList = (product, wishlist, dispatch) => {
  const a = wishlist.find((b) => b.id === product.id);
  if (a) {
    dispatch({ type: "REMOVE_WISHLIST", payload: product.id });
    toast.warning("Product removed from wishlist");
  } else {
    dispatch({ type: "ADD_WISHLIST", payload: product });
    toast.success("Product successfully added to wishlist");
  }
};

export default addWishList;
