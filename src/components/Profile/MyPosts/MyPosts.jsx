import React from 'react';
import { MainStoreContext } from '../../../store';
import './MyPosts.css'
import Post from './Post/Post.jsx';
import {observer} from 'mobx-react';
// import avatar from '../../../static/media/def_avatar.jpg';

const avatar = '../../../static/media/def_avatar.jpg';

class MyPosts extends React.Component {
    static contextType = MainStoreContext;

    componentDidMount() {
        this.context.PostsStore.getUserPosts();
    }

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    addPost = () => {
        this.context.PostsStore.addNewPost(this.state.text);
    }

    render() {
        return (
            <div>
                <form>
                    <h3>My post</h3>
                    <div className='content_profile_newPost'>
                        <div>
                            <input 
                                type='text' 
                                placeholder='Enter your message to people...' 
                                value={this.state.text} 
                                onChange={(event) => this.setState({text: event.target.value})}
                            ></input>
                        </div>
                        <div>
                            <button 
                                className='post_button'
                                onClick={this.addPost}
                            >Send post</button>
                        </div>
                    </div>
                </form>

                {
                    this.context.PostsStore.postsData?.map(element => {
                        return <Post key={element.id} text={element.text} name={element.name} avatar={avatar} postId={element.id}/>
                    })
                }
            </div>
        );
    }
}

export default observer(MyPosts);