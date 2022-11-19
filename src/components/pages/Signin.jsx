import React from "react";
import Banner from "./common/Banner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Signin = ({user, setUser}) => {
  const { t } = useTranslation();

  const history = useNavigate();

  const submitRegister = (e) => {
    e.preventDefault();
    console.log(user);
    history("/register");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Banner title={t("register.0")} />
      <div className="register">
        <div className="register-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form className="form" onSubmit={submitRegister}>
                  <h2>Login to our site</h2>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    placeholder="Your password"
                    name="password"
                    onChange={handleChange}
                  />
                  <div className="bottom">
                    <button>Sign In</button>
                    {/* <p>
                      Doesn't have an account?
                      <NavLink to="/register">
                        Sign Up
                      </NavLink>
                    </p> */}
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
