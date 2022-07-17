import React from 'react';

// import components
import Navbar from './Navbar';
import Userbar from './Userbar';
import { StyledHeader } from './styled/Header.styled';

export default function Header({width}){


    // onclick handler for menu
    function menuClick(){
        
    }

    return(
        <StyledHeader id='header-section'>
            <div className="header-wrapper">
                {width <= 768 ? 
                <>
                    <p className='btn--menu' onClick={menuClick}>Menu</p>
                    <a href="#"><h1>Biker's Haven</h1></a>
                    <Userbar width={width}/>
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