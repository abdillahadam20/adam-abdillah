import React from 'react'
import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import Portfolio from '../Portfolio'

export default function SPA() {
  return (
    <div className="SPA">
      <HeroSection/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}
