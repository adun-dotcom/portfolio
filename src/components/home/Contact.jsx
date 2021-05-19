import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

function MyContact() {
  return (
    <div className="container colored-bg">
      <h5>Say Hello</h5>
      <hr />
      <div className="contact-flex">
        <div className="about-text">
          <p>
            Let me know if you want to talk about a potential collaboration. I'm
            available for freelance work.
          </p>
        </div>
      </div>

      <a className="resume-btn" target="_blank" href="mailto: aduntobi7@gmail.com?subject=my email">
       <AiOutlineMail size={16}/> Contact me
      </a>
    </div>
  )
}

export default MyContact
