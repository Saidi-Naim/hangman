import React from 'react';
import './NavBarStyle.css';
const NavBar = () => {
  return (
    <div className='navbarTitle' style={{ width: '100%', height: '20px', display: 'flex', justifyContent: 'center' }}>
      <a href=''>HangMan</a>
    </div>
  );
};

export default NavBar;
