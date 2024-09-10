import React from 'react'
import './hero.css'
import Face from '../../assets/face.jpg'
import Github from '../../assets/skill-icons--github-dark.svg'
import Linkedin from '../../assets/devicon--linkedin.svg'
import Email from '../../assets/weui--email-outlined.svg'

const Hero = () => {
  return (
    <div id='hero' className='hero section__padding'>
      <div className="hero__image heartbeat">
        <img src={Face} alt="" />
      </div>
      <div className="hero__text">
        <div className="hero__header">
          <h1>King Ace</h1>
          <p>My name is Oladimeji Caleb Okikiola. I am a skilled developer with expertise in HTML, CSS, JavaScript, React, and Firebase, with 3 years of experience. My experience spans creating responsive and dynamic user interfaces using modern web technologies. With a strong foundation in frontend development, I am adept at building interactive web applications, integrating Firebase for real-time databases, authentication, and hosting services. My proficiency in React allows me to develop scalable and efficient single-page and multi-pages applications. I consistently leverage my knowledge of web technologies to create seamless, user-friendly experiences, and stays up-to-date with the latest trends in web development.</p>
        </div>
        <div className="hero__button">
          <a href="https://github.com/KingAce25"><button className='button text-pop-up-top'><img src={Github} alt="" /> GitHub</button></a>
          <a href="/"><button className='button text-pop-up-top'><img src={Linkedin} alt="" /> Linkedin</button></a>
          <a href="/"><button className='button text-pop-up-top'><img src={Email} alt="" /> Email</button></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
