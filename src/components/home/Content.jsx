import React from 'react'
import hand from '../../assets/hand.svg'

import IntroSection from '../intro/index'
import MyWork from './Work'
import MyTools from './Tools'

import MyContact from './Contact'
import MyIcons from '../icon-folder/Icons'
import Nav from '../header'
import AboutImg from '../../assets/adun.jpg'

function Body() {
  return (
    <>
      <Nav active="/" />
      <IntroSection>
        <div className="about-content-div">
          <div className="about-text">
            <img src={hand} alt="" />
            <p>
              I'm Adunola, a <span>Frontend Developer</span> with a keen eye for
              design. I'm very passionate about aesthetics and user experience.
            </p>
            <p>
              I enjoy taking static designs and turning them into efficient
              applications. I also love the logic and structure of coding and
              always strive to write elegant and efficient code whether it be
              <span>HTML</span>, <span>CSS</span> or <span>React.js</span>
            </p>
            <div className="intro-socials">
              <MyIcons />
            </div>
          </div>
          <div className="about-img">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </IntroSection>
      <MyWork />
      <MyTools />
      <MyContact />
    </>
  )
}

export default Body
