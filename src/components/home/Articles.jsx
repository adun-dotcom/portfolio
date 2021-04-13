import React from 'react'
import Rectangle from '../../assets/Rectangle.svg'

function MyArticle() {
  return (
    <div id="articles" className="article">
      <a href="">
        <i class="fas fa-arrow-right arrow"></i>
      </a>
      <h5>Articles</h5>
      <hr />
      <div className="article-flex">
        <h3>My Medium articles</h3>
        <div>
          <a href="">
            <img src={Rectangle} alt="" />
          </a>
          <h5>january/2020</h5>
          <a href="">
            <p className="hover-text">Redesigning OPay’s Documentation Site.</p>
          </a>
        </div>
        <div>
          <a href="">
            <img src={Rectangle} alt="" />
          </a>
          <h5>april/2020</h5>
          <a href="">
            <p className="hover-text">UI/UX Design and Why it is Important.</p>
          </a>
        </div>
        <div>
          <a href="">
            <img src={Rectangle} alt="" />
          </a>
          <h5>august/2020</h5>
          <a href="">
            <p className="hover-text">
              Designing an Automatic Budget Calculator.
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyArticle
