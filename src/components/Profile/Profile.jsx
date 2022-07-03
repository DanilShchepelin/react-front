import React, { useContext, useEffect } from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import './Profile.css'
import avatar from '../../static/media/def_avatar.jpg';
import { MainStoreContext } from '../../store/index.js';
import {observer} from 'mobx-react';

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
          {/* {
            UserStore.currentUserData.map(
              (user) => {
                <div>{user.name} {user.lastName}</div>
              }
            )
          } */}
          {/* <div>{UserStore.currentUserData.name} {UserStore.currentUserData.lastName}</div>
          <div>Date of birth</div> */}
        </div>
        <MyPosts />
      </div>
    </div>
  );
}

export default observer(Profile);