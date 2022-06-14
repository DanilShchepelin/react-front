import './MyPosts.css'
import Post from './Post/Post';

const NewPost = (props) => {
  return (
    <div className='content_profile_post'>
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
    </div>
  );
}

const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      post: 'Hello'
    },
    {
      id: 2,
      post: 'Пошел на хуй'
    },
    {
      id: 3,
      post: 'Супер'
    },
    {
      id: 4,
      post: 'Супер'
    },
  ];

  let postsElement = postsData
    .map((post) => {
      return <Post post={post.post} />
    });

  return (
    <div>
      <NewPost />

      {postsElement}
    </div>
  );
}

export default MyPosts;