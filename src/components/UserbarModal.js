import React from 'react';
import { StyledUserbarModal } from './styled/UserbarModal.styled';

export default function Userbar({width, type}){

    return(
        <StyledUserbarModal>
            <hr />
            <div className="wrapper">
                <div className="wrapper--menu-item">
                    <i className='icon-search ri-search-line'></i>
                    <p>Search</p>
                </div>
                <div className="wrapper--menu-item">
                    <p className='cart-item-number'></p>
                    <i className='icon-cart ri-shopping-cart-line'></i>
                    <p>Cart</p>
                </div>
                <div className="wrapper--menu-item">
                    <i className='icon-user ri-user-line'></i>
                    <p>Account</p>
                </div>
                <div className="wrapper--menu-item">
                    <i className='icon-settings ri-settings-3-line'></i>
                    Settings
                </div>
            </div>
        </StyledUserbarModal>
    )
}