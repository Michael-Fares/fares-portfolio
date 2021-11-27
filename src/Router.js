import React from 'react'
import { Route, Routes } from 'react-router'


import Home from './components/Home'

const Router = () => {
  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
      </Routes>
  )
};

export default Router;
