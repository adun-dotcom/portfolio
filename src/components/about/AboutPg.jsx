import React from 'react'
import './style.css'
import IntroSection from '../intro'


import Nav from '../header'


function AboutMe(){
    return (
      <div>
        <Nav active="/about" />
        <IntroSection>
          <div className="about-content-div">
            <div className="about-text">
              <h5>Intro</h5>
              <hr />
              <h3>About Me</h3>
              <p>
                I have over 3 years experience designing B2B and B2C products
                with an understanding of business and product metrics, as well
                as the role of data in design. I am passionate about creating
                usable digital products. I apply research-based principles to
                drive the design of products that fully support end-user needs
                while also achieving the business vision.
              </p>
              <p>
                The core of my work involves understanding complex challenges
                through research, exploring ideas based on actionable insights
                and crafting data-informed designs that solve customer problems
                while adding value to business.
              </p>
              <p>
                When I'm not knee-deep in some design work, I write and speak
                about my experience in design.
              </p>
            </div>
            {/* about image */}
         
          </div>
        </IntroSection>
        <div className="container colored-bg">
          <div className="job-div">
            <h5>Jobs</h5>
            <hr />
            <div>
              <h3>Currently</h3>
              <p>Product Designer at OPay, Nigeria</p>
            </div>
            <div>
              <h3>Previously</h3>
              <p>UI/UX Designer at Terragon Group, Nigeria</p>
            </div>
            <div className="hire-resume">
          
              <a href="https://docs.google.com/document/d/1wXYDLJ1aMZ6kEvN8Uhzy0AgmQfh-zHF_CGXNnK88jHo/edit?usp=sharing">
                <p>Resume </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe