import React from 'react'
import { NavLink } from 'react-router-dom';
import Theme from './Theme';
import Lang from './Lang';
import { useTranslation } from 'react-i18next'

const Nav = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-1 ">
              <div className="left">
                <p>{t('nav.0')}</p>
              </div>
            </div>
            <div className="col-lg-6 p-1">
              <div className="icons">
                <Lang/>
                <Theme/>
              </div>
            </div>
            <div className="line"></div>
            <div className="col-lg-4 pt-4 pb-4">
              <div className="logo">
                <img alt="" />
              </div>
            </div>

            <div className="col-lg-6 pt-4 pb-4">
              <div className="search">
                <input type="text" placeholder={t('nav.1')} />
                <button>{t('nav.2')}<i class="fa-solid fa-chevron-down"></i></button>
              </div>
            </div>

            <div className="col-lg-2 pt-4 pb-4 px-0">
              <div className="login">
                <NavLink to='/register'><i class="fa-solid fa-user"></i></NavLink>
                <i class="fa-solid fa-heart"></i>
                <NavLink to='/cart'> <i class="fa-solid fa-basket-shopping"></i></NavLink>
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
                <h2><i class="fa-solid fa-bars"></i>{t('nav.3')}</h2>
              </div>
            </div>
            <div className="col-lg-6 h-100">
              <ul className='links'>
                <li><NavLink to='/' >{t('nav.4')}</NavLink></li>
                <li><NavLink to='/about' >{t('nav.5')}</NavLink></li>
                <li><NavLink to='/shop' >{t('nav.6')}</NavLink></li>
                <li><NavLink to='/blogs' >{t('nav.7')}</NavLink></li>
                <li><NavLink to='/contact' >{t('nav.8')}</NavLink></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="contact">
                <div className="txt">
                  <h4>+90 157 058 4567</h4>
                  <h6>{t('nav.9')}</h6>
                </div>
                <i class="fa-solid fa-headphones-simple"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default Nav