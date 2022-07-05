import React, { useContext, useEffect } from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import './Profile.css';
// import avatar from '../../static/media/def_avatar.jpg';
import { MainStoreContext } from '../../store/index.js';
import {observer} from 'mobx-react';

const avatar = '../../static/media/def_avatar.jpg';

const Profile = () => {
  const {UserStore} = useContext(MainStoreContext);

  useEffect(
    () => {
      UserStore.getUserData();
    },
    []
  );

  return (
    <div>
      <div className='content_profile'>
        <div className='content_profile_photo'>
          <img className='content_profile_photo-img' src={avatar} alt='user_avatar'></img>
        </div>
        <div className='content_profile_description'>
          <div>{UserStore.currentUserData?.name} {UserStore.currentUserData?.lastName}</div>
          <div>
            {new Date(UserStore.currentUserData?.dateOfBirth).toDateString().slice(4)}
          </div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
}

export default observer(Profile);