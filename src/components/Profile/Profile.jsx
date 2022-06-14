import MyPosts from './MyPosts/MyPosts';
import './Profile.css'

const Profile = () => {
  return (
    <div>
      <div className='content_profielBacgroung'>
        <img className='content_profielBacgroung-img' src='https://www.ontarioparks.com/images/headers/parks/winter/1200/longpoint.jpg' alt='profile-bg'></img>
      </div>
      <div className='content_profile'>
        <div className='content_profile_photo'>
          ava + descr
        </div>
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;