import React from 'react'
import hand from '../../assets/hand.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
import IntroSection from '../intro/index'
import MyWork from './Work'
import MyServices from './Services'
import MyTools from './Tools'
import MyArticle from './Articles'
import MyContact from './Contact'


function Body() {
  return (
    <>
      <IntroSection>
        <div className="intro-content-text">
          <img src={hand} alt="" />
          <p>
            I'm Yinka; a Product Designer with over 3 years experience of
            solving problems with user centric design.
          </p>
          <p>
            Currently living in Ontario, Canada and solving meaningful payment
            challenges at <span className="intro-span">operapay.com.</span>
          </p>
          <div className="intro-socials">
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </IntroSection>
      <MyWork />
      <MyServices />
      <MyTools />
      <MyArticle />
      <MyContact />
    </>
  )
}

export default Body
