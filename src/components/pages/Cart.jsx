import React, { useEffect } from "react";
import Banner from "./common/Banner";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
const Cart = () => {
  const { t } = useTranslation();
  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } =
    useCart();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Banner title={t("cart.0")} />
      {isEmpty ? (
        <div className="cart d-flex justify-content-center">
          <h3 style={{ fontWeight: "bold" }}>Your cart is empty</h3>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 ">
                  <table>
                    <thead>
                      <tr data-aos="fade-right">
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
                            <tr key={item.id} data-aos="fade-left">
                              <td>
                                <i
                                  class="fa-solid fa-xmark"
                                  onClick={() => removeItem(item.id)}
                                ></i>
                              </td>
                              <td>
                                <img src={item.img} alt="" />
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
                <div className="col-lg-12">
                  <div className="total d-flex justify-content-between" style={{ padding: ' 20px 70px ' , fontWeight:'bold'}}>
                    <h3 style={{fontWeight:'bold', padding:"0", margin:'0'}}>Subtotal : {cartTotal}$</h3>
                    <button className="btn btn-success" style={{fontWeight:'bold'}}>Buy Now</button>
                  </div>
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
