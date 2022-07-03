import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css'

const DialogItem = (props) => {
  return (
    <div className='dialogs_item'>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

const MessageItem = (props) => {
  return (
    <div className='dialogs_message'>
      {props.message}
    </div>
  );
}

const Dialogs = () => {
  let dialogsData = [
    {
      id: 1,
      name: 'Danil'
    },
    {
      id: 2,
      name: 'Hui'
    },
    {
      id: 3,
      name: 'fdsfsd'
    },
    {
      id: 4,
      name: 'Danfdsafdsil'
    },
    {
      id: 5,
      name: 'Danfdsafdsil'
    },
  ];

  let messagesData = [
    {
      id: 1,
      message: 'Пошел на хуй'
    },
    {
      id: 2,
      message: 'Пошел на хуй'
    },
    {
      id: 3,
      message: 'Пошел на хуй'
    },
    {
      id: 4,
      message: 'Пошел на хуй'
    },
  ];

  let dialogsElement = dialogsData
    .map((dialog) => {
      return <DialogItem name={dialog.name} id={dialog.id} />
    });

  let messagesElement = messagesData
    .map((message) => {
      return <MessageItem message={message.message} />
    });

  return (
    <div className='dialogs'>
      <div className='dialogs_items'>
        {dialogsElement}
      </div>

      <div className='dialogs_messages'>
        {messagesElement}
      </div>
    </div>
  );
}

export default Dialogs;