import styled from "styled-components";
import { themedColors } from "./themedColors";
import { styleUtility } from "../../styles/styleUtility";

export const StyledNavbar = styled.nav`
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    li{
        margin: 0 ${styleUtility.margin.m1};
        cursor: pointer;
    }
    li:hover{
        color: ${themedColors.accent};
    }
`