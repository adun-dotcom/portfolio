import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Brass from '../../assets/brass.png'
import Shion from '../../assets/shion.png'
import Pinterest from '../../assets/pintrest.png'
import Stadia from '../../assets/stadia.png'
import Unsplash from '../../assets/unsplash.png'
function CloneProject() {
     useEffect(() => {
       Aos.init({ duration: 2000 })
     }, [])
    return (
      <div className="projects-sect">
        <p className="project-type">Cloned Websites</p>
        <p data-aos="fade-left" className="project-summary">
          In order to improve my skills I try to recreate existing website's
          user interfaces (UIs) as closely as possible.
        </p>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Brass} alt="" />
          <div>
            <h4>Brass</h4>
            <p>
              Technologies Used: <span> React</span>
            </p>
            <ul>
              <li>
                Built with hooks and functional components
              </li>
              <li>
                A mimic of the brass finance webpage.
              </li>
            </ul>
            <span className="project-links">
              <a
                target="_blank"
                href="https://modest-perlman-98cccf.netlify.app/"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/Brass-finance-app"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Pinterest} alt="" />
          <div>
            <h4>Pinterest</h4>
            <p>
              Technologies Used: <span>HTML</span>, <span>CSS</span>,
              <span>JS</span>
            </p>
            <ul>
              <li>Completely built with pure HTML, CSS and JS</li>
              <li>This is a mimic of the pinterest home page</li>
            </ul>
            <span className="project-links">
              <a
                target="_blank"
                href="https://pinterest-clone-app.netlify.app/"
              >
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/pinterest-clone"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Shion} alt="" />
          <div>
            <h4>Shion fashion</h4>
            <p>
              Technologies Used: <span>HTML</span>, <span>CSS</span>
            </p>
            <ul>
              <li>Completely built with pure HTML and CSS</li>
              <li>
                This app is a mimic of the shion fashion e-commerce website
              </li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://shion-fashion.netlify.app/">
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/fashion-template"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
        <div data-aos="fade-up" className="work-img mb-5">
          <img src={Stadia} alt="" />
          <div>
            <h4>Google Stadia</h4>
            <p>
              Technologies Used: <span>React</span>
            </p>
            <ul>
              <li>Used React to mimic google stadia home page</li>
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
        <div data-aos="fade-up" className="work-img ">
          <img src={Unsplash} alt="" />
          <div>
            <h4>Unsplash Clone</h4>
            <p>
              Technologies Used: <span>HTML</span>, <span>CSS</span>,{' '}
              <span>JS</span>
            </p>
            <ul>
              <li>
                This app fetches data (pictures) directly from{' '}
                <a target="_blank" href="https://unsplash.com/">
                  Unsplash.com
                </a>
              </li>
              <li>
                Users can search queries in the search box and get result.
              </li>
              <li>The page is a mimic of the unsplash home page</li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://api-from-unsplash.netlify.app/">
                Live
              </a>
              <a
                target="_blank"
                href="https://github.com/adun-dotcom/Unsplash-API-Fetch"
              >
                Repo
              </a>
            </span>
          </div>
        </div>
      </div>
    )
}

export default CloneProject
