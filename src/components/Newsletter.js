import React from 'react';
import { StyledNewsletter } from './styled/Newsletter.styled';

export default function Newsletter(props){

    return(
        <StyledNewsletter>
            <h2 className='newsletter-title'>Stay Connected</h2>

            <div className="wrapper">
                <h2 className='newsletter-sub-title'>Subscribe to our newsletter</h2>
                <div className="wrapper-input">
                    <input type="email" name='email' placeholder='your email'/>
                    <button>Submit</button>
                </div>
            </div>
        </StyledNewsletter>
    )
}