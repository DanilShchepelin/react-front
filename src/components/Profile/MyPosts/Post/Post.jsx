import './Post.css'

const Post = (props) => {
  return (
    <div className='content_profile_posts'>
      { props.post }
    </div>
  );
}

export default Post;