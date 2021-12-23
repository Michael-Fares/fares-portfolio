import React from 'react'
import { Route, Routes } from 'react-router'


import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Resume from './components/Resume'

const Router = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
  )
};

export default Router;
