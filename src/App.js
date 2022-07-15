import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings.jsx';
import Registration from './components/Registration/Registration.jsx'
import Users from './components/Users/Users.jsx';
import { useContext } from 'react';
import { MainStoreContext } from './store';
import {observer} from 'mobx-react';

// import io from 'socket.io-client';

// const socket = io('http://localhost:8081', { transports: ['websocket'] });

const App = () => {
  const {AuthStore} = useContext(MainStoreContext);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className='row'>
          <Navbar />
          <div className='content'>
              {
                AuthStore.isLoggedIn ?
                  <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/dialogs/*' element={<Dialogs />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/settings' element={<Settings />} /> 
                    {/* <Route path='/registration' element={<Registration />} />  */}
                  </Routes> :
                  <>
                    <Login />
                    <Registration />
                  </>
                  
              }                                      
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default observer(App);

