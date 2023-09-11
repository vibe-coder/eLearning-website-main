import React from 'react'
import "../scss/Features.scss"
import bulbImage from "../images/bulb.jpg"
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"

const Features = () => {
  return (
    <div className='features-container'>

      {/* Left Column */}
      <div className="left-column">
        <div className="image-wrapper">
          <img src={bulbImage} alt='bulb img'/>
        </div>
      </div>

      {/* Right Column */}
      <div className="right-column">
        <h2>Features</h2>
        <h1>
          We are always working to provide you best of the features in all aspects.
        </h1>
        <p>
        Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store. <br/> <br/>
        Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best dropshipping and custom products. Start selling the right products to the customer base that you know best. We connect you to inventory, so you can focus on creating a catalog of profitable products for your online store.
        </p>
        <GreenButton color='#ffff' borderColor='#10C843' text='Learn More' icon=<img src={whiteArrow} alt='white arrow' />/>
      </div>
    </div>
  )
}

export default Features