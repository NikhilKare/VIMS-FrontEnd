import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { useEffect, useState } from 'react';
import vimsService from '../Services/VIMSService';


function Cards() {
  const [policies,setPolicies]=useState([]);
    const init = () => {
        vimsService.getAll()
          .then(response => {
            console.log('Printing policy data', response.data);
            setPolicies(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }
    
      useEffect(() => {
        init();
      }, []);
  return (
    <div className='cards'>
      <h1>Check out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              policies.map(policy=>(
                <CardItem
                src='images/img-9.jpg'
                policy={policy}                
                path='/services'
              />
              ))
              
            }
            
            {/* <CardItem
              src='images/img-2.jpg'
              text='Explore'
              label='Policy2'
              path='/services'
            /> */}
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Explore'
              label='Policy3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Explore'
              label='Policy4'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Explore'
              label='Policy5'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;