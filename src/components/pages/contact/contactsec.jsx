import React from "react";
import leaf from "../../assets/img/bg5.png";
import { useTranslation } from "react-i18next";
const Contactsec = () => {
  const { t } = useTranslation();
  return (
    <div className="contactsec1">
      <div className="overlay">
        <div className="contact-main">
          <img src={leaf} alt="" />
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 d-flex justify-content-center mb-3">
                <h1>{t('contact.1')}</h1>
              </div>
              <div className="col-lg-5">
                <div className="inputs">
                  <input type="text" placeholder={t('contact.2')} />
                  <input type="text" placeholder={t('contact.3')}  />
                  <input type="text" placeholder={t('contact.4')}  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text-area">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={t('contact.5')} 
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <button className="touch">{t('contact.6')} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsec;
