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
        <li><Link to="/">HOME</Link></li>
        <li>ABOUT</li>
        <li>RESUME</li>
        <li><a href="https://michael-fares.medium.com/" target="blank">BLOG</a></li>
      </ul>
    </nav>

  }
  </>

  )
}

export default Hamburger;