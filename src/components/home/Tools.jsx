import React from 'react'
import Figma from '../../assets/figma.svg'
import Adobe from '../../assets/adobe.svg'
import Balsamiq from '../../assets/balsamiq.svg'
import Invision from '../../assets/invision.svg'
import Lookback from '../../assets/lookback.svg'
import Marvel from '../../assets/marvel.svg'
import Miro from '../../assets/miro.svg'
import Notion from '../../assets/notion.svg'
import Principle from '../../assets/principle.svg'
import Sketch from '../../assets/sketch.svg'
import Whimsical from '../../assets/whimsical.svg'
import Zeplin from '../../assets/zeplin.svg'
function MyTools() {
  return (
    <div className="container colored-bg">
      <h5>Tools</h5>
      <hr />
      <h3>Tools I work with</h3>
      <div className="my-tools">
        <div className="tools-1">
          <div>
            <img src={Marvel} alt="" />
            <span>Marvel App</span>
          </div>
          <div>
            <img src={Miro} alt="" />
            <span>Miro</span>
          </div>
          <div>
            <img src={Sketch} alt="" />
            <span>Sketch</span>
          </div>
          <div>
            <img src={Invision} alt="" />
            <span>Invision</span>
          </div>
          <div>
            <img className="zeplin" src={Zeplin} alt="" />
            <span>Zeplin</span>
          </div>
          <div>
            <img src={Whimsical} alt="" />
            <span>Whimsical</span>
          </div>
        </div>
        <div className="tools-2">
          <div>
            <img src={Figma} alt="" />
            <span>Figma</span>
          </div>
          <div>
            <img src={Notion} alt="" />
            <span>Notion</span>
          </div>
          <div>
            <img src={Adobe} alt="" />
            <span>Adobe</span>
          </div>
          <div>
            <img src={Principle} alt="" />
            <span>Principle</span>
          </div>
          <div>
            <img src={Lookback} alt="" />
            <span>Lookback</span>
          </div>
          <div>
            <img src={Balsamiq} alt="" />
            <span>Balsamiq</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTools
