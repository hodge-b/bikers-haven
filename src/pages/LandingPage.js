import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import ProductPreview from '../components/ProductPreview';
import StandFor from '../components/StandFor';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function LandingPage({width}){
    return(
        <main>
            <Header width={width} />
            <Hero />
            <Newsletter />
            <ProductPreview />
            <StandFor />
            <About />
            <Contact />
            <Footer />
        </main>
    )
}