import React from 'react'
import { Route, Routes } from 'react-router'


import Home from './components/Home'
import Portfolio from './components/Portfolio'
import About from './components/About'

const Router = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
      </Routes>
  )
};

export default Router;
