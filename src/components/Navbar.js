import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from './styled/Navbar.styled';

export default function Navbar(props){

    return(
        <StyledNavbar>
            <ul className=''>
                <a href='#'><li className=''>Home</li></a>
                <Link to='/products'><li className=''>Products</li></Link>
                <a href="#about-section"><li className=''>About Us</li></a>
                <a href="#contact-section"><li className=''>Contact</li></a>
            </ul>
        </StyledNavbar>
    )
}