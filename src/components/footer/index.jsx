import React from 'react'
import './style.css'
import MyIcons from '../icon-folder/Icons'
function Footer(){
    return (
      <footer className="colored-bg">
        <div className="intro-socials">
          <MyIcons />
        </div>
        <p>Copyright @ 2021 Adunola Odetola</p>
      </footer>
    )
}

export default Footer