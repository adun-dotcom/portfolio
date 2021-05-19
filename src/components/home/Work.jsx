import React from 'react'
import './style.css'

import Learn from '../../assets/learn.png'
import Trailer from '../../assets/trailer.png'
import Stadia from '../../assets/stadia.png'
import Unsplash from '../../assets/unsplash.png'

function MyWork(){
    return (
      <div id="work" className=" work-div">
        <h5>Take a look at my</h5>
        <hr />
        <h3>Projects</h3>
        <div className="work-img mb-5">
          <img src={Learn} alt="" />
          <div>
            <h4>Learn Design</h4>
            <p>
              Technologies Used: <span> React</span>, <span>REST API</span>,
              <span>Express</span>, <span>MongoDB</span>
            </p>
            <ul>
              <li>
                Built with hooks, functional components and libraries like
                Material UI and Boostrap
              </li>
              <li>
                Users have full access to design courses when Authenticated
              </li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://learn-design.netlify.app/" >Live</a>
              <a target="_blank" href="https://github.com/adun-dotcom/e-learning-design-app">
                Repo
              </a>
            </span>
          </div>
        </div>
        <div className="work-img mb-5">
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
              <a target="_blank" href="https://my-trailer-app.netlify.app/">Live</a>
              <a target="_blank" href="https://github.com/adun-dotcom/my-movie-app">Repo</a>
            </span>
          </div>
        </div>
        <div className="work-img mb-5">
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
              <a target="_blank" href="https://stadia-react-app.netlify.app/">Live</a>
              <a target="_blank" href="https://github.com/adun-dotcom/stadia-game-app">Repo</a>
            </span>
          </div>
        </div>
        <div className="work-img ">
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
                <a target="_blank" href="https://unsplash.com/">Unsplash.com</a>
              </li>
              <li>
                Users can search queries in the search box and get result.
              </li>
              <li>The page is a mimic of the unsplash se</li>
            </ul>
            <span className="project-links">
              <a target="_blank" href="https://api-from-unsplash.netlify.app/">Live</a>
              <a target="_blank" href="https://github.com/adun-dotcom/Unsplash-API-Fetch">
                Repo
              </a>
            </span>
          </div>
        </div>
      </div>
    )
}

export default MyWork