import React, {useContext, useEffect, useState} from 'react';
import { MainStoreContext } from '../../store';
import './Settings.css';
import {observer} from 'mobx-react';

const Settings = () => {
    const {UserStore} = useContext(MainStoreContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    // useEffect(
    //     () => {
    //         UserStore.getUserData();
    //     },
    //     []
    // )

    const update = () => {
        if (name == '') {
            alert('Enter name');
            return;
        } 
        if (lastName == '') {
            alert('Enter last name');
            return;
        }

        UserStore.updateUser(name, lastName);
    }

    return (
        <div className="settings_form">
                <h2>Settings</h2>
                <form>
                    <div className="settings_user_box">
                        <div>Name</div>
                        <input 
                            type="text" 
                            name=""
                            value={name} 
                            required=""
                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        ></input>
                    </div>
                    <div className="settings_user_box">
                        <div>Last name</div>
                        <input 
                            type="text" 
                            name="" 
                            required=""
                            value={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value)
                            }}
                        ></input>
                    </div>
                    <button className="settings_button" onClick={update}>Update user</button>
                </form>
            </div>
    );
}

export default observer(Settings);
