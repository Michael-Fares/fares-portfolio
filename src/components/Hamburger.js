import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Hamburger = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
  <>
  <button onClick={handleClick} className={isOpen? "hamburger open" : "hamburger"}>
    <div></div>
  </button>
  {isOpen && 
 
    <nav className="hamburger-links">
      <ul className="links-box">
        <li onClick={handleClick}><Link to="/">HOME</Link></li>
        <li onClick={handleClick}><Link to="/about">ABOUT</Link></li>
        <li onClick={handleClick}>RESUME</li>
        <li><a href="https://michael-fares.medium.com/" target="blank">BLOG</a></li>
      </ul>
    </nav>

  }
  </>

  )
}

export default Hamburger;