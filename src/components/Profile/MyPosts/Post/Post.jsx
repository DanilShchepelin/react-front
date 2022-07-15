import React, {useContext, useState} from 'react';
import './Post.css';
import { MainStoreContext } from '../../../../store/index.js';
import cross from '../../../../static/media/del.png';

// const cross = '../../../../static/media/del.png';

const Post = (props) => {
    // const cross = '../../../../static/media/del.png';
    const {PostsStore} = useContext(MainStoreContext);

  
    return (
        <div className='content_profile_posts'>
            <div className='content_profile_posts-img'>
                <img src={props.avatar} alt="user_avatar" />
            </div>
            <div>
                {props.name}
            </div>
            <span className='content_profile_posts-text'>
                {props.text}
            </span>
            <span className='delete_cross' onClick={() => {PostsStore.deletePost(props.postId)}}>
                <img src='../../../../static/media/del.png' alt="del_cross" />
            </span>
        </div>
    );
}

export default Post;