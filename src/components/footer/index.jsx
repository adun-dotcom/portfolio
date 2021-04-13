import React from 'react'
import './style.css'
import MyIcons from '../icon-folder/Icons'
function Footer(){
    return (
      <footer className="colored-bg">
        <p>Copyright @ 2021 Olayinka Fadare</p>
        <div className="intro-socials">
          <MyIcons/>
        </div>
      </footer>
    )
}

export default Footer