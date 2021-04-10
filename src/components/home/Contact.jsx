import React from 'react'
import Button from '../button'
import Squares from '../../assets/squares.svg'
import {Link} from 'react-router-dom'
function MyContact() {
  return (
    <div className="container colored-bg">
      <h5>Contact Me</h5>
      <hr />
      <div className="contact-flex">
        <div>
          <p className="contact-text">
            Let me know if you want to talk about a potential collaboration. I'm
            available for freelance work.
          </p>
          <Button clsName="chat-btn" btnText="Let's Chat" />
        </div>
        <div className="email-div">
          <Link to="/">
            <p>olayinkaodetola5@gmail.com</p>
          </Link>
          <img src={Squares} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MyContact
