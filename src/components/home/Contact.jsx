import React, {useEffect} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
function MyContact() {
   useEffect(() => {
     Aos.init({ duration: 2000 })
   }, [])
  return (
    <div data-aos="fade-up" className="wrapper colored-bg">
      <h5 data-aos="fade-right">Say Hello</h5>
      <hr />

      <div className="about-text">
        <p>
          Let's work together to create amazing applications. I'd love to hear
          from you.
        </p>
      </div>

      <a
        className="resume-btn"
        target="_blank"
        href="mailto: aduntobi7@gmail.com?subject=my email"
      >
        <AiOutlineMail size={16} /> Contact me
      </a>
      <p className="email-p">aduntobi7@gmail.com</p>
      
    </div>
  )
}

export default MyContact
