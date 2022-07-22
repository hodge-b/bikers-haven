import React from 'react';
import { StyledSortingFilter } from './styled/SortingFilter.styled';

export default function SortingFilter(){

    return(
        <StyledSortingFilter>
            <div className="container">
                <p>4 BIKES</p>
                {/* <div className="sort-filter-container">
                    <p>SORT </p>
                    <p>FILTER</p>
                </div> */}
            </div>
        </StyledSortingFilter>
    )
}