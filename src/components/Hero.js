import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHero } from './styled/Hero.styled';

export default function Hero(props){

    const navigate = useNavigate();

    const clickHandler = e => {
        const name = e.target.className.split(' ')[0];

        switch(name){
            case 'btn--start-riding':
                navigate('/products/#');
                break;
        }
    }

    return(
        <StyledHero id="hero-section">
            <div className="wrapper">
                <h1>Experience the thrill.</h1>
                <h4>Start your journey with us.</h4>
                <br />
                <button className='btn--start-riding' onClick={clickHandler}>Start Riding</button>
            </div>
        </StyledHero>
    )
}