import styled from 'styled-components';
import {styleUtility} from '../../styles/styleUtility';
import {themedColors} from './themedColors';
import bg_hero from '../../images/hero-image.jpg';


export const StyledHero = styled.section`
    display: flex;
    justify-content: right;
    align-items: center;

    background-image: url(${bg_hero});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    color: ${themedColors.white};

    .wrapper{
        padding: ${styleUtility.padding.p2};
        width: 60%;
        height: max-content;
        text-align: right;
    }
    h1{
        font-size: ${styleUtility.fsize.xl};
    }
    h4{
        font-size: ${styleUtility.fsize.sm};
    }
    button{
        padding: ${styleUtility.padding.p2};
        margin: ${styleUtility.margin.m3} 0; 

        font-size: ${styleUtility.fsize.sm};
        color: ${themedColors.white};
        text-transform: uppercase;

        background-color: ${themedColors.accent};
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    @media only screen and (min-width: ${styleUtility.break.sm}){
        .wrapper{
            width: 50%;
            margin-right: ${styleUtility.margin.m2};
            text-align: center;
        }
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        .wrapper{

        }
        
        button{
            margin: ${styleUtility.margin.m1} 0; 
        }
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        background-position: center center;

        h1{
            font-size: ${styleUtility.fsize.xl};
        }
        h4{
            font-size: ${styleUtility.fsize.md}
        }
    }

    @media only screen and (min-width: ${styleUtility.break.xl}){
        background-position: center center;
        height: 75vh;
        
        .wrapper{
            margin-bottom: ${styleUtility.margin.m8};
        }
        h1{
            font-size: ${styleUtility.fsize.xxl};
        }
        h4{
            font-size: ${styleUtility.fsize.lg}
        }
    }
`

/*
    display: flex;
    justify-content: right;
    align-items: center;

    background-image: url(${bg_hero});
    background-size: cover;
    height: 70vh;

    color: ${themedColors.white};

    .wrapper{
        padding: ${styleUtility.padding.p2};
        width: 50%;

        text-align: center;
    }
    h1{
        font-size: 2.5rem;
    }
    h4{
        font-size: 1.5rem;
    }
    button{
        padding: ${styleUtility.padding.p2};
        margin: ${styleUtility.margin.m3} 0; 

        font-size: 1rem;
        text-transform: uppercase;
        color: ${themedColors.white};
        background-color: ${themedColors.accent};
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
*/