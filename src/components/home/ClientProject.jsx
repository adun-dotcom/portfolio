import React, { useEffect } from 'react'
import TradeGrid from '../../assets/tradegrid.png'
import Artstock from '../../assets/artstock.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
function ClientProject() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="projects-sect">
      <p className="project-type">Client Projects</p>
      <p data-aos="fade-left" className="project-summary">
        These are a few side project I recently concluded.
      </p>

      <div data-aos="fade-up" className="work-img mb-5">
        <img src={TradeGrid} alt="" />
        <div>
          <h4>Trade Grid</h4>
          <p>
            Technologies Used: <span>React</span>
          </p>
          <ul>
            <li>
              Trade Grid is an international oil and gas firm. I worked with a
              UI/UX designer to redesign and build the updated version of the
              trade grid website.
            </li>
          </ul>
          <span className="project-links">
            <a target="_blank" href="http://thetradegrid.co/">
              Live
            </a>
          </span>
        </div>
      </div>
      <div data-aos="fade-up" className="work-img mb-5">
        <img src={Artstock} alt="" />
        <div>
          <h4>Art Stock</h4>
          <p>
            Technologies Used: <span>HTML</span>, <span>CSS</span>,{' '}
            <span>SASS</span>, <span>Gulp</span> and <span>Javascript</span>
          </p>
          <ul>
            <li>
              Art stock is a resource hub for media contents for creatives. I worked with a team of UI/UX designer and Backend developer. (The backend is still in progress.)
            </li>
          </ul>
          <span className="project-links">
            <a
              target="_blank"
              href="https://myartstockcontributor.vercel.app/index.html"
            >
              Live
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ClientProject
