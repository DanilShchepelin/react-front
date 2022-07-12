import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams, BrowserRouter, Route, Routes } from 'react-router-dom';
import './Dialogs.css';
import {observer} from 'mobx-react';
import { MainStoreContext } from '../../store';
import DialogItem from './Chats/Chats';
import MessagesItem from './Messages/Messages';


const Dialogs = () => {
  const {MessagesStore} = useContext(MainStoreContext);

  return (
    <div className='dialogs'>
      <div className='dialogs_items'>
        <DialogItem />
      </div>
        <div className='dialogs_messages'>
          <Routes>
            <Route path=':userTwoId' element={<MessagesItem />} />
          </Routes>
        </div>
    </div>
  );
}

export default observer(Dialogs);