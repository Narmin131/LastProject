import React from "react";
import Banner from "./common/Banner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const Signin = ({ user, setUser }) => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = (e) => {
    e.preventDefault();
    setIsLoggedin(true);
    const userData = {
      name,
      password,
    };

    localStorage.setItem("token-info", JSON.stringify(userData));
    console.log(name, password, isLoggedin);
  };

  
  const logOut = () => {
    localStorage.removeItem("token-info");
    setIsLoggedin(false);
  };

  // const submitRegister = (e) => {
  //   e.preventDefault();
  //   if (admin) {
  //     console.log(admin);
  //     console.log(user);

  //     localStorage.setItem("token-info", JSON.stringify(admin));
  //   } else {
  //     toast.error("Username or password is incorrect");
  //     console.log(admin);
  //     console.log(user);
  //   }
  // };

  // const logOut = () => {
  //   localStorage.removeItem("token-info");
  //   history("/login");
  // };

  return (
    <>
      <Banner title={t("register.0")} />
      <div className="register">
        <div className="register-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {!isLoggedin ? (
                  <form className="form" >
                    <h2>Login to our site</h2>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="Name"
                    />
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      placeholder="Password"
                    />
                    <div className="bottom">
                      <button type="submit" onClick={login}>Sign In</button>
                    </div>
                  </form>
                ) : (
                  <div className="d-flex align-items-center flex-column">
                    <h2>Welcome <i>{name}</i></h2>
                    <button onClick={logOut} className="btn btn-danger">
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
