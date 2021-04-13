import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Nav(){
  const path = window.location.pathname
  console.log(path)
    return (
      <nav className="navbar">
        <a href="/">
          <h4 className="nav-logo">YinkaDesign</h4>
        </a>
        <ul>
          {/* <Link to="/about">
            <li className={path === '/about' ? 'active' : 'dead'}>About</li>
          </Link> */}
          <a href="/about">
            <li className={path === '/about' ? 'active' : 'dead'}>About</li>
          </a>
          <a href="/#work">
            <li>Work</li>
          </a>
          <a href="/#articles">
            <li>Articles</li>
          </a>
          <a href="https://docs.google.com/document/d/1wXYDLJ1aMZ6kEvN8Uhzy0AgmQfh-zHF_CGXNnK88jHo/edit?usp=sharing">
            <li>Resume</li>
          </a>
        </ul>
      </nav>
    )
}

export default Nav