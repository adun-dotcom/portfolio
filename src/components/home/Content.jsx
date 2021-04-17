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
import MyIcons from '../icon-folder/Icons'
import Nav from '../header'


function Body() {
  return (
    <>
      <Nav active="/" />
      <IntroSection>
        <div className="intro-content-text">
          <img src={hand} alt="" />
          <p>
            I'm Yinka; a Product Designer with over 3 years experience of
            solving problems with user centric design.
          </p>
          <p>
            Currently living in Ontario, Canada and solving meaningful payment
            challenges at{' '}
            <a className="intro-span" href="https://opayweb.com/">
              operapay.com.
            </a>
          </p>
          <div className="intro-socials">
            <MyIcons />
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
