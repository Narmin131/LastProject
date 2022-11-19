const SelectedWishList = localStorage.getItem("Wishlist")
  ? JSON.parse(localStorage.getItem("Wishlist"))
  : [];

const wishlist = (state = SelectedWishList, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      return (state = [...state, action.payload]);

    case "REMOVE_WISHLIST":
      return (state = state.filter((product) => product.id !== action.payload));
    default:
      return state;
  }
};


export default wishlist