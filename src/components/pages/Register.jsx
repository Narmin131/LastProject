import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "./common/Banner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Register = ({user}) => {
  const { t } = useTranslation();
  const history = useNavigate()
  const logOut = () =>{
    history("/login")
  }
  return (
    <>
      <Banner title={t("register.0")} />
      <div className="register">
        <div className="register-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 align-items-center d-flex jsutify-content-center flex-column">
                  <h2>Welcome {user.username}</h2>
                  <button onClick={logOut} className="btn btn-danger ">Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
