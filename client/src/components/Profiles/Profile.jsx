import React from 'react'
import ProfileImage from './ProfileImage';
import './Profiles.css';
import ProfileInfo from './ProfileInfo';
import ProfileHeader from './ProfileHeader';
import ProfileFeed from './ProfileFeed';
import Feed from 'components/Feed/Feed';

const Profile = () => {
  return (
    <div>

        <div className='profileFeedContainer'> <Feed /> </div>

    </div>
  )
}

export default Profile;
