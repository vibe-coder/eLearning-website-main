import React from 'react'
import "../scss/FAQs.scss"
import JoinUs from '../components/JoinUs';
import bulb2 from "../images/bulb2.jpg"
import faqsData from './FAQsData';


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
        {faqsData.map((data) => {
          return(
            <div className="single-question-wrapper" key={data.id}>
              <h2>{data.question}</h2>
              <p>{data.description}</p>
            </div>
          )
        })}
      </div>

      <JoinUs imageURL= <img style={{objectFit:"cover", objectPosition: "center", width: "1160px", height: "400px", position:"absolute", opacity:".1" }} src={bulb2} alt='team img' />/>
    </section>
  )
}

export default FAQs