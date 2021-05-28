import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import PersonalProjects from './PersonalProjects'
import CloneProject from './CloneProject'
import Learn from '../../assets/learn.png'

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
        <p className="project-type">Current Project</p>
        <p data-aos="fade-left" className="project-summary">
          This app is currently under construction but you can check it out on a
          desktop to view its progress.
        </p>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Learn} alt="" />
          <div>
            <h4>Learn Design</h4>
            <p>
              Technologies Used: <span> React</span>, <span>REST API</span>,
              <span>Express</span>, <span>MongoDB</span>
            </p>
            <ul>
              <li>
                I am currently working with a team of 2 UI/UX Designers and a
                Data Scientist to build a one-stop design app that aggregates design
                courses from well known e-learning platforms like Udemy,
                Cousera, etc for prospective designers.
              </li>
              
              <li>
                Built with hooks, functional components and libraries like
                Material UI and Boostrap
              </li>
              <li>
                Users have full access to design courses when Authenticated
              </li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://learn-design.netlify.app/">
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/e-learning-design-app"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
      </div>
      <PersonalProjects />
      <CloneProject />
    </div>
  )
}

export default MyWork
