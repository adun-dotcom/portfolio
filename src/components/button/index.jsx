import React from 'react'
import letter from '../../assets/envelope.svg'
import {Link} from 'react-router-dom'
import './style.css'
function Button({btnText, clsName}){
    return (
      <Link to="/">
        <button className={clsName}>
          <img src={letter} alt="" />
          {btnText}
        </button>
      </Link>
    )
}

export default Button