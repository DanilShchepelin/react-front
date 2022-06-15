import MyPosts from './MyPosts/MyPosts';
import './Profile.css'
import avatar from '../../static/media/def_avatar.jpg';

const Profile = () => {
  return (
    <div>
      <div className='content_profile'>
        <div className='content_profile_photo'>
          <img className='content_profile_photo-img' src={avatar} alt='user_avatar'></img>
        </div>
        <div className='content_profile_description'>
          <div>Name</div>
          <div>Date of birth</div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;