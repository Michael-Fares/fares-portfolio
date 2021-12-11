import React from 'react'
import { Route, Routes } from 'react-router'


import Home from './components/Home'
import Portfolio from './components/Portfolio'

const Router = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
  )
};

export default Router;
