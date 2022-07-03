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
import { useContext } from 'react';
import { MainStoreContext } from './store';
import {observer} from 'mobx-react';

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
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/dialogs/*' element={<Dialogs />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/settings' element={<Settings />} /> 
                    <Route path='/registration' element={<Registration />} /> 
                  </Routes> :
                  <Login />
              }
                                                  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default observer(App);

