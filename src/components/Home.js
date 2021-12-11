import Animation from './Animation'
import ProjectsLink from './ProjectsLink'

import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom'


const Home = () => {

  useEffect(() => {
    setTimeout(() => {
      setSpinning(false)
    }, 3500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTitle(true)
    }, 3500)
  }, [])

  const [spinning, setSpinning] = useState(true)
  const [title, setTitle] = useState(false)

  return (
    <>
    <main className="home-main">
      {title && 
          <section className="title">
            <div className="star-row">
              <div className="img-container">
            </div>
            <div className="flex-column">
              <h1 className="myname">Michael Fares</h1>
              <h3 className="myname-subtitle">Web Developer</h3>
              <div className="icon-row">
                  <a href="https://www.linkedin.com/in/michael-fares-52613960/" target="blank">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x"/>
                  </a>
                  <a href="https://github.com/Michael-Fares" target="blank">
                  <FontAwesomeIcon className="icon" icon={faGithubSquare} size="3x"/>
                  </a>
                  <a href="https://www.instagram.com/therealmjfares/" target="blank">
                  <FontAwesomeIcon className="icon" icon={faInstagramSquare} size="3x"/>
                  </a>
                  <a href="https://www.youtube.com/channel/UCuWqeRDlqAj-MFiFrf3xyqg" target="blank">
                  <FontAwesomeIcon className="icon" icon={faYoutubeSquare} size="3x"/>
                  </a>
                  <a href="mailto:mjfares@gmail.com">
                  <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="3x"/>
                  </a>
                </div>
              </div>
          </div>
          <Link to="/portfolio" style={{color: "white"}}><ProjectsLink /></Link>
      </section>}
      {spinning && <Animation />}
    </main>
    </>
  );
}

export default Home;
