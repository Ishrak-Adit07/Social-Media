import React, {useContext} from 'react'
import ProfileStat from './ProfileStat'
import { UserContext } from 'Hooks/UserContext'

const ProfileHeader = () => {

  const {currentUser, user} = useContext(UserContext);

  return (
    <div>
      
        <div className="profileUserName">
            <h2>{user.firstName + " " + user.lastName}</h2>
        </div>

        <div className="profileFullName">
            <h4>@{user.userName}</h4>
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
