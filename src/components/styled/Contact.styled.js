import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledContact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${styleUtility.padding.p2};
    background-color: ${themedColors.secondary};
    text-align: center;

    h2{
        margin: ${styleUtility.margin.m3} 0;
        text-transform: uppercase;
        font-size: ${styleUtility.fsize.md};
    }
    .card-wrapper{
        display: grid;
        grid-template-columns: repeat(1,1fr);

        margin-top: ${styleUtility.margin.m3};
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        height: 40vh;

        h2{
            font-size: ${styleUtility.fsize.xl};
        }
        .card-wrapper{
            grid-template-columns: repeat(3,1fr);
        }
    }
`

/*
     display: flex;
    justify-content: center;
    align-items: center;

    height: 40vh;
    padding: ${styleUtility.padding.p2};

    text-align: center;
    background-color: ${themedColors.secondary};

    h2{
        text-transform: uppercase;
        font-size: 2.2rem;
    }
    .card-wrapper{
        display: grid;
        grid-template-columns: repeat(3,1fr);

        margin-top: ${styleUtility.margin.m3};
    }
*/