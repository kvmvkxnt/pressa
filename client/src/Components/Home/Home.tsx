import React from 'react';
import Advert from '../Advert/Advert';
import Events from '../Events/Events';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from '../Hero/Hero';

function Home() {
  return (
    <>
      <Header />
      <main className='main' style={{ marginTop: 95 }}>
        <Hero />
        <Events />
        <Advert />
      </main>
      <Footer />
    </>
  )
}

export default Home;
