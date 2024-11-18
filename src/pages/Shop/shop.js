import Hero from '../../components/Hero/hero';
import NewCollections from '../../components/NewCollections/newCollections';
import NewsLetter from '../../components/NewsLetter/newsLetter';
import Offers from '../../components/Offers/offers';
import Popular from '../../components/Popular/popular';
import './shop.css'

import React from 'react';

const Shop = () => {
  return (
    <div className='shop'>
      <Hero />
      <Popular  />
      <Offers />
      <NewCollections />
      <NewsLetter />
      
    </div>
  );
}

export default Shop;
