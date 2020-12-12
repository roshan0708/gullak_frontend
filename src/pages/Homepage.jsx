import React from 'react';
import Footer from '../components/common/footer';
import About from '../components/homepage/about';
import Cover from '../components/homepage/cover';
import Services from '../components/homepage/services_section';
import NavbarComponent from "../components/common/navbar";

const Homepage = () => {
    return (
      <>
        <NavbarComponent variant="transparent" />
        <Cover />
        <About />
        <Services />
        <Footer />
      </>
    );
}

export default Homepage