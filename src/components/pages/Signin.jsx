import React from "react";
import Banner from "./common/Banner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {  useRef } from "react";
import { toast } from "react-toastify";
const Signin = ({ user, setUser }) => {
  const { t } = useTranslation();
  const history = useNavigate();
  const name = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.current.value === "Narmin" &&
      password.current.value === "narmin123"
    ) {
      localStorage.setItem("emailData", "Narmin");
      localStorage.setItem("passwordData", "narmin123");
      history("/");
      window.location.reload();
    }
    else{
      toast.warning('Please fill all the places')
    }
  };
  return (
    <>
      <Banner title={t("register.0")} />

      <div className="register">
        <div className="register-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form className="form" onSubmit={handleSubmit}>
                  <h2>Login to our site</h2>
                  <input type="text" ref={name} placeholder="Your Username" />
                  <input
                    type="password"
                    ref={password}
                    placeholder="Your Password"
                  />
                  <div className="bottom">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
