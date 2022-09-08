import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from './common/Banner'
import { useTranslation } from 'react-i18next'
const Register = () => {
  const { t } = useTranslation();
  return (
    <>
    <Banner title={t('register.0')}/>
    <div className="register">
      <div className="register-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             <div className="form">
             <h2>Create your account now !</h2>
             <input type="text" placeholder='Email' />
              <input type="password" placeholder='Your password' />
              <div className="bottom">
              <button>Sign Up</button>
              <p>Already have an account? <NavLink to='/signin'><h5>Sign In</h5></NavLink></p>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register