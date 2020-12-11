import React from 'react';
import NavbarComponent from './components/common/navbar';
import About from './components/homepage/about';
import Cover from './components/homepage/cover';
import Services from './components/homepage/services_section';
import Footer from './components/common/footer';

const App = () => {
  return (
    <>
      <NavbarComponent variant="transparent"/>
      <Cover/>
      <About/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App
