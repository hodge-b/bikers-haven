import React from 'react';
import { StyledUserbar } from './styled/Userbar.styled';

export default function Userbar(){

    return(
        <StyledUserbar>
            <div className="wrapper">
                <i className='icon-search ri-search-line'></i>
                <div className="wrapper">
                    <p className='cart-item-number'>(0)</p>
                    <i className='icon-cart ri-shopping-cart-line'></i>
                </div>
                <i className='icon-user ri-user-line'></i>
                <i className='icon-settings ri-settings-3-line'></i>
            </div>
        </StyledUserbar>
    )
}