// App.js
import React from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Service from './components/Service.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Price from './components/Price.jsx';
import Review from './components/Review.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Service />
      <About />
      <Gallery />
      <Price />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
