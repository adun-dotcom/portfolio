import React from 'react'
import './style.css'
import IntroSection from '../intro'
import Circle from '../../assets/Ellipse.svg'
import HalfCircle from '../../assets/half-shape.svg'
import Button from '../button'


function AboutMe(){
    return (
      <div>
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
            <div className="about-img">
              <img className="half-circle" src={HalfCircle} alt="" />
              <img src={Circle} alt="" />
            </div>
          </div>
        </IntroSection>
        <div className="container colored-bg">
          <h5>Jobs</h5>
          <hr />
          <div className="job-div">
            <div>
              <h3>Currently</h3>
              <p>Product Designer at OPay, Nigeria</p>
            </div>
            <div>
              <h3>Previously</h3>
              <p>UI/UX Designer at Terragon Group, Nigeria</p>
            </div>
            <div className="hire-resume">
              <Button btnText="Hire Me" clsName="hire-btn" />
              <p>Download Resume </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutMe