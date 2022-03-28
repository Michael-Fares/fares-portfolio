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

const Home = () => {

  useEffect(() => {
    setTimeout(() => {
      setSpinning(false)
    }, 1000)
  }, [])



  const [spinning, setSpinning] = useState(true)
  
 
  return (
    <>
    <main className="home-main fade-in">
       
          <section className="title">
            <div className="star-row">
              <div className="img-container" role="img" aria-label="Michael Fares">
            </div>
            <div className="flex-column">
              <h3 className="myname-subtitle">Hey! how's it going?</h3>
              <div className="flex-row"> 
                <h3>I'm</h3><h1 className="myname">Michael Fares</h1>
              </div>
              <h3 className="myname-subtitle">A Web Developer From Houston, TX</h3>
              <div className="icon-row">
                  <a href="https://www.linkedin.com/in/michael-fares-52613960/" target="blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x"/>
                  </a>
                  <a href="https://github.com/Michael-Fares" target="blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faGithubSquare} size="3x"/>
                  </a>
                  <a href="https://www.instagram.com/therealmjfares/" target="blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faInstagramSquare} size="3x"/>
                  </a>
                  <a href="https://www.youtube.com/channel/UCuWqeRDlqAj-MFiFrf3xyqg" target="blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faYoutubeSquare} size="3x"/>
                  </a>
                  <a href="mailto:mjfares@gmail.com">
                  <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="3x"/>
                  </a>
                </div>
              </div>
          </div>
          <ProjectsLink />
      </section>
      {spinning && <Animation />}
    </main>
    </>
  );
}

export default Home;
