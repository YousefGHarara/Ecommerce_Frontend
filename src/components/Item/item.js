import { Link } from 'react-router-dom';
import './item.css'

import React from 'react';

const Item = (p) => {
  return (
    <div className='item'>
      <Link to={`/product/${p.id}`}><img onClick={window.scrollTo(0,0)} src={p.image} alt="" /></Link> 
      <p>{p.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {p.new_price}
        </div>
        <div className="item-price-old">
          {p.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
