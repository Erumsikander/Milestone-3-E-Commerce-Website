import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Progresser from './components/Progresser'
// import Productlist from './components/Productlist'
import Banner from './components/Banner'
// import Offer from './components/Offer'
// import Card from './components/Card'
// import Testimonals from './components/Testimonals'
// import Footer from './components/Footer'



export default function App() {
  return (
    <div className='text-white bg-gradient-to-br  from-[#100f0f] to-[#1b0c0a] min-h-screen'>
    
            {/* My All Components Here */}

    < Navbar />
    < Carousel />
    < Progresser />
    {/* < Productlist /> */}
    < Banner />
    {/* < Offer />
    < Card />
    < Testimonals />
    < Footer /> */}
    
      </div>
  )   
}
