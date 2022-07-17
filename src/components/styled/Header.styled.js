import styled from 'styled-components';
import {themedColors} from './themedColors';
import { styleUtility } from '../../styles/styleUtility'; 

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    padding: ${styleUtility.padding.p1};

    color: ${themedColors.black};
    background-color: ${themedColors.white};
    z-index: 1;
    
    .header-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        color: ${themedColors.accent};
        font-size: 1.2rem;
        font-style: italic;
        text-transform: uppercase;
        cursor: pointer;
    }
    .btn--menu{
        font-size: ${styleUtility.fsize.xs};
    }
    .btn--menu:hover{
        color: ${themedColors.accent};
    }

    @media only screen and (min-width: ${styleUtility.break.sm}){
        .btn--menu{
            font-size: ${styleUtility.fsize.sm};
        }
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        padding: ${styleUtility.padding.p1} ${styleUtility.padding.p3};
    }
`

/*
    position: sticky;
    top: 0;
    padding: ${styleUtility.padding.p1};

    color: ${themedColors.black};
    background-color: ${themedColors.white};
    z-index: 1;
    
    .header-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        padding-left: ${styleUtility.padding.p10};
        padding-right: ${styleUtility.padding.p1};

        color: ${themedColors.accent};
        font-size: 1.2rem;
        font-style: italic;
        text-transform: uppercase;
    }
    .btn--menu{
        font-size: ${styleUtility.fsize.xs};
    }
*/