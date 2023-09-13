import React from 'react'
import "../scss/Footer.scss"
import logo from "../images/logo.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import pinterest from "../images/pinterest.svg"
import facebook from "../images/facebook.svg"

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className="links-container">
        <div className="img-wrapper"><a href='/'><img src={logo} alt='logo'/></a></div>
        <ul className='links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Features</a></li>
          <li><a href='/'>Benefits</a></li>
          <li><a href='/'>Courses</a></li>
          <li><a href='/'>Blogs</a></li>
          <li><a href='/'>Login</a></li>
        </ul>
        <div className="social-container">
          <div className="social-wrapper"><img src={twitter} alt='social icon' /></div>
          <div className="social-wrapper"><img src={instagram} alt='social icon' /></div>
          <div className="social-wrapper"><img src={pinterest} alt='social icon' /></div>
          <div className="social-wrapper"><img src={facebook} alt='social icon' /></div>
        </div>
      </div>

      <div className="copyright-wrapper">
        <p>Copyright © 2023 eLearning.com</p>
      </div>
    </section>
  )
}

export default Footer