import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';

export const StyledUserbarModal = styled.div`
    

    i{
        margin: ${styleUtility.margin.m1} 0;
        cursor: pointer;
    }
    
    .cart-item-number{
        font-size: ${styleUtility.fsize.xs};
    }
    .wrapper{
        display: flex;
        flex-direction: column;
    }
    .wrapper--menu-item{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .wrapper--menu-item > i{
        margin-right: ${styleUtility.margin.m1};
    }
    .wrapper--menu-item:hover{
        color: ${themedColors.accent};
    }
`