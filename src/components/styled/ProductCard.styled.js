import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledProductCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    .card{
        width: 90%;
        padding: ${styleUtility.padding.p1};
        margin: ${styleUtility.margin.m1} 0;
    }
    .card:hover{
        background-color: ${themedColors.secondary};
    }
    img{
        display: block;
        margin: ${styleUtility.margin.m1} auto ${styleUtility.margin.m2};
    }
    .card-information-wrapper > *{
        margin: ${styleUtility.margin.m1} 0;
    }
    .card-price{
        color: ${themedColors.primary};
    }
    .card-inventory{
        display: flex;
        align-items: center;
    }
    .out-of-stock{
        font-size: ${styleUtility.fsize.sm};
        color: ${themedColors.primary};
    }
    .in-stock{
        color: green;
    }
    .color-item{

    }
    .white{
        background-color: ${themedColors.white};
    }
    .black{
        background-color: ${themedColors.black};
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        .card{
            width: 85%;
            padding: ${styleUtility.padding.p1};
            margin: ${styleUtility.margin.m1} 0;
        }
    }
`