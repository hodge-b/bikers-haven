import styled from 'styled-components';
import { themedColors } from './themedColors';
import { styleUtility } from '../../styles/styleUtility';


export const StyledProductPreview = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image:url(${props => props.bikeImage});
    background-position: center center;
    background-size: cover;

    padding: ${styleUtility.padding.p3};
    height: 60vh;

    color: ${themedColors.white};

    .preview-info-wrapper{
        position: absolute;
        top: 5%;
        left: 0;
        padding: ${styleUtility.padding.p1} 0;
        width: 50%;

        text-align: center;
        font-style: italic;
        font-size: ${styleUtility.fsize.xs};
        background-color: ${themedColors.accent};
    }
    .preview-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
    }
    .preview-wrapper--item-indicator > i{
        margin: 0 ${styleUtility.margin.m1};
    }
    .btn--view-bike{
        padding: ${styleUtility.padding.p2};
        margin: ${styleUtility.margin.m3} 0; 

        font-size: ${styleUtility.fsize.sm};
        color: ${themedColors.white};
        text-transform: uppercase;

        background-color: ${themedColors.accent};
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
    .i--arrow{
        font-size: ${styleUtility.fsize.lg};
        cursor: pointer;
    }
    .i--arrow:hover{
        color: ${themedColors.accent};
    }
    .i--indicator{
        font-size: ${styleUtility.fsize.xs};
    }

    @media only screen and (min-width: ${styleUtility.break.md}){
        .preview-info-wrapper{
            padding: ${styleUtility.padding.p1} ${styleUtility.padding.p5} ;
            width: max-content;
            font-size: ${styleUtility.fsize.sm};
        }
        .i--arrow{
            font-size: ${styleUtility.fsize.xxxl};
        }
    }
`

/*
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: url(${props => props.bikeImage});
    background-size: cover;

    padding: ${styleUtility.padding.p3};
    height: 60vh;

    color: ${themedColors.white};

    .preview-info-wrapper{
        position: absolute;
        top: 5%;
        left: 0;
        padding: ${styleUtility.padding.p1} ${styleUtility.padding.p5} ;
        width: max-content;

        font-style: italic;
        background-color: ${themedColors.accent};

    }
    .preview-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
    }
    .preview-wrapper--item-indicator > i{
        margin: 0 ${styleUtility.margin.m1};
    }
    .i--arrow{
        font-size: 3rem;
        cursor: pointer;
    }
    .i--arrow:hover{
        color: ${themedColors.accent};
    }
    .i--indicator{
        font-size: 1rem;
    }
*/