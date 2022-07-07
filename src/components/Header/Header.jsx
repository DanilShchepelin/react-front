import React, {useContext} from 'react';
import { MainStoreContext } from '../../store';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const {AuthStore} = useContext(MainStoreContext); 

  const logout = () => {
    AuthStore.logout();
  }

  return (
    <header className='header'>
      <div className='header_logo'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' className='header_logo-logoImg' alt='logo'></img>
      </div>

      <div className="header_sign">
        <NavLink to={'/login'} className="header_sign_out" onClick={logout}>Log out</NavLink>
      </div>
    </header>
  );
}

export default Header;