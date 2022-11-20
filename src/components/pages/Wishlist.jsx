import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem2 from "./common/ProductItem2";
import Banner from "../pages/common/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Banner title={t("about.1")} />
      {wishlist.length !==0 ? (
        <div className="shop-products">
          <div className="container">
            <div className="row">
              {wishlist?.map((item, index) => (
                <div
                  className="col-lg-6 p-4"
                  key={index}
                  data-aos="zoom-out-up"
                >
                  <ProductItem2 product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="cart d-flex justify-content-center">
          <h3>Your wishlist is empty</h3>
        </div>
      )}
    </>
  );
};

export default WishList;
