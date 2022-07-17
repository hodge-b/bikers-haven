import React, {useState} from 'react';
import './styles/style.css';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import ProductPreview from './components/ProductPreview';
import StandFor from './components/StandFor';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // store width in state for components
    window.addEventListener('resize',()=> setWindowWidth(window.innerWidth));

    return(
        <main>
            <Header width={windowWidth} />
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