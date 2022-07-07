import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_menu'>
        <div className='nav_menu-item'>
          <NavLink to={'/'}>Profile</NavLink>
        </div>
        <div className='nav_menu-item'>
          <NavLink to={'/users'}>Users</NavLink>
        </div>
        <div className='nav_menu-item'>
          <NavLink to={'/dialogs'}>Messages</NavLink>
        </div>
        <div className='nav_menu-item'>
          <NavLink to={'/news'}>News</NavLink>
        </div>
        <div className='nav_menu-item'>
          <NavLink to={'/settings'}>Settings</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;