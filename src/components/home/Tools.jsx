import React, {useEffect} from 'react'
import ReactLogo from '../../assets/react.png'
import Netlify from '../../assets/netlify.png'
import Css from '../../assets/css.png'
import Html from '../../assets/html.png'
import Js from '../../assets/java.png'
import codepen from '../../assets/codepen.png'
import Mongo from '../../assets/mongo.png'
import Sass from '../../assets/sass.png'
import Git from '../../assets/git.png'
import Jquery from '../../assets/jquery.png'
import Vscode from '../../assets/vscode.png'
import Api from '../../assets/api.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function MyTools() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div data-aos="fade-up" className="wrapper colored-bg">
      <h5 data-aos="fade-right">Check out my</h5>
      <hr />
      <h3>SKILLS</h3>
      <div className="my-tools ">
        <div>
          <img src={Html} alt="" />
          <span>HTML</span>
        </div>
        <div>
          <img src={Css} alt="" />
          <span>CSS</span>
        </div>
        <div>
          <img src={Sass} alt="" />
          <span>SASS</span>
        </div>
        <div>
          <img src={Js} alt="" />
          <span>Javascript</span>
        </div>
        <div>
          <img src={ReactLogo} alt="" />
          <span>React</span>
        </div>
        <div>
          <img src={Mongo} alt="" />
          <span>MongoDB</span>
        </div>
        <div>
          <img src={Api} alt="" />
          <span>REST API</span>
        </div>
        <div>
          <img src={Jquery} alt="" />
          <span>Jquery</span>
        </div>
        <div>
          <img src={Git} alt="" />
          <span>Git</span>
        </div>
        <div>
          <img src={Vscode} alt="" />
          <span>Vscode</span>
        </div>
        <div>
          <img src={Netlify} alt="" />
          <span>Netlify</span>
        </div>

        <div>
          <img src={codepen} alt="" />
          <span>Codepen</span>
        </div>
      </div>
    </div>
  )
}

export default MyTools
