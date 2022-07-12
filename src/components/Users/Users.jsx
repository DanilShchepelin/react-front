import React, {useContext, useEffect} from 'react';
import './Users.css';
// import avatar from '../../static/media/def_avatar.jpg';
import { MainStoreContext } from '../../store/index.js';
import {observer} from 'mobx-react';
import { NavLink } from 'react-router-dom';

const Users = () => {
    const {UserStore} = useContext(MainStoreContext);
    
    const avatar = '../../static/media/def_avatar.jpg';
    
    useEffect(
        () => {
            UserStore.getAllUsers();
        },
        []
    )

    return (
        <div className="users">
            {
                UserStore.allUsers?.map(element => {
                    return (
                        <div className="users_item" key={element.id}>
                            <div className="users_item_img">
                                <img src={avatar} alt="user_avatar"></img>
                            </div>
                            <div className="users_item_name">
                                {element.name} {element.lastName}
                            </div>
                            <div className="users_item_button">
                                <NavLink to={'/dialogs/' + element.id}>
                                    <button>
                                        Send message
                                    </button>
                                </NavLink>  
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default observer(Users);