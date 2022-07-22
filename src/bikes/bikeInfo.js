import { nanoid } from "nanoid";

import img_krampus_white from '../images/products/Krampus_WHITE.jpeg';
import img_krampus_black from '../images/products/Krampus_BLACK.jpeg';
import img_wednesday_green from '../images/products/Wednesday_fat_bike_GREEN.jpeg';
import img_karate_monkey_green from '../images/products/Karate_Monkey_2022_GREEN.jpeg';
import img_lowside_orange from '../images/products/Lowside_ORANGE.jpeg';

export const bikeInfo = [{
    id: nanoid(),
    image: [
        img_krampus_white,
        img_krampus_black
    ],
    colors: ['white','black'],
    title: 'Krampus',
    price: '$1,250.00',
    inventory: '12'
},
{
    id: nanoid(),
    image: [
        img_wednesday_green
    ],
    colors: ['white','black'],
    title: 'Wednesday Fat Bike',
    price: '$2,450.00',
    inventory: '6'
},
{
    id: nanoid(),
    image: [
        img_karate_monkey_green
    ],
    colors: ['white','black'],
    title: 'Karate Monkey',
    price: '$3,450.00',
    inventory: '2'
},
{
    id: nanoid(),
    image: [
        img_lowside_orange
    ],
    colors: ['white','black'],
    title: 'Lowside',
    price: '$2,150.00',
    inventory: '0'
}]