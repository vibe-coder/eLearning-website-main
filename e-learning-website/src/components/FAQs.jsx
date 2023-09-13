import React from 'react'
import "../scss/FAQs.scss"
import teamImage from "../images/team.jpg"
import JoinUs from '../components/JoinUs';
import bulb2 from "../images/bulb2.jpg"


const FAQs = () => {
  return (
    <section className='faqs-container'>
      {/* Text Wrapper */}
      <div className="text-wrapper">
        <h2>FAQs</h2>
        <h1>Frequently Asked Qestions</h1>
        <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
      </div>


      {/* Questions Wrapper */}
      <div className="questions-wrapper">
        <div className="single-question-wrapper">
          <h2>What is dropshipping?</h2>
          <p>Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies</p>
        </div>

        <div className="single-question-wrapper">
          <h2>What is dropshipping?</h2>
          <p>Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies</p>
        </div>

        <div className="single-question-wrapper">
          <h2>What is dropshipping?</h2>
          <p>Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies</p>
        </div>

        <div className="single-question-wrapper">
          <h2>What is dropshipping?</h2>
          <p>Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies</p>
        </div>

        <div className="single-question-wrapper">
          <h2>What is dropshipping?</h2>
          <p>Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies</p>
        </div>

        <div className="single-question-wrapper">
          <h2>What is dropshipping?</h2>
          <p>Over 350,000 online businesses and entrepreneurs have used Modalyst. It's the easiest way to find the best print on demand companies</p>
        </div>
      </div>

      <JoinUs imageURL= <img style={{objectFit:"cover", objectPosition: "center", width: "1160px", height: "400px", position:"absolute", opacity:".1" }} src={bulb2} alt='team img' />/>
    </section>
  )
}

export default FAQs