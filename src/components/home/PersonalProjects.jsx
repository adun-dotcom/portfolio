import React, { useEffect } from 'react'

import Trailer from '../../assets/trailer.png'
import Calculator from '../../assets/calculator.png'
import Stadia from '../../assets/stadia.png'
import Unsplash from '../../assets/unsplash.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function PersonalProjects() {
     useEffect(() => {
       Aos.init({ duration: 2000 })
     }, [])
    return (
      <div className="projects-sect">
        <p className="project-type">Personal Projects</p>
        <p data-aos="fade-left" className="project-summary">
          A couple of projects that I've built in the past. I'm learning a ton
          right now, so you can expect more to appear soon!
        </p>

        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Trailer} alt="" />
          <div>
            <h4>Trailer App</h4>
            <p>
              Technologies Used: <span>HTML</span>, <span>CSS</span>,{' '}
              <span>JS</span>, <span>JQUERY</span>
            </p>
            <ul>
              <li>Completely built with pure HTML and CSS</li>
              <li>
                This app fetches API from IMDB platform that displays movies
                from selected genres allowing users have access to the movie
                trailer, rating and brief overview.
              </li>
              <li>Users can also search for movie of their choice</li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://my-trailer-app.netlify.app/">
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/my-movie-app"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Calculator} alt="" />
          <div>
            <h4>Simple Calculator</h4>
            <p>
              Technologies Used: <span>HTML</span>, <span>CSS</span>,
              <span>JS</span>
            </p>
            <ul>
              <li>
                This app allows you perform arithmetic operations on numbers.
                Operations like addition, subtraction, multiplication, division
                and percentage
              </li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://stadia-react-app.netlify.app/">
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/stadia-game-app"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
      </div>
    )
}

export default PersonalProjects
