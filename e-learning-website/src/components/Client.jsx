import React from 'react'
import "../scss/Client.scss"
import courseraIcon from "../images/coursera.svg"
import udemyIcon from "../images/udemy.svg"
import oxfordIcon from "../images/oxford.svg"
import michiganIcon from "../images/michigan.svg"

const Client = () => {
  return (
    <div className='client-container'>
      <div><img src={courseraIcon} alt='coursera' /></div>
      <div><img src={udemyIcon} alt='coursera' /></div>
      <div><img src={oxfordIcon} alt='coursera' /></div>
      <div><img src={michiganIcon} alt='coursera' /></div>
    </div>
  )
}

export default Client