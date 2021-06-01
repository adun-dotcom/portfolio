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
            href="https://docs.google.com/document/d/1J2lZ0Opk03l7Ys45qkhADNXcT26KsLRWgvqV306AMYk/edit?usp=sharing"
          >
            Resume
          </a>
        </FadeInAnimation>
      </nav>
    )
}

export default Nav