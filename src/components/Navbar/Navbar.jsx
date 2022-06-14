import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_menu'>
        <div className='nav_menu-item'>
          <NavLink to={'/profile'}>Profile</NavLink>
        </div>
        <div className='nav_menu-item'>
          <NavLink to={'/dialogs'}>Messages</NavLink>
        </div>
        <div className='nav_menu-item'>
          <a href='/news'>News</a>
        </div>
        <div className='nav_menu-item'>
          <a href='/music'>Music</a>
        </div>
        <div className='nav_menu-item'>
          <a href='/settings'>Settings</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;