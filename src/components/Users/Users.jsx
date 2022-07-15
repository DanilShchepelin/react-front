import React, {useContext, useEffect} from 'react';
import './Users.css';
// import avatar from '../../static/media/def_avatar.jpg';
import { MainStoreContext } from '../../store/index.js';
import {observer} from 'mobx-react';
import { NavLink } from 'react-router-dom';

const Users = () => {
    const {UserStore} = useContext(MainStoreContext);
    const {MessagesStore} = useContext(MainStoreContext);
    
    const avatar = '../../static/media/def_avatar.jpg';
    
    useEffect(
        () => {
            UserStore.getAllUsers();
            UserStore.getUserData();
        },
        []
    )

    const findDialog = (userTwoId) => {
        console.log(userTwoId)
        // MessagesStore.getDialog(userTwoId);
        // if ( MessagesStore.dialog == null) {
        //     MessagesStore.createChat(userTwoId)
        // }
    }

    const Users = (props) => {
        return (
            <>
            {
                UserStore.currentUserData?.role == 'admin' ? 
                    <div className="users_item" key={props.id}>
                        <div className="users_item_img">
                            <img src={avatar} alt="user_avatar"></img>
                        </div>
                        <div className="users_item_name">
                            {props.name} {props.lastName}
                        </div>
                        <div className="users_item_button">
                            <button className='bun' onClick={() => {UserStore.deleteUser(props.id)}}>
                                Ban user
                            </button>
                            <NavLink to={'/dialogs/' + props.id}>
                                <button onClick={() => {
                                    MessagesStore.getDialog(props.id)
                                    if (MessagesStore.dialog == null) {
                                        MessagesStore.createChat(props.id)
                                    }
                                }}>
                                    Send message
                                </button>
                            </NavLink>  
                        </div>
                    </div> :
                    <div className="users_item" key={props.id}>
                        <div className="users_item_img">
                            <img src={avatar} alt="user_avatar"></img>
                        </div>
                        <div className="users_item_name">
                            {props.name} {props.lastName}
                        </div>
                        
                        <div className="users_item_button">
                            <NavLink to={'/dialogs/' + props.id}>
                                <button onClick={() => {
                                    MessagesStore.getDialog(props.id)
                                    if (MessagesStore.dialog == null) {
                                        MessagesStore.createChat(props.id)
                                    }
                                }}>
                                    Send message
                                </button>
                            </NavLink>  
                        </div>
                    </div>
            }
            </>
            
        )
    }

    return (
        <div className="users">
            {
                UserStore.allUsers?.map(element => {
                    return (
                        <Users key={element.id} name={element.name} lastName={element.lastName} id={element.id} />
                    )
                })
            }
        </div>
    );
}

export default observer(Users);