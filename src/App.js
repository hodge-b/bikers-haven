import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/style.css';

// import components
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';

export default function App(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // store width in state for components
    window.addEventListener('resize',()=> setWindowWidth(window.innerWidth));

    return(
        <Router>
            <Routes>
                <Route path='/' element={<LandingPage width={windowWidth} />} />
                <Route path='/products' element={<ProductsPage />} />
            </Routes>
        </Router>
    )
}