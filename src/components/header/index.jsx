import React from 'react'
import FadeInAnimation from '../Animation'
import './style.css'

function Nav(){
    return (
      <nav className="mynav">
        <a href="/">
          <h4 className="nav-logo">Adun.js</h4>
        </a>
        <FadeInAnimation direction="right" delay={2}>
          <a
            className="resume-btn"
            target="_blank"
            href="https://drive.google.com/file/d/13CUi95XjS2YS_8alBocK2DNg-Jp5sFhg/view?usp=sharing"
          >
            Resume
          </a>
        </FadeInAnimation>
      </nav>
    )
}

export default Nav