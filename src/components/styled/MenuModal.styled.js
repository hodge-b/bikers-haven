import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledMenuModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 75%;
    height: 100vh;
    padding: ${styleUtility.padding.p2};

    background-color: ${themedColors.white};
    z-index: 2;

    .nav-link-item{
        margin: ${styleUtility.margin.m2} 0;
    }

    .btn--exit-modal{
        position: absolute;
        top: 2%;
        right: 10%;

        width: 5%;
        height: 5%;
        margin-bottom: ${styleUtility.margin.m2};
    }
`