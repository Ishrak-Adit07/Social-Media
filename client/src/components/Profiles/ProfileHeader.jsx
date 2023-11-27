import React from 'react'
import ProfileStat from './ProfileStat'

const ProfileHeader = () => {
  return (
    <div>
      
        <div className="profileUserName">
            <h2>Hermione Granger</h2>
        </div>

        <div className="profileFullName">
            <h4>Hermione Granger</h4>
        </div>

        <div className="profileBio">
            <p>Lorem, ipsum dolor sit amet <br />
                consectetur adipisicing elit. <br />
                ipsum perspiciatis omnis eligendi</p>
        </div>

        <div className="stats">
          <ProfileStat />
        </div>

    </div>
  )
}

export default ProfileHeader
