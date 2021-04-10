import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Nav(){
  const path = window.location.pathname
  console.log(path)
    return (
      <nav className="navbar container">
        <h4>YinkaDesign</h4>
        <ul>
          <Link to="/about">
            <li className={path === '/about'? 'active': 'dead'}>About</li>
          </Link>
          <a href="/#work">
            <li>Work</li>
          </a>
          <a href="/#articles">
            <li>Articles</li>
          </a>
          <Link to="">
            <li>Resume</li>
          </Link>
        </ul>
      </nav>
    )
}

export default Nav