import React from 'react'
import Rectangle from '../../assets/Rectangle.svg'
import Arrow from '../../assets/arrow.svg'

function MyArticle() {
  return (
    <div id="articles" className="article">
        <img className="arrow" src={Arrow} alt=""/>
      <h5>Articles</h5>
      <hr />
      <div className="article-flex">
        <h3>My Medium articles</h3>
        <div>
          <img src={Rectangle} alt="" />
          <h5>january/2020</h5>
          <p>Redesigning OPay’s Documentation Site.</p>
        </div>
        <div>
          <img src={Rectangle} alt="" />
          <h5>april/2020</h5>
          <p>UI/UX Design and Why it is Important.</p>
        </div>
        <div>
          <img src={Rectangle} alt="" />
          <h5>august/2020</h5>
          <p>Designing an Automatic Budget Calculator.</p>
        </div>
      </div>
    </div>
  )
}

export default MyArticle
