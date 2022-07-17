import React from 'react';
import { StyledAbout } from './styled/About.styled';

export default function About(){

    return(
        <StyledAbout id="about-section">
            <div className="wrapper">
                <h2>Our History</h2>
                <div className="text-wrapper">
                    <p>In our humbled beginnings, we started as a refurbishing bike company in a garage. Over time, we managed to find our home at our current location. A bigger shop and a convenient location meant that we were able to serve you better, soon after we started.</p><br />
                    <p>After a lot of hard work and late nights, we are certain that our abilities to service our clients are unmatched.</p>
                </div>
            </div>
        </StyledAbout>
    )
}