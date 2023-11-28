import React, {useContext} from 'react';
import { UserContext } from 'Hooks/UserContext';

const ProfileImage = () => {

  const {currentUser, user} = useContext(UserContext);

  return (
    <div>
      
        <div className="profileImageBar">
            <img src={`${user.profileImage}`} alt="profileImage" className="profileImage" />
        </div>

    </div>
  )
}

export default ProfileImage;
