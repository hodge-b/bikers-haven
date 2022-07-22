import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {bikeInfo} from '../bikes/bikeInfo';
import { StyledProductPreview } from './styled/ProductPreview.styled';

export default function ProductPreview(){

    const [itemPosition, setItemPosition] = useState(0);
    const navigate = useNavigate();

    // click handler to change image on arrow click
    const clickHandler = (e) =>{
        const name = e.target.className.split(' ')[0];

        switch(name){
            case 'arrow-left':
                if(itemPosition > 0){
                    setItemPosition(itemPosition - 1);
                    break;
                }else{
                    setItemPosition(0);
                    break;
                }
            case 'arrow-right':
                if(itemPosition < 2){
                    setItemPosition(itemPosition + 1);
                    break;
                }else{
                    setItemPosition(2);
                    break;
                }
            case 'btn--view-bike':
                navigate('/products');
                break;

        }

        // if(arrow === 'arrow-left'){
        //     if(itemPosition > 0){
        //         setItemPosition(itemPosition - 1);
        //     }else{
        //         setItemPosition(0);
        //     }
        // }else if(arrow === 'arrow-right'){
        //     if(itemPosition < 2){
        //         setItemPosition(itemPosition + 1);
        //     }else{
        //         setItemPosition(2);
        //     }
        // }
    };

    // this will be a product preview carousel
    return(
        <StyledProductPreview bikeImage={bikeInfo[itemPosition].image[0]}>
            <div className="preview-info-wrapper">
                <h2>{bikeInfo[itemPosition].title}</h2>
                <div className="preview-info-title-divider"></div>
            </div>
            <div className="preview-wrapper">
                <i className='arrow-left ri-arrow-left-s-line i--arrow' onClick={clickHandler}></i>
                <i className='arrow-right ri-arrow-right-s-line i--arrow' onClick={clickHandler}></i>
            </div>
            {/* <button className='btn--view-bike' onClick={clickHandler}>View Bike</button> */}
            <div className="preview-wrapper--item-indicator">
                <i className={itemPosition === 0 ? 'ri-checkbox-blank-circle-fill i--indicator' : 'ri-checkbox-blank-circle-line i--indicator'}></i>
                <i className={itemPosition === 1 ? 'ri-checkbox-blank-circle-fill i--indicator' : 'ri-checkbox-blank-circle-line i--indicator'}></i>
                <i className={itemPosition === 2 ? 'ri-checkbox-blank-circle-fill i--indicator' : 'ri-checkbox-blank-circle-line i--indicator'}></i>
            </div>
        </StyledProductPreview>
    )
}