import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_logo'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' className='header_logo-logoImg' alt='logo'></img>
      </div>

      <div className="header_sign">
        <NavLink to={'/login'} className="header_sign_in">Sign in</NavLink>
        <NavLink to={'/login'} className="header_sign_out">Sign out</NavLink>
      </div>
    </header>
  );
}

export default Header;