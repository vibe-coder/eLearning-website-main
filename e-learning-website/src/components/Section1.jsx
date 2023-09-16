import React from 'react'
import "../scss/Section1.scss"
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"
import greenArrow from "../images/green-arrow.svg"
import arrowDown from "../images/arrow-down.svg"
import searchICon from "../images/white-search-icon.svg"
import ladyImage from "../images/lady.png"



const Section1 = () => {
  return (
    <section className='section-1-container'>

      {/* Left Section */}
      <div className='left-section'>
        <div className='text-wrapper'>
          <h1>You bring the <span className='expertise'>expertise</span>, we'll make it unforgettable.</h1>
          <p>Using highly personalised activities, videos and animations you can energise your students and motivate them to achieve their learning goals as they progress through a journey.</p>

          <div className='button-wrapper'>
            <GreenButton color='#ffff' text='Register' borderColor='#10C843' icon=<img src={whiteArrow} alt='white arrow'/>/>
            <GreenButton text='Login' color='#10C843' backgroundColor='#ffff' borderColor='#10C843' icon=<img src={greenArrow} alt='white arrow'/>/>
          </div>
        </div>


        <div className='course-selection-wrapper'>
          <div className='left'>
            <input placeholder='Select Course'/> 
            <button className='arrow-down'><img src={arrowDown} alt='arrow down'/></button>
          </div>
          <div className='middle'>
            <input placeholder='Select Course'/> 
            <button className='arrow-down'><img src={arrowDown} alt='arrow down'/></button>
          </div>
          <div className='right'>
            <GreenButton borderColor='#10C843' color='#ffff' text='Search' icon= <img src={searchICon} alt='search icon'  />/>
          </div>
        </div>
      </div>


      {/* Right Section */}
      <div className='right-section'>
        <div className='image-wrapper'>
          <img src={ladyImage} alt='lady img' />
        </div>
      </div>
    </section>
  )
}

export default Section1