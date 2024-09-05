import React from 'react'
import './App.css'
import Header from './container/header/Header'
import Hero from './container/hero/Hero'
import Portfolio from './container/porfolio/Portfolio'
import Skills from './container/skills/Skills'
import Contact from './container/contact/Contact'
import Footer from './container/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
