import React from 'react'
import Facebook from '../../assets/logos--facebook.svg'
import Github from '../../assets/skill-icons--github-dark.svg'
import Instagram from '../../assets/skill-icons--instagram.svg'
import Whatsapp from '../../assets/logos--whatsapp-icon.svg'
import './footer.css'
const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer__top">
        <p>Reach me on my socials:</p>
        <a href="https://facebook.com/kingace255"><img src={Facebook} alt="" /></a>
        <a href="https://github.com/KingAce25"><img src={Github} alt="" /></a>
        <a href="https://www.instagram.com/oladimejiokikiola?igsh=YzljYTk1ODg3Zg=="><img src={Instagram} alt="" /></a>
        <a href="chat.whatsapp.com/08143743903"><img src={Whatsapp} alt="" /></a>
      </div>
      <div className="footer__down">
        <p><b>© 2024 John Doe</b></p>
      </div>
    </div>
  )
}

export default Footer
