import React from 'react'
import './style.css'


import pinkDot from '../../assets/pink-dot.svg'
import greenDot from '../../assets/green-dot.svg'
import blueCross from '../../assets/blue-cross.svg'
import pinkCross from '../../assets/pink-cross.svg'

function IntroSection({children}){
    return (
      <div className="wrapper intro-section">
        <img className="pink-dot dot-1" src={pinkDot} alt="" />
        <div className="intro-content">
          <img className="pink-dot dot-2" src={pinkDot} alt="" />
          <img className="green-dot dot-3" src={greenDot} alt="" />
          <img className="cross-img cross-1" src={blueCross} alt="" />
          <img className="cross-img cross-2" src={pinkCross} alt="" />
          <div >
            {children}
           
          </div>
        </div>
      </div>
    )
}

export default IntroSection