import { nanoid } from 'nanoid';
import React,{useState} from 'react';
import { StyledProductCard } from './styled/ProductCard.styled';

export default function ProductCard({img, title, price, inventory}){

    const [colorSelection, setColorSelection] = useState(0);


    return(
        <StyledProductCard>
            <div className="card">
                <img src={img[colorSelection]} alt='trail bike' />
                <p className="card-title">{title}</p>
                <div className="card-color-wrapper">

                </div>
                <div className="card-information-wrapper">
                    <p className='card-price'>{price}</p>
                    <p className='card-inventory'>{inventory == 0 ? 
                        <span className='out-of-stock'>X Out of stock</span> 
                    : <span className='in-stock'><i className='ri-check-fill'></i> In-stock</span> }</p>
                </div>
            </div>
        </StyledProductCard>
    )
}