import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import '../Dialogs.css';
import { MainStoreContext } from '../../../store';
import { observer } from 'mobx-react';

import socket from '../../../socket';


const MessageItem = () => {
    const { MessagesStore } = useContext(MainStoreContext);
    const params = useParams();
    const userTwoId = params.userTwoId;

    const [text, setText] = useState('');

    const sendMessage = () => {
        MessagesStore.addNewMessage(text, userTwoId);
        setText('');
    }



    useEffect(
        () => {
            MessagesStore.getDialog(userTwoId);
            MessagesStore.getMessages(userTwoId)
        },
        []
    );

    
    
    return (
        <div>
            <div className="dialogs_messageBlock">
                {
                    MessagesStore.messagesData?.map((message) => {
                        return (
                            <div className="dialogs_message_item" key={message.id}>
                                <div className="name">{message.userName}:</div>
                                <div className="text">{message.text}</div>
                                <div className="time">{new Date(message.createdAt).toString().slice(0, -42)}</div>
                            </div>
                        )
                    })
                }
            </div>
            <form className="dialogs_sendMessage">
                <input type="text" name="text" autoComplete="off" value={text} onChange={event => setText(event.target.value)}></input>
                <button type="button" onClick={sendMessage}>Send</button>
            </form>
        </div>
    );
}

export default observer(MessageItem);