import React from 'react'
import "../scss/BlogPost.scss"
import GreenButton from './GreenButton'
import greenArrow from "../images/green-arrow.svg"
import BlogPostData from './BlogPostData'

const BlogPost = () => {
  return (
    <section className='blog-post-container'>

      {/* Text Wrapper */}
      <div className="text-wrapper">
        <h2>Blog Post</h2>
        <h1>Articles Will Help To Stay Up To Date With All the Knowledge.</h1>
        <p>Install our top-rated dropshipping app to your e-commerce site and get access to US Suppliers, AliExpress vendors, and the best.</p>
      </div>


      {/* Blog Wrapper */}
      <div className="blog-wrapper">
        {BlogPostData.map((data) => {
          return(
            <div className="single-blog-container">
              <div className="image-wrapper">
                <img src={require("../images/" + data.imageURL + ".jpg")} alt='blog img'/>
              </div>

              <div className="blog-text-wrapper">
                <h3>{data.title}</h3>
                <p>{data.info}</p>
                <GreenButton backgroundColor='transparent' text='Read Article' color='#10C843' borderColor='#10C843' icon=<img src={greenArrow} alt='arrow' />/>
              </div>
            </div>
          )
        })}       
      </div>

    </section>
  )
}

export default BlogPost