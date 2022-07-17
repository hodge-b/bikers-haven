import React,{useState} from 'react';
import { StyledProductPreview } from './styled/ProductPreview.styled';
import bg_bike01 from '../images/Karate_Monkey_2022.jpeg';
import bg_bike02 from '../images/Karate_Monkey_2015.jpeg';
import bg_bike03 from '../images/Karate_Monkey_2016.jpeg';


export default function ProductPreview(){

    const [itemPosition, setItemPosition] = useState(0);

    // only temporary to hold data, this info will be stored seperately
    const [bikeInfo] = useState([
        {
            imageURL: bg_bike01,
            title: 'Surly Karate Monkey 2022'
        },
        {
            imageURL: bg_bike02,
            title: 'Surly Karate Monkey 2016'
        },
        {
            imageURL: bg_bike03,
            title: 'Surly Karate Monkey 2015'
        }
        
    ])


    // click handler to change image on arrow click
    const arrowClick = (e) =>{
        const arrow = e.target.className.split(' ')[0];

        if(arrow === 'arrow-left'){
            if(itemPosition > 0){
                setItemPosition(itemPosition - 1);
            }else{
                setItemPosition(0);
            }
        }else if(arrow === 'arrow-right'){
            if(itemPosition < 2){
                setItemPosition(itemPosition + 1);
            }else{
                setItemPosition(2);
            }
        }
    };

    // this will be a product preview carousel
    return(
        <StyledProductPreview bikeImage={bikeInfo[itemPosition].imageURL}>
            <div className="preview-info-wrapper">
                <h2>{bikeInfo[itemPosition].title}</h2>
                <div className="preview-info-title-divider"></div>
            </div>
            <div className="preview-wrapper">
                <i className='arrow-left ri-arrow-left-s-line i--arrow' onClick={arrowClick}></i>
                <i className='arrow-right ri-arrow-right-s-line i--arrow' onClick={arrowClick}></i>
            </div>
            <div className="preview-wrapper--item-indicator">
                <i className={itemPosition === 0 ? 'ri-checkbox-blank-circle-fill i--indicator' : 'ri-checkbox-blank-circle-line i--indicator'}></i>
                <i className={itemPosition === 1 ? 'ri-checkbox-blank-circle-fill i--indicator' : 'ri-checkbox-blank-circle-line i--indicator'}></i>
                <i className={itemPosition === 2 ? 'ri-checkbox-blank-circle-fill i--indicator' : 'ri-checkbox-blank-circle-line i--indicator'}></i>
            </div>
        </StyledProductPreview>
    )
}