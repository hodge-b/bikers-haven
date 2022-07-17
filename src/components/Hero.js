import React from 'react';
import { StyledHero } from './styled/Hero.styled';

export default function Hero(props){

    return(
        <StyledHero id="hero-section">
            <div className="wrapper">
                <h1>Experience the thrill.</h1>
                <h4>Start your journey with us.</h4>
                <br />
                <button className=''>Start Riding</button>
            </div>
        </StyledHero>
    )
}