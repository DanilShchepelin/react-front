import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const logout = () => {
    fetch('http://localhost:8080/api/login/logout', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
      credentials: 'include'
    });
  }

  return (
    <header className='header'>
      <div className='header_logo'>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' className='header_logo-logoImg' alt='logo'></img>
      </div>

      <div className="header_sign">
        <NavLink to={'/login'} className="header_sign_in">Sign in</NavLink>
        <NavLink to={'/login'} className="header_sign_out" onClick={logout}>Log out</NavLink>
      </div>
    </header>
  );
}

export default Header;