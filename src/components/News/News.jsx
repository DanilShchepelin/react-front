import React, {useContext, useEffect} from 'react';
import { MainStoreContext } from '../../store';
import './News.css';
import {observer} from 'mobx-react';
// import avatar from '../../static/media/def_avatar.jpg'

const News = () => {
  const {PostsStore} = useContext(MainStoreContext);
  const avatar = '../../static/media/def_avatar.jpg';

  useEffect(
    () => {
      PostsStore.getPosts();
    },
    []
  )

  return (
    <div className='content_posts'>
      {
        PostsStore.allPostsData?.map(element => {
           return (
            <div className='content_posts_item' key={element.id}>
              <div className='content_posts-img'>
                <img src={avatar} alt="user_avatar" />
              </div>
              <div className='name'>
                {element.name} {element.lastName}:
              </div>
              <div className='content_posts-text'>
                {element.text}
              </div>
              <div className='time'>
                {new Date(element.createdAt).toString().slice(0, -42)}
              </div>
            </div>
           )
        })
      }
    </div>
  );
}

export default observer(News);