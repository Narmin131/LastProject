import React from "react";
import payment from "../../assets/img/payment.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="pb-5">
      <div className="footer-main">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-4 col-md-4 col-12 pb-5 pt-5">
              <ul className="links">
                <li>
                  <i class="fa-solid fa-envelope-open-text"></i>
                  <h2>
                    {t("footer.0")} <br /> <p>{t("footer.1")} </p>
                  </h2>
                </li>
                <li>
                  <i class="fa-solid fa-phone-volume"></i>
                  <h2>
                    {t("footer.2")} <br />
                    <p>{t("footer.3")}</p>
                  </h2>
                </li>
                <li>
                  <i class="fa-solid fa-map-location-dot"></i>
                  <h2>
                    {t("footer.4")} <br /> <p>{t("footer.5")}</p>
                  </h2>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 bx pb-5 pt-5">
              <div className="avarage">
                <div className="img">
                  <img alt="" />
                </div>
                <h4>
                {t("footer.6")}
                </h4>
                <div className="icons">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pb-5 pt-5">
              <div className="right">
                <h3>{t("footer.7")}</h3>
                <div className="all">
                  <ul>
                    <li>{t("footer.8")}</li>
                    <li>{t("footer.9")}</li>
                    <li>{t("footer.10")}</li>
                    <li>{t("footer.11")}</li>
                    <li>{t("footer.12")}</li>
                  </ul>
                  <ul>
                    <li>{t("footer.13")}</li>
                    <li>{t("footer.14")}</li>
                    <li>{t("footer.15")}</li>
                    <li>{t("footer.16")}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12 bt">
              <div className="last">
                <h5>{t("footer.17")}</h5>
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
