import React from "react";
import Banner from "./common/Banner";
import img6 from "../assets/img/vegetable.png";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    // totalUniqueItems,
    totalItems,
    items,
    removeItem,
    updateItemQuantity,
    // emptyCart,
  } = useCart();
  return (
    <>
      <Banner title="Cart" />
      {isEmpty ? (
        <div className="cart d-flex justify-content-center">
          <h3>No data</h3>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 ">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>
                          <h1>PHOTO</h1>
                        </th>
                        <th>
                          <h1>PRODUCT NAME</h1>
                        </th>
                        <th>
                          <h1>PRICE</h1>
                        </th>
                        <th>
                          <h1>QUANTITY</h1>
                        </th>
                        <th>
                          <h1>TOTAL</h1>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <>
                            <tr key={item.id}>
                              <td>
                                <i
                                  class="fa-solid fa-xmark"
                                  onClick={() => removeItem(item.id)}
                                ></i>
                              </td>
                              <td>
                                <img src={item.img} />
                              </td>
                              <td>
                                <p>{item.title}</p>
                              </td>
                              <td>
                                <p>{item.price}$</p>
                              </td>
                              <td>
                                <div className="all-main2">
                                  <span
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                  >
                                    -
                                  </span>
                                  <span>{item.quantity}</span>
                                  <span
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td>
                                <p>{item.quantity * item.price}$</p>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
