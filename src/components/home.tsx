import React from 'react';
import Footer from './footer';
import About from './about';
import Tech from './technology';
import Solution from './solutions';
function Home() {
  return (
    <div>
      <About />
      <Solution />
      <Tech />
      <Footer />
    </div>
  );
}

export default Home;