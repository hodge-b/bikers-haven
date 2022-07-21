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
`