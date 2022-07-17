import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    padding: ${styleUtility.padding.p1};
    margin: ${styleUtility.margin.m1};

    background-color: ${themedColors.white};
    border-radius: 5px;
    box-shadow: 0 0 3px .5px black;
    font-size: ${styleUtility.fsize.sm};

    i{
        font-size: ${styleUtility.fsize.xl};
        color: ${themedColors.accent};
    }
    .body{
        font-weight: bold;
    }
    .subBody{
        font-weight: bold;
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        font-size: ${styleUtility.fsize.sm};
    }
`