import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopList from './components/TopList/TopList';
import Banner  from './components/Banner/Banner';

import BgImage from './assets/fondo.jpeg';
import OurServices from './components/OurServices/OurServices';

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className='min-h-screen bg-white/50
      backdrop-blur-3xl'>
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  );
};

export default App