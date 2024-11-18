import './newsLetter.css'

import React from 'react';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email ID' name="" id="" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
