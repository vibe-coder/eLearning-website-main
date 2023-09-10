import React from 'react'
import "../scss/AboutUs.scss"
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"
import officeImg from "../images/office.png"
import laptopImg1 from "../images/laptop-1.png"

const AboutUs = () => {
  return (
    <div className='about-us-container'>

      {/* Left Column */}
      <div className='left-column'>
        <h1>About Us</h1>
        <h2>eLearning providing the best opportunities to the students around the globe.</h2>
        <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.
          <br/> <br/>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.
        </p>
        <GreenButton color='#ffff' text='Join Us' borderColor='#10C843' icon=<img src={whiteArrow} alt='arrow' />/>
      </div>

      {/* Right Column */}
      <div className='right-column'>
        <div className='image-container'>
          {/* Image 1 */}
          <div className='image-1-wrapper'>
            <img src={officeImg} alt='office img' />
          </div>

          {/* Image 2 */}
          <div className='image-2-wrapper'>
            <img src={laptopImg1} alt='office img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs