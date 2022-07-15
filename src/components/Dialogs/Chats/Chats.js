import React, {useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import '../Dialogs.css';
import { MainStoreContext } from '../../../store';
import {observer} from 'mobx-react';

import socket from '../../../socket';


const DialogItem = (props) => {
    const { MessagesStore } = useContext(MainStoreContext);

    useEffect(
        () => {
            MessagesStore.getDialogs();
        },
        []
    );

    return (
        <div className='dialogs_item'>
            {
                MessagesStore.dialogsData?.map((dialog) => {
                    return (
                        <NavLink to={`/dialogs/${dialog.userTwoId}`} key={dialog.id}>
                            <button>{dialog.userTwoName}</button>
                        </NavLink>
                    )   
                })
            }
        </div>
    );
}

export default observer(DialogItem);