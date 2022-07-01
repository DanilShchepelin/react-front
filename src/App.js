import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Registration from './components/Registration/Registration'
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
            <Routes>
              {
                AuthStore.isLoggedIn ?
                  <>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/dialogs/*' element={<Dialogs />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/settings' element={<Settings />} /> 
                    <Route path='/registration' element={<Registration />} /> 
                  </> :
                  <Route path='/login' element={<Login />} />
              }
            </Routes>                                      
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

