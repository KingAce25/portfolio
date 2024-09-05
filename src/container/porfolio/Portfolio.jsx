import React from 'react'
import './portfolio.css'
import Web from '../../assets/web.png'
import Gpt from '../../assets/gpt-3.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio section__padding'>
      <div className="portfolio__header">
        <h1>Portfolio</h1>
        <p>A collection of my most recent works</p>
      </div>
      <div className="body__cards">
        <div className="card1">
          <div className="img">
          <a href="https://new-iota-smoky.vercel.app/"><img src={Web} alt="" /></a>
          </div>
          <div className="text">
            <h2>Web Design</h2>
            <p>Fusce in efficitur arcu, non vestibulum velit. Nullam lorem metus, placerat ut purus eu, pretium malesuada leo. Nulla quis lacus eget elit dignissim luctus. Mauris tortor quam, mattis a tincidunt sit amet, ullamcorper ut turpis. Vestibulum tempus ex sed nulla.</p>
            <a href="https://new-iota-smoky.vercel.app/"><button className='button'>Visit Website</button></a>
          </div>
        </div>
        <div className="card1 card2">
          <div className="img">
          <a href="https://gpt-3-beta-gold.vercel.app/"><img src={Gpt} alt="" /></a>
          </div>
          <div className="text">
            <h2>Gpt-3 Website</h2>
            <p>Fusce in efficitur arcu, non vestibulum velit. Nullam lorem metus, placerat ut purus eu, pretium malesuada leo. Nulla quis lacus eget elit dignissim luctus. Mauris tortor quam, mattis a tincidunt sit amet, ullamcorper ut turpis. Vestibulum tempus ex sed nulla.</p>
            <a href="https://gpt-3-beta-gold.vercel.app/"><button className='button'>Visit Website</button></a>
          </div>
        </div>
        <div className="card1">
          <div className="img">
          <a href="https://new-iota-smoky.vercel.app/"><img src={Web} alt="" /></a>
          </div>
          <div className="text">
            <h2>Web Design</h2>
            <p>Fusce in efficitur arcu, non vestibulum velit. Nullam lorem metus, placerat ut purus eu, pretium malesuada leo. Nulla quis lacus eget elit dignissim luctus. Mauris tortor quam, mattis a tincidunt sit amet, ullamcorper ut turpis. Vestibulum tempus ex sed nulla.</p>
            <a href="https://new-iota-smoky.vercel.app/"><button className='button'>Visit Website</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio