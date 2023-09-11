import React from 'react'
import "../scss/JoinUs.scss"
import teamImage from "../images/team.jpg"
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"

const JoinUs = () => {
  return (
    <div className='joinus-container'>
      <div className="joinus-wrapper">
        <img className='background-img' src={teamImage} alt='team img'/>
        <div className="text-wrapper">
          <h2>Join Us</h2>
          <h1>Join Us by Creating Account or Start a Free Trial</h1>
          <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.</p>

          <div className="button-wrapper">
          <GreenButton text='Start Free Trial' color='#ffff' borderColor='#10C843' icon= <img src={whiteArrow} alt='arrow icon'/>/>
          <GreenButton text='Contact Us' backgroundColor='transparent' color='#ffff' borderColor='#10C843' icon= <img src={whiteArrow} alt='arrow icon'/>/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs