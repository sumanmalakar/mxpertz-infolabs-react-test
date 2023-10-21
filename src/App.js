import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Home from './components/Home'
import OnlyTheBest from './components/OnlyTheBest'
import Galary from './components/Galary'
import Testimonials from './components/Testimonials'
import DontMiss from './components/DontMiss'
import Info from './components/Info'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Landing />
    <Home />
    <OnlyTheBest />
    <Galary />
    <Testimonials />
    <DontMiss />
    <Info />
    <Footer />
    </>
  )
}

export default App