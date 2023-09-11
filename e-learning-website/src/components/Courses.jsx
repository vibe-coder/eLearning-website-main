import React from 'react'
import "../scss/Courses.scss"
import laptop2 from "../images/laptop-2.jpg"
import GreenButton from './GreenButton'
import shoppingBag from "../images/shop.svg"

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
        <div className="course-container">
          <div className="image-wrapper">
            <img src={laptop2} alt='laptop img' />
          </div>

          <div className="course-text-wrapper">
            <div className="header">
              <h2>Basics of JAVA</h2>
              <button>Beginner Level</button>
            </div>
            <p>Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... </p>
            <h1>125.65<span className='currency'>AED</span></h1>
            <div className="button-wrapper">
              <GreenButton text='View Course' color='#ffff'/>
              <div className="shop">
                <img src={shoppingBag} alt='shop'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Courses Wrapper */}
      <div className="view-all-courses">
        View All Courses
      </div>
    </section>
  )
}

export default Courses