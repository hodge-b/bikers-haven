import styled from 'styled-components';
import {themedColors} from './themedColors';
import {styleUtility} from '../../styles/styleUtility';

export const StyledNewsletter = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;

    padding: ${styleUtility.padding.p4} ${styleUtility.padding.p2};
    background-color: ${themedColors.secondary};

    .newsletter-title{
        font-size: ${styleUtility.fsize.md};
        text-transform: uppercase;
    }
    .wrapper{
        width: 90%;
        margin-top: ${styleUtility.margin.m2};
        font-size: ${styleUtility.fsize.xs};
        text-align: center;
    }
    .wrapper-input{
        margin-top: ${styleUtility.margin.m1};
        display: flex;
        justify-content: space-around;
    }
    input{
        padding: ${styleUtility.padding.p1};
        width: 70%;
    }
    button{
        padding: ${styleUtility.padding.p1};
        margin-left: ${styleUtility.margin.m2};

        font-size: .8rem;
        background-color: ${themedColors.accent};
        color: ${themedColors.white};
        text-transform: uppercase;
        border-radius: 5px;
        border:none;
        cursor: pointer;
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;

        .wrapper{
            width: 50%;
            text-align: left;
        }
        .newsletter-title{
            font-size: ${styleUtility.fsize.lg};
        }
        .newsletter-sub-title{
            padding: 0 ${styleUtility.padding.p1};
            font-size: ${styleUtility.fsize.md};
        }
        button{
            padding: ${styleUtility.padding.p2};
            font-size: ${styleUtility.fsize.sm};
        }
    }

    @media only screen and (min-width: ${styleUtility.break.xl}){
        justify-content: space-around;
        padding: ${styleUtility.padding.p5};
        height: 20vh;

        .newsletter-title{
            padding: 0;
            font-size: ${styleUtility.fsize.xll};
        }
        .newsletter-sub-title{
            font-size: ${styleUtility.fsize.lg};
        }
        .wrapper-input{
            margin-top: ${styleUtility.margin.m1};
            display: flex;
            justify-content: space-between;
        }
        input{
            padding: ${styleUtility.padding.p1};
            width: 70%;
        }
        button{
            padding: ${styleUtility.padding.p2};
            margin-left: ${styleUtility.margin.m2};

            font-size: ${styleUtility.fsize.md};
            background-color: ${themedColors.accent};
            color: ${themedColors.white};
            border-radius: 5px;
            border:none;
            cursor: pointer;
        }
    }
`

/*
    justify-content: space-around;
        padding: ${styleUtility.padding.p5};
        height: 20vh;

        .newsletter-title{
            font-size: ${styleUtility.fsize.xll};
        }
        .wrapper-input{
            margin-top: ${styleUtility.margin.m1};
            display: flex;
            justify-content: space-between;
        }
        input{
            padding: ${styleUtility.padding.p1};
            width: 70%;
        }
        button{
            padding: ${styleUtility.padding.p1};
            margin-left: ${styleUtility.margin.m2};

            font-size: .8rem;
            background-color: ${themedColors.accent};
            color: ${themedColors.white};
            border-radius: 5px;
            border:none;
            cursor: pointer;
        }
*/