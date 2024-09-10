import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills section__padding'>
      <h1>Skills</h1>
      <div className="cards">
        <h4>Technical Skills</h4>
        <p>Proficient in building responsive, high-performance web applications using React.js. Skilled in managing component-based architecture, state management with hooks and Redux, integrating RESTful APIs, optimizing UI/UX, and ensuring cross-browser compatibility for seamless user experiences.</p>
      </div>
      <div className="cards">
        <h4>Soft Skills</h4>
        <p>Effective communication is crucial for a React frontend developer. It involves clearly conveying ideas with designers and backend teams, ensuring smooth collaboration, and translating technical concepts into user-friendly solutions, which helps streamline project development and meet client requirements.</p>
      </div>
    </div>
  )
}

export default Skills
