import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="login_form">
                <h2>Login</h2>
                <form>
                    <div className="login_user_box">
                        <div>E-Mail</div>
                        <input type="email" name="" required=""></input>
                    </div>
                    <div className="login_user_box">
                        <div>Password</div>
                        <input type="password" name="" required=""></input>
                    </div>
                    <button className="login_button">Sign in</button>
                    <div className='login_text'>OR</div>
                    <NavLink to={'/registration'}>
                        <button className="login_button">Create new user</button>
                    </NavLink>
                </form>
            </div>
        );
    }
}

export default Login;