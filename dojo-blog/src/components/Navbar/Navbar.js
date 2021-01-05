import React from 'react';

const navbar = () => {
  return (
    <nav className='navbar'>
      <h1>The Dojo Blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create'>New Blog</a>
        <button>click me</button>
      </div>
    </nav>
  );
};

export default navbar;
