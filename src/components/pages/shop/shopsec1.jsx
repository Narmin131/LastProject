import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Shopsec1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { t } = useTranslation();
  return (
    <>
      <div className="shopsec1">
        <div className="shop-main" data-aos="flip-down">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <p>{t("shop.1")}</p>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <h2>
                  {t("shop.2")} <br /> {t("shop.3")}
                </h2>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <button>{t("shop.4")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopsec1;
