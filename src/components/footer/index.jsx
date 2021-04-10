import React from 'react'
import './style.css'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
function Footer(){
    return (
      <footer className="container colored-bg">
        <p>Copyright @ 2021 Olayinka Fadare</p>
        <div className="intro-socials">
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </footer>
    )
}

export default Footer