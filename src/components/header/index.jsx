import React from 'react'

import './style.css'

function Nav(){

//   const [open, setOpen] = useState(false)
// const nav = useRef(null)
//   const navToggler = () => {
//     setOpen(!open)
  
//   }
    return (
      <nav className="mynav">
        <a href="/">
          <h4 className="nav-logo">Adun.js</h4>
        </a>

        <a
        className="resume-btn"
          target="_blank"
          href="https://drive.google.com/file/d/13CUi95XjS2YS_8alBocK2DNg-Jp5sFhg/view?usp=sharing"
        >
          Resume
        </a>

        {/* toggle button */}
        {/* <div className={open ? 'change' : 'iconbar'} onClick={navToggler}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div> */}
        {/* toggle ends here */}
      </nav>
    )
}

export default Nav