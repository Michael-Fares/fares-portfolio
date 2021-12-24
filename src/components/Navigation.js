import React from 'react';
import { useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  console.log(location)
  return (
    <nav className="nav">
      <h1>Michael Fares <span className="pathname">{location.pathname === "/" ? "" :`> ${location.pathname.slice(1, location.pathname.length)}`}</span></h1>
    </nav>
  )
}

export default Navigation;