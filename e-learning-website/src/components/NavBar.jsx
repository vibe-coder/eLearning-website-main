import React from 'react'
import logo from "../images/logo.svg"
import "../scss/NavBar.scss"
import searchIcon from "../images/search-icon.svg"

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className="logo-wrapper"><img src={logo} alt='logo' /></div>


      <div className='for-mobile-wrapper'>
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

          <button className='free-trial-button'><a href='/'>Login</a></button>
        </div>
      </div>
    </div>
  )
}

export default NavBar