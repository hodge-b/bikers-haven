import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledProductsPage = styled.section`
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    .content-wrapper{
        padding: ${styleUtility.padding.p2};
    }
    h2{
        font-size: ${styleUtility.fsize.xl};
        font-weight: 300;
    }
    .card-wrapper{
        display: flex;
        justify-content: space-evenly;
        flex-direction column;
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        .card-wrapper{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        .card-wrapper{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
`