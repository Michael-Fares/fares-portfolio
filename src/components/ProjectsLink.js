import React from 'react'
import { Link } from 'react-router-dom'


const ProjectsLink = () => {
  return (
<Link to="/portfolio" style={{display: "inline-block", color: "white"}}>
<div className="projects-link">
      <h1>PORTFOLIO</h1>
    <div className="rotating-star">
      <div className="star-square"></div>
      <div className="star-square transform"></div>
    </div>  
  </div>
   </Link>
  )
}

export default ProjectsLink;