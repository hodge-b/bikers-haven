import React from 'react';
import { StyledNavbar } from './styled/Navbar.styled';

export default function Navbar(props){

    return(
        <StyledNavbar>
            <ul className=''>
                <a href='#'><li className=''>Home</li></a>
                <li className=''>Products</li>
                <a href="#about-section"><li className=''>About Us</li></a>
                <a href="#contact-section"><li className=''>Contact</li></a>
            </ul>
        </StyledNavbar>
    )
}