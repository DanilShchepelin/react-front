import React from 'react';
import './Registration.css';

class Registration extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="login_form">
                <h2>Login</h2>
                <form>
                    <div className="login_user_box">
                        <div>Name</div>
                        <input type="text" name="" required=""></input>
                    </div>
                    <div className="login_user_box">
                        <div>Last name</div>
                        <input type="text" name="" required=""></input>
                    </div>
                    <div className="login_user_box">
                        <div>E-Mail</div>
                        <input type="email" name="" required=""></input>
                    </div>
                    <div className="login_user_box">
                        <div>Password</div>
                        <input type="password" name="" required=""></input>
                    </div>
                    <div className="login_user_box">
                        <div>Date of birth</div>
                        <input type="date" name="" required=""></input>
                    </div>
                    <button className="login_button">Create user</button>
                </form>
            </div>
        );
    }
}

export default Registration;