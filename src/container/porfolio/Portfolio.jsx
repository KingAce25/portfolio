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
            <p>This is the frontend of a website aimed at people who are ready to learn and explore. Its focus is on topics such as web design, coding, marketing, and finance, The clean design and the focus on content categories shows that it's designed to help users to Discover, Learn and Enjoy knowledge in these areas.</p>
            <a href="https://new-iota-smoky.vercel.app/"><button className='button'>Visit Website</button></a>
          </div>
        </div>
        <div className="card1 card2">
          <div className="img">
          <a href="https://gpt-3-beta-gold.vercel.app/"><img src={Gpt} alt="" /></a>
          </div>
          <div className="text">
            <h2>Gpt-3 Website</h2>
            <p>This website promotes GPT-3, a powerful language model by OpenAI, offering resources, case studies, and libraries for developers and businesses. It invites users to explore GPT-3's capabilities, likely offering account sign-ups for accessing or integrating the technology into various projects or applications.</p>
            <a href="https://gpt-3-beta-gold.vercel.app/"><button className='button'>Visit Website</button></a>
          </div>
        </div>
        <div className="card1">
          <div className="img">
          <a href="https://new-iota-smoky.vercel.app/"><img src={Web} alt="" /></a>
          </div>
          <div className="text">
            <h2>Web Design</h2>
            <p>This is the frontend of a website aimed at people who are ready to learn and explore. Its focus is on topics such as web design, coding, marketing, and finance, The clean design and the focus on content categories shows that it's designed to help users to Discover, Learn and Enjoy knowledge in these areas.</p>
            <a href="https://new-iota-smoky.vercel.app/"><button className='button'>Visit Website</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
