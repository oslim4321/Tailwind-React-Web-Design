import React from 'react'
import About from './About'
import Allinone from './Allinone'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Support from './Support'

function WebApp() {
  return (
    <div>
          <Navbar />
          <Hero />
          <About />
          <Support />
          <Allinone />
          <Pricing />
    </div>
  )
}

export default WebApp