import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledSortingFilter = styled.div`
    
    .container > p{
        margin: ${styleUtility.margin.m1} 0;
    }
    .sort-filter-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
`