import React from 'react';
import { StyledStandFor } from './styled/StandFor.styled';

export default function StandFor(){

    return(
        <StyledStandFor>
            <div className="wrapper">
                <h2>What we stand for</h2>
                <div className="text-wrapper">
                    <p>We understand the need for affordable bikes. Not only affordable, but great build quality to hold up through the most unforgiving trail rides.</p><br/>
                    <p>We know these are great bikes, <span>we want you to exerience them!</span></p>
                </div>
            </div>
            
        </StyledStandFor>
    )
}