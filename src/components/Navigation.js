import React from 'react';
import { useLocation } from 'react-router-dom'
import Hamburger from './Hamburger'

const Navigation = () => {
  const location = useLocation()
  console.log(location)
  return (
    <nav className="nav">
      <div>
      <h1>Michael Fares</h1>
      <span className="pathname">{location.pathname === "/" ? "" :`> ${location.pathname.slice(1, location.pathname.length)}`}</span>
      </div>
      <Hamburger />
    </nav>
  )
}

export default Navigation;