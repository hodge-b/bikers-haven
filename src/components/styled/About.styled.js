import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';
import bg_trail from '../../images/trail.jpg';

export const StyledAbout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${bg_trail});
    background-position: center center;
    background-size: cover;

    height: 90vh;
    padding: ${styleUtility.padding.p3};
    color: ${themedColors.white};

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        padding: ${styleUtility.padding.p5};
        height: max-content;
    }
    h2{
        margin: ${styleUtility.margin.m3} 0;
        font-size: ${styleUtility.fsize.md};
        text-transform: uppercase;
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        .wrapper{
            justify-content: space-between;
            flex-direction: row;
    
            padding: ${styleUtility.padding.p5};
            width: 70%;
            height: max-content;
        }
        h2{
            font-size: ${styleUtility.fsize.lg};
        }
        .text-wrapper{
            width: 50%;
        }
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        h2{
            font-size: ${styleUtility.fsize.xl};
        }
    }
`

/*
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient( rgba(0, 0, 0, .6), rgba(0, 0, 0, .6) ), url(${bg_trail});

    background-size: cover;
    height: 80vh;

    color: ${themedColors.white};

    .wrapper{
        display: flex;
        justify-content: space-between;

        padding: ${styleUtility.padding.p5};
        width: 70%;
        height: max-content;
    }
    h2{
        font-size: 2.2rem;
        text-transform: uppercase;
    }
    .text-wrapper{
        width: 50%;
    }
*/