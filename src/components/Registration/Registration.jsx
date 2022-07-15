import React from 'react';
import { MainStoreContext } from '../../store';
import './Registration.css';

class Registration extends React.Component {
    static contextType = MainStoreContext;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            password: ''
        }
    }

    registration = () => {
        this.context.AuthStore.addUser(
            this.state.name,
            this.state.lastName,
            this.state.dateOfBirth,
            this.state.email,
            this.state.password
        )
    }

    render() {
        return (
            <div className="login_form">
                <h2>Registration</h2>
                <form>
                    <div className="login_user_box">
                        <div>Name</div>
                        <input 
                            type="text" 
                            name=""
                            value={this.state.name} 
                            required=""
                            onChange={(event) => {
                                this.setState({
                                    name: event.target.value
                                })
                            }}
                        ></input>
                    </div>
                    <div className="login_user_box">
                        <div>Last name</div>
                        <input 
                            type="text" 
                            name="" 
                            required=""
                            value={this.state.lastName}
                            onChange={(event) => {
                                this.setState({
                                    lastName: event.target.value
                                })
                            }}
                        ></input>
                    </div>
                    <div className="login_user_box">
                        <div>E-Mail</div>
                        <input 
                            type="email" 
                            name="" 
                            required=""
                            value={this.state.email}
                            onChange={(event) => {
                                this.setState({
                                    email: event.target.value
                                })
                            }}
                        ></input>
                    </div>
                    <div className="login_user_box">
                        <div>Password</div>
                        <input 
                            type="password" 
                            name="" 
                            required=""
                            value={this.state.password}
                            onChange={(event) => {
                                this.setState({
                                    password: event.target.value
                                })
                            }}
                        ></input>
                    </div>
                    <div className="login_user_box">
                        <div>Date of birth</div>
                        <input 
                            type="date" 
                            name="" 
                            required=""
                            value={this.state.dateOfBirth}
                            onChange={(event) => {
                                this.setState({
                                    dateOfBirth: event.target.value
                                })
                            }}
                        ></input>
                    </div>
                    <button className="login_button" onClick={this.registration}>Create user</button>
                </form>
            </div>
        );
    }
}

export default Registration;