import React, { useCallback, useState } from 'react'


const Hamburger = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
  <>
  <button onClick={handleClick} class="hamburger" id="hamburger">
    <div class="line none"></div>
  </button>
  {isOpen && 
 
    <nav className="hamburger-links">
      <ul className="links-box">
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