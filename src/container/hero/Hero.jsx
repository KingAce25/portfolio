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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam hic assumenda, laudantium asperiores expedita laborum corporis repellat, aliquam dolores quaerat a quos mollitia excepturi consequuntur iusto placeat sed error, sequi eius culpa! Non eaque, accusamus aspernatur distinctio ipsa velit ut earum minima quisquam possimus unde. Vitae qui, ducimus iste fugit saepe facere quisquam quod omnis, praesentium debitis labore assumenda laudantium dolor, ipsum officia repellat eos ab recusandae? Repellendus laudantium dolorem animi id repellat autem numquam officiis, temporibus veniam. Assumenda natus, tempore quisquam recusandae doloremque temporibus commodi dolor veniam cumque, placeat earum, obcaecati possimus sunt laboriosam aliquam optio. Laudantium, mollitia.</p>
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
