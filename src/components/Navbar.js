import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledNavbar } from './styled/Navbar.styled';

export default function Navbar(props){

    return(
        <StyledNavbar>
            <ul className=''>
                <a href='/'><li className=''>Home</li></a>
                <Link to='/products'><li className=''>Products</li></Link>
                <HashLink to="/#about-section"><li className=''>About</li></HashLink>
                <HashLink to="/#contact-section"><li className=''>Contact</li></HashLink>
            </ul>
        </StyledNavbar>
    )
}