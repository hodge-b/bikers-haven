import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledStandFor = styled.section`
    padding: ${styleUtility.padding.p3};
    background-color: ${themedColors.background};
    text-align: center;

    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    h2{
        margin: ${styleUtility.margin.m2} 0;
        text-transform: uppercase;
        font-size: ${styleUtility.fsize.md};
    }
    span{
        color: ${themedColors.accent};
    }
    p{
        font-weight: 500;
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        padding: ${styleUtility.padding.p5};

        .wrapper{
            justify-content: space-around;
            flex-direction: row;
            height: 100%;
        }
        .text-wrapper{
            width: 40%;
        }
        h2{
            margin: ${styleUtility.margin.m2} 0;
            font-size: ${styleUtility.fsize.lg};
        }
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        height: 20vh;
        
        h2{
            margin: ${styleUtility.margin.m2} 0;
            font-size: ${styleUtility.fsize.xll};
        }
    }
`

/*
    height: 20vh;
    padding: ${styleUtility.padding.p5};
    background-color: ${themedColors.background};
    
    .wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 100%;
    }
    .text-wrapper{
        width: 40%;
    }
    h2{
        text-transform: uppercase;
        font-size: 2.2rem;
    }
    span{
        color: ${themedColors.accent};
    }

    p{
        font-weight: 500;
    }
*/