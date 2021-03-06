import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledMenuModal } from './styled/MenuModal.styled';
import UserbarModal from './UserbarModal';

export default function MenuModal({onclick}){

    return(
        <StyledMenuModal className="menu-modal hidden">
            <div className="btn--exit-modal" onClick={onclick}>X</div>
            <ul>
                <a href='/' className='nav-link' onClick={onclick}><li className='nav-link-item'>Home</li></a>
                <Link to='/products' className='nav-link'onClick={onclick}><li className='nav-link-item'>Products</li></Link>
                <HashLink to='/#about-section' className='nav-link' onClick={onclick}><li className='nav-link-item'>About</li></HashLink>
                <HashLink to='/#contact-section' className='nav-link' onClick={onclick}><li className='nav-link-item'>Contact</li></HashLink>
                <UserbarModal />
            </ul>
        </StyledMenuModal>
    )
}