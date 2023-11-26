import React from 'react'
import ProfileImage from './ProfileImage';
import './Profiles.css';
import ProfileInfo from './ProfileInfo';
import ProfileHeader from './ProfileHeader';

const Profile = () => {
  return (
    <div>

      <div className="profileHeadWrapper">

        <div className="profileImageContainer">
            <ProfileImage />
        </div>

        <div className="profileHeaderContainer">
            <ProfileHeader />
        </div>

      </div>

      <div className="profileBodyWrapper">

        <div className="profileInfoContainer">
            <ProfileInfo />
        </div>

      </div>

    </div>
  )
}

export default Profile;
