import React from 'react';
import { StyledMenuModal } from './styled/MenuModal.styled';
import UserbarModal from './UserbarModal';

export default function MenuModal({onclick}){

    return(
        <StyledMenuModal className="menu-modal hidden">
            <div className="btn--exit-modal" onClick={onclick}>X</div>
            <ul>
                <a href='#' className='nav-link' onClick={onclick}><li className='nav-link-item'>Home</li></a>
                <a href='#' className='nav-link' onClick={onclick}><li className='nav-link-item'>Products</li></a>
                <a href='#about-section' className='nav-link' onClick={onclick}><li className='nav-link-item'>About</li></a>
                <a href='#contact-section' className='nav-link' onClick={onclick}><li className='nav-link-item'>Contact</li></a>
                <UserbarModal />
            </ul>
        </StyledMenuModal>
    )
}