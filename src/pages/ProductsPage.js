import React from 'react';
import { StyledProductsPage } from '../components/styled/ProductsPage.styled';
import img_trailbike from '../images/products/trail-bikes.jpg';
import { bikeInfo } from '../bikes/bikeInfo';
import SortingFilter from '../components/SortingFilter';
import ProductCard from '../components/ProductCard';

export default function ProductsPage(){


    const productCardElements = bikeInfo.map(item =>(
            <ProductCard 
                key={item.id} 
                img={item.image}
                colors={item.colors} 
                title={item.title} 
                price={item.price} 
                inventory={item.inventory}
            />
    ))

    return(
        <StyledProductsPage id='products-section'>
            <img src={img_trailbike} alt='Biker going on downhill trail' />
            <div className="content-wrapper">
                <h2>Trail Bikes</h2>
                <SortingFilter />
            </div>
            <div className="card-wrapper">
                {productCardElements}
            </div>
        </StyledProductsPage>
    )
}