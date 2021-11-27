import Animation from './Animation'

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
    }, 4000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setTitle(true)
    }, 4000)
  }, [])

  const [spinning, setSpinning] = useState(true)
  const [title, setTitle] = useState(false)

  return (
    <>
    <main className="flex-column">
      {title && <section className="title">
        <div className="img-container">

        </div>
        <h1>Michael Fares</h1>
        <h3>Web Developer</h3>
        <div className="icon-row">
        <a href="https://www.linkedin.com/in/michael-fares-52613960/" target="blank">
        <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/>
        </a>
        <a href="https://github.com/Michael-Fares" target="blank">
        <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x"/>
        </a>
        <a href="https://www.instagram.com/therealmjfares/" target="blank">
        <FontAwesomeIcon className="icon" icon={faInstagramSquare} size="2x"/>
        </a>
        <a href="https://www.youtube.com/channel/UCuWqeRDlqAj-MFiFrf3xyqg" target="blank">
        <FontAwesomeIcon className="icon" icon={faYoutubeSquare} size="2x"/>
        </a>
        <a href="mailto:mjfares@gmail.com">
        <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="2x"/>
        </a>
       

        </div>
      </section>}
      {spinning && <Animation />}
    </main>
    </>
  );
}

export default Home;
