import React from 'react'
import './Cards.css';
import Card from '../Card/Card';
import { cardsData } from '../../Data/Data';

const Cards = () => {
  return (
    
    <div className='cards'>
      {cardsData.map((item,index) =>{
        return (
        <div key = {index} className="parentContainer">
         <Card  {...item}/>
        </div>
        )
      })} 
    </div>
   
  )
}

export default Cards