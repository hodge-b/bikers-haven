import React from 'react';
import { StyledContact } from './styled/Contact.styled';
import Card from './Card';

export default function Contact(){

    return(
        <StyledContact id='contact-section'>
            <div className="wrapper">
                <h2>Need to get in touch?</h2>
                <div className="card-wrapper">
                    <Card 
                        icon={'ri-cellphone-line'}
                        title={'Give us a call'} 
                        body={'(414) 555.2552'}   
                    />
                    <Card 
                        icon={'ri-mail-line'}
                        title={'Send us an email'} 
                        body={'support@bikershaven.ca'}   
                    />
                    <Card 
                        icon={'ri-map-pin-line'}
                        title={'Come see us'} 
                        body={'900 Mountain Heights Rd'}
                        subBody={'Guelph, ON, P1S 2S1'}   
                    />
                </div>
            </div>
        </StyledContact>
    )
}