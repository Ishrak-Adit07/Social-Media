import React, {useContext} from 'react'
import './Profiles.css';

import { UserContext } from 'Hooks/UserContext';

import Feed from 'components/Feed/Feed';

const Profile = () => {

  const {currentUser, user, storyDisplay, postCardPlaceHolder} = useContext(UserContext);

  return (

    <div>

        <div className='profileFeedContainer'> <Feed /> </div>

    </div>

  )
}

export default Profile;
