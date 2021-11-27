import Animation from './Animation'

import React, { useState, useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    setTimeout(() => {
      setSpinning(false)
    }, 4000)
  }, [])

  const [spinning, setSpinning] = useState(true)

  return (
    <>
    <div className="flex-column">
      {spinning && <Animation />}
    </div>
    </>
  );
}

export default Home;
