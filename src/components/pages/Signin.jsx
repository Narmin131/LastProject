import React from 'react'
import Banner from './common/Banner'
import { NavLink } from 'react-router-dom'
const Signin = () => {
  return (
    <>
    <Banner title="My Account"/>
     <div className="register">
      <div className="register-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             <div className="form">
             <h2>Login to our site</h2>
             <input type="text" placeholder='Email' />
              <input type="password" placeholder='Your password' />
              <div className="bottom">
              <button>Sign In</button>
              <p>Doesn't have an account? <NavLink to='/register'><h5>Sign Up</h5></NavLink></p>
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

export default Signin
