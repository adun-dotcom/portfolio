import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

function Nav({active}){

  const [open, setOpen] = useState(false)
const nav = useRef(null)
  const navToggler = () => {
    setOpen(!open)
  
  }
    return (
      <nav className="navbar">
        <a href="/">
          <h4 className="nav-logo">YinkaDesign</h4>
        </a>
        <ul style={{ transform: open ? 'translateX(0px)' : '' }}>
          <Link to="/about">
            <li
              className={active === '/about' ? 'active' : ''}
              onClick={navToggler}
            >
              About
            </li>
          </Link>
          {/* <a href="/about">
            <li className={path === '/about' ? 'active' : 'dead'}>About</li>
          </a> */}
          <a href="/#work">
            <li onClick={navToggler}>Work</li>
          </a>
          <a href="/#articles">
            <li onClick={navToggler}>Articles</li>
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1wXYDLJ1aMZ6kEvN8Uhzy0AgmQfh-zHF_CGXNnK88jHo/edit?usp=sharing"
          >
            <li onClick={navToggler}>Resume</li>
          </a>
        </ul>
        {/* toggle button */}
        <div className={open ? 'change' : 'iconbar'} onClick={navToggler}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {/* toggle ends here */}
      </nav>
    )
}

export default Nav