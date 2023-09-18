import React from 'react'
import "../scss/AboutUs.scss"
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"
import aboutImg from "../images/about-image.png"

const AboutUs = () => {
  return (
    <div className='about-us-container'>

      {/* Left Column */}
      <div className='left-column'>
        <h2>About Us</h2>
        <h1>eLearning providing the best opportunities to the students around the globe.</h1>
        <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products.
        </p>
        <GreenButton color='#ffff' text='Join Us' borderColor='#10C843' icon=<img src={whiteArrow} alt='arrow' />/>
      </div>

      {/* Right Column */}
      <div className='right-column'>
        <div className='image-container'>
          <img src={aboutImg} alt='office img' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs