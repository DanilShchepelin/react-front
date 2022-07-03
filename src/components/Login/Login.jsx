import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainStoreContext } from '../../store';
import './Login.css';
import {observer} from 'mobx-react';

function Login() {
    const {AuthStore} = useContext(MainStoreContext); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        AuthStore.getUser(email, password);
    };

    return (
        <div className="login_form">
            <h2>Login</h2>
            <form>
                <div className="login_user_box">
                    <div>E-Mail</div>
                    <input type="email" name="email" required="" value={email} onChange={event => setEmail(event.target.value)}></input>
                </div>
                <div className="login_user_box">
                    <div>Password</div>
                    <input type="password" name="password" required="" value={password} onChange={event => setPassword(event.target.value)}></input>
                </div>
                <NavLink to={'/profile'}>
                    <button className="login_button" onClick={onLogin}>Sign in</button>
                </NavLink>
                <div className='login_text'>OR</div>
                <NavLink to={'/registration'}>
                    <button className="login_button">Create new user</button>
                </NavLink>
            </form>
        </div>
    );
}


export default observer(Login);