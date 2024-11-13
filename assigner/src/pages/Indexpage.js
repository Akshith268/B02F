import React from 'react';
import Navbar from '../components/Navbar';

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <div className='hero'>
        <img src='./hero.png' alt='hero' />
      </div>
    </div>
  );
}
