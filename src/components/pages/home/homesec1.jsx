import React from "react";
import man from "../../assets/img/man.png";
import fix from "../../assets/img/fix.png";
import tomato from "../../assets/img/tomato.png";
import { useTranslation } from "react-i18next";
const Homesec1 = () => {
  const { t } = useTranslation();
  return (
    <div className="homesec1">
      <div className="over">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left">
                <p>{t("home1.0")}</p>
                <h1>
                  {t("home1.1")}
                  <br />
                  {t("home1.2")}
                  <span> {t("home1.3")}</span>
                </h1>
                <h5>{t("home1.4")}</h5>
                <button>Shop Now</button>
                <img src={tomato} className="tmt" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right">
                <img src={man} className="man" alt="" />
                <img src={fix} className="fix" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec1;
