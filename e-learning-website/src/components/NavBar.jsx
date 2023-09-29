import React from 'react'
import logo from "../images/logo.svg"
import "../scss/NavBar.scss"
import searchIcon from "../images/search-icon.svg"
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"
import hamburger from "../images/icons8-hamburger-384.svg"
import cancelIcon from "../images/icons8-multiply-100.png"

const NavBar = () => {

  return (
    <div className='navbar-container'>
      <div className="logo-wrapper"><img src={logo} alt='logo' /></div>

      <div className='menuToggle' id='menuToggle'>
      
        <input id='checkbox' name='checkbox' type="checkbox" />

        <button className='toggle-button' id='toggle-button'>
          <img id='hamburger' className='hamburger' src={hamburger} alt='icon' />
          <img id='cancelIcon' className='cancelIcon' src={cancelIcon} alt='icon' />
        </button>

        <div id='menuSlide' className='menuSlide'>
          <ul className='link-list-wrapper'>
          <div className='link-wrapper'><li className='link'><a href='/'>Home</a></li></div>
          <div className='link-wrapper'><li className='link'><a href='/'>Features</a></li></div>
          <div className='link-wrapper'><li className='link'><a href='/'>Benefits</a></li></div>
          <div className='link-wrapper'><li className='link'><a href='/'>Courses</a></li></div>
          <div className='link-wrapper'><li className='link'><a href='/'>Blogs</a></li></div>
          <div className='link-wrapper'><li className='link'><a href='/'>Login</a></li></div>
          </ul>

          <div className='searchbar-trial-wrapper'>
          <div className='searchbar-wrapper'>
            <img className='search-icon' src={searchIcon} alt='search-icons'/>
          </div>

          <GreenButton 
          color='#ffff'
          text= "Start Free Trial"
          borderColor='#10C843'
          icon = <img src={whiteArrow} alt='white-arrow' />
          onClickHandler={() => console.log('Already Clicked')}
        />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar