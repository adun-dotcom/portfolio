import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

function MyContact() {
  return (
    <div className="container colored-bg">
      <h5>Say Hello</h5>
      <hr />
      
        <div className="about-text">
          <p>
            Let's work together to create amazing applications. I'd love to hear from you.'
          </p>
        </div>
  
      <a className="resume-btn" target="_blank" href="mailto: aduntobi7@gmail.com?subject=my email">
       <AiOutlineMail size={16}/> Contact me
      </a>
    </div>
  )
}

export default MyContact
