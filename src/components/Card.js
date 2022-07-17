import React from 'react';
import { StyledCard } from './styled/Card.styled';


export default function Card({icon, title, body, subBody}){

    return(
        <StyledCard>
            <div className="wrapper">
                <i className={icon}></i>
                <div className="content-wrapper">
                    <p className="title">{title}</p>
                    <hr/>
                    <p className="body">{body}</p>
                    <p className="subBody">{subBody}</p>
                </div>
            </div>
        </StyledCard>
    )
}