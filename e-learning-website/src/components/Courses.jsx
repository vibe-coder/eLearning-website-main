import React from 'react'
import "../scss/Courses.scss"
import GreenButton from './GreenButton'
import shoppingBag from "../images/shop.svg"
import whiteArrow from "../images/white-arow.svg"
import CoursesData from './CoursesData'


const Courses = () => {
  
  return (
    <section className='courses-container'>
      
      {/* Text Wrapper */}
      <div className="text-wrapper">
        <h2>Our Courses</h2>
        <h1>Our Best Courses Offered and Teach By Best of The Instructors.</h1>
        <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
      </div>

      {/* Course Scroll Wrapper */}
      <div className="courses-scroll-wrapper">

        <div className='scrollable'>
          {/* Course Container */}
          {CoursesData.map((data) => {
            return(
            <div className="single-course-container">
              <div className="image-wrapper">
                <img src={require("../images/" + data.imaageURL + ".png")} alt='laptop img' />
              </div>

              <div className="course-text-wrapper">
                <div className="header">
                  <h2>{data.name}</h2>
                  <button>{data.level}</button>
                </div>
                <p>{data.info}</p>
                <h1>{data.price}<span className='currency'>AED</span></h1>
                <div className="button-wrapper">
                  <GreenButton text='View Course' color='#ffff'/>
                  <div className="shop">
                    <img src={shoppingBag} alt='shop'/>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>

      {/* View All Courses Wrapper */}
      <div className="view-all-courses">
        <h1>View All Courses</h1>
        <div className='line'><hr/></div>
        <GreenButton backgroundColor='transparent' color='#ffff' text='All Features' icon=<img src={whiteArrow} alt='arrow forward'/>/>
      </div>
    </section>
  )
}

export default Courses