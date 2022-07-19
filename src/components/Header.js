import React from 'react';

// import components
import Navbar from './Navbar';
import Userbar from './Userbar';
import { StyledHeader } from './styled/Header.styled';
import { StyledUserbar } from './styled/Userbar.styled';
import MenuModal from './MenuModal';

export default function Header({width}){


    // onclick handler for menu
    function menuClick(e){
        const usedButton = e.target.className.split(' ')[0];

        switch(usedButton){
            case 'btn--menu':
                document.querySelector('.menu-modal').classList.remove('hidden');
                document.querySelector('.screen-overlay').classList.remove('hidden');
                document.body.style.overflow = "hidden"; // disable scroll while in modal
                break;
            case 'btn--exit-modal':
                document.querySelector('.menu-modal').classList.add('hidden');
                document.querySelector('.screen-overlay').classList.add('hidden');
                document.body.style.overflow = "auto"; // enable scroll while out of modal
                break;
            case 'nav-link-item':
                document.querySelector('.menu-modal').classList.add('hidden');
                document.querySelector('.screen-overlay').classList.add('hidden');
                document.body.style.overflow = "auto"; // enable scroll while out of modal
                break;
            default:
                break;
        }
        
    }

    return(
        <StyledHeader id='header-section'>
            <div className="header-wrapper">
                {width <= 768 ? 
                <>
                    <div className="screen-overlay hidden"></div>
                    <MenuModal onclick={menuClick} />
                    <p className='btn--menu' onClick={menuClick}>Menu</p>
                    <a href="#"><h1>Biker's Haven</h1></a>
                    <Userbar />
                </>
                :
                // LARGER SCREENS
                <>
                    <a href="#"><h1>Biker's Haven</h1></a>
                    <Navbar />
                    <Userbar />
                </>
                }
            </div>
        </StyledHeader>
    )
}