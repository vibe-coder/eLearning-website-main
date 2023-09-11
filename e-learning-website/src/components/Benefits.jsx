import React from 'react'
import "../scss/Benefits.scss"
import BenefitInfo from './BenefitInfo'
import { useCollapse } from 'react-collapsed'
import { useState } from 'react'
import GreenButton from './GreenButton'
import whiteArrow from "../images/white-arow.svg"


const Benefits = () => {

  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className='benefits-container'>

      {/* Text Wrapper */}
      <div className="text-wrapper">
        <h2>Our Benefits</h2>
        <h1>By Joining eLearning Platform, One Can Avail a Lot Of Benefits.</h1>
        <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
      </div>


      {/* Grid Wrapper */}
      <div className="grid-wrapper">
        {BenefitInfo.map((data) => {
          return(
          <div className="grid-element" key={data.id}>
            <div className="number-wrapper"><h1>{data.id}</h1></div>
            <h2>{data.title}</h2>
            <p>{data.paragraph}</p>

            <div className='collapsed' {...getCollapseProps()}>{data.collapse}</div>

            <button
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
            >
            {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
          )
        })}
      </div>


        {/* View All Wrapper */}
      <div className="view-all-wrapper">
        <h1>View All Features</h1>
        <div className='line'><hr/></div>
        <GreenButton color='#ffff' text='All Features' icon=<img src={whiteArrow} alt='arrow forward'/>/>
      </div>
    </div>
  )
}

export default Benefits