import styled from "styled-components";
import { themedColors } from "./themedColors";
import { styleUtility } from "../../styles/styleUtility";

export const StyledUserbar = styled.div`
    i{
        margin-right: ${styleUtility.margin.m1};
        cursor: pointer;
    }
    i:hover{
        color: ${themedColors.accent};
    }
    .icon-search{
        display: none;
    }
    .icon-user{
        display: none;
    }
    .icon-settings{
        display: none;
    }
    .cart-item-number{
        font-size: ${styleUtility.fsize.xs};
    }
    .wrapper{
        display: flex;
        align-items: center;
    }

    @media only screen and (min-width: ${styleUtility.break.lg}){
        .icon-search{
            display: block;
        }
        .icon-user{
            display: block;
        }
        .icon-settings{
            display: block;
        }
    }
`