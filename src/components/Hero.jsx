import React from 'react'

// css
import '../styles/Hero.css'

// assets
import heroImg from '../assets/hero.png'

function Hero() {
  return (
    <div className='hero' style={{backgroundImage: `url(${heroImg})`}}>
        <h1>THE DESTINATION FOR YOUR STYLE JOURNEY</h1>
        <a href="">VIEW ALL PRODUCTS</a>
    </div>
  )
}

export default Hero