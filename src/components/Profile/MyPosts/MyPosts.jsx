import React from 'react';
import './MyPosts.css'
import Post from './Post/Post.jsx';
import avatar from '../../../static/media/def_avatar.jpg';


class MyPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.postData = [
            {
                id: 1,
                value: 'Hello',
                avatar: avatar
            },
            {
                id: 2,
                value: 'Пошел на хуй',
                avatar: avatar
            },
            {
                id: 3,
                value: 'Супер',
                avatar: avatar
            },
            {
                id: 4,
                value: 'Супер',
                avatar: avatar
            },
        ];
    }

    render() {
        return (
            <div>
                <form>
                    <h3>My post</h3>
                    <div className='content_profile_newPost'>
                        <div>
                            <input type='text' placeholder='Enter your message to people...'></input>
                        </div>
                        <div>
                            <button className='post_button'>Send post</button>
                        </div>
                    </div>
                </form>

                {
                    this.postData.reverse().map(element => {
                        return <Post key={element.id} value={element.value} avatar={element.avatar}/>
                    })
                }
            </div>
        );
    }
}

export default MyPosts;