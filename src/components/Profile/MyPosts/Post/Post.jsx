import React from 'react';
import './Post.css'
// import cross from '../../../../static/media/del.png';

const cross = '../../../../static/media/del.png';

const Post = (props) => {
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
            <span className='delete_cross'>
                <img src={cross} alt="del_cross" />
            </span>
        </div>
    );
}

export default Post;