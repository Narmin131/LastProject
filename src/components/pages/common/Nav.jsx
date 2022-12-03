import React from "react";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";
import Lang from "./Lang";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Nav = () => {
  const { items } = useCart();
  const wishlist = useSelector((state) => state.wishlist);
  const { t } = useTranslation();
  const history = useNavigate();
  const handleLogoutClick = () => {
    localStorage.clear();
    console.log("salam");
    history("/login");
  };

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const authButton = () => {
    if (getEmail === null) {
      return (
        <>
          <NavLink to="/login">
            <i class="fa-solid fa-user"> </i>
          </NavLink>
        </>
      );
    } else {
      return (
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {getEmail}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" onClick={handleLogoutClick}>
              Logout
            </a>
          </div>
        </div>
      );
    }
  };

  console.log(getEmail);
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-1 ">
              <div className="left">
                <p>{t("nav.0")}</p>
              </div>
            </div>
            <div className="col-lg-6 p-1">
              <div className="icons">
                <Lang />
                <Theme />
              </div>
            </div>
            <div className="line"></div>
            <div className="col-lg-9 pt-4 pb-4">
              <div className="logo">
                <img alt="" />
              </div>
            </div>

            <div className="col-lg-3 pt-4 pb-4 px-0">
              <div className="login">
                {authButton()}
                <div className="wishlistLength">
                  <span>{wishlist.length}</span>
                  <NavLink to="/wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </NavLink>
                </div>
                <div className="wishlistLength">
                  <span>{items.length}</span>
                  <NavLink to="/cart">
                    <i class="fa-solid fa-basket-shopping"></i>
                  </NavLink>
                </div>
                <NavLink to="/search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <div className="header-main">
          <div className="container-fluid  h-100">
            <div className="row h-100">
              <div className="col-lg-3 p-0 h-100">
                <div className="category">
                  <h2>
                    <i class="fa-solid fa-bars"></i>
                    {t("nav.3")}
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 h-100">
                <ul className="links">
                  <li>
                    <NavLink to="/">{t("nav.4")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">{t("nav.5")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">{t("nav.6")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">{t("nav.7")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">{t("nav.8")}</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="contact">
                  <div className="txt">
                    <h4>+90 157 058 4567</h4>
                    <h6>{t("nav.9")}</h6>
                  </div>
                  <i class="fa-solid fa-headphones-simple"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
