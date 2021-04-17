import React from 'react'
import './style.css'
import Rectangle from '../../assets/work.png'

function MyWork(){
    return (
      <div id="work" className="container work-div">
        <h5>Work</h5>
        <hr/>
        <h3>My Case Studies</h3>
        <div className="work-img-1">
          <img className="img-long" src={Rectangle} alt="" />
          <img className="img-short" src={Rectangle} alt="" />
        </div>
        <div className="work-img-2">
          <img className="img-short" src={Rectangle} alt="" />
          <img className="img-long" src={Rectangle} alt="" />
        </div>
      </div>
    )
}

export default MyWork