import React from 'react'
import Slider from './Components/Slider'
import AboutUs from './Components/About'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
// import Testimonials from './Components/Testimonials'
import Booking from './Components/Booking'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import SpecialOffers from './Components/Specials'
import FAQSection from './Components/FAQ'
import Footer from './Components/Footer'
import Reviews from './Components/Reviews'

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutUs />
      <Services />
      <Gallery />
      <Reviews />
      <Booking />
      <SpecialOffers />      
      <FAQSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
