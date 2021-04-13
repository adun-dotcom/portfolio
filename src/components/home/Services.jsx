import React from 'react'
import Design from '../../assets/design.png'
import Audit from '../../assets/audit.png'
import Research from '../../assets/research.png'
import Testing from '../../assets/testing.png'

function MyServices(){
    return (
      <div className="container colored-bg services">
        <h5>Services</h5>
        <hr />
        <h3>What I love to do</h3>
        <div className="my-services">
          <div>
            <img src={Research} alt="" />
            <span>UX Research</span>
          </div>
          <div>
            <img src={Design} alt="" />
            <span>UI/UX Design</span>
          </div>
          <div>
            <img src={Testing} alt="" />
            <span>User Testing</span>
          </div>
          <div>
            <img src={Audit} alt="" />
            <span>UX Audit</span>
          </div>
        </div>
      </div>
    )
}

export default MyServices