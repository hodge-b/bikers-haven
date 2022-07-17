import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledFooter = styled.footer`
    padding: ${styleUtility.padding.p3};

    color: ${themedColors.white};
    background-color: ${themedColors.black};
    text-align: center;

    h1{
        margin-bottom: ${styleUtility.margin.m2};
        color: ${themedColors.accent};
        font-size: ${styleUtility.fsize.lg};
        font-style: italic;
        text-transform: uppercase;
    }
    p{
        font-size: ${styleUtility.fsize.xs};
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        text-align: left;

        h1{
            font-size: ${styleUtility.fsize.xl};
        }
        p{
            font-size: ${styleUtility.fsize.xs};
            text-align: center;
        }
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        text-align: left;

        h1{
            font-size: ${styleUtility.fsize.xll};
            margin-bottom: ${styleUtility.margin.m5};
        }
        p{
            font-size: ${styleUtility.fsize.xs};
            text-align: center;
        }
    }
`

/*
    height: 15vh;
    color: ${themedColors.white};
    background-color: ${themedColors.black};
    
    h1{
        margin-bottom: ${styleUtility.margin.m5};
        color: ${themedColors.accent};
        font-size: 3.5rem;
        font-style: italic;
        text-transform: uppercase;
    }
    p{
        padding: 0;
        font-size: .8rem;
        text-align: center;
    }
*/