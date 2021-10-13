import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import PersonalProjects from './PersonalProjects'
import CloneProject from './CloneProject'
import Quabbly from '../../assets/quabbly.png'
import ClientProject from './ClientProject'

function MyWork() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id="work" className="wrapper work-div">
      <h5 data-aos="fade-right">Take a look at my </h5>
      <hr />
      <h3>Projects</h3>
      <div className="projects-sect">
        <p className="project-type">Featured Project</p>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Quabbly} alt="" />
          <div>
            <h4>Quabbly INC</h4>
            <p>
              Technologies Used: <span> React</span>, <span> Next JS</span>,
              <span> Styled Components</span>,<span> Angular</span>
            </p>
            <ul>
              <li>
              I was the sole frontend developer on the quabbly website for this early stage startup. My work included building and updating new features using next js and react.

              </li>
              
              <li>
              I also participated in every one of the product feature development from ideation through development and improvement using Angular.
              </li>
              <li>
              Built extensive test coverage for all new features with Cypress.
              </li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://quabbly.com/">
                Live
              </a>
            
            </span>
          </div>
        </div>
      </div>
      <PersonalProjects />
      <ClientProject/>
      <CloneProject />
    </div>
  )
}

export default MyWork
