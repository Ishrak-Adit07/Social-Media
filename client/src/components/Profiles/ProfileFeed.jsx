import { postModalFragment, postModalID } from 'components/Feed/postModalFragment';
import Postcard from 'components/Postcard/Postcard';
import React from 'react';
import ProfileStat from './ProfileStat';
import Feedcard from 'components/Feedcards/Feedcard';
import '../Feed/Feed.css';


const ProfileFeed = () => {
  return (
    <div>
      
      <div className="profileStats">
        <ProfileStat />
      </div>

      <div className='PostcardWrapper'>
        <Postcard postModalID={postModalID}/>
      </div>
      <div className="FeedcardWrapper">
        <Feedcard />
      </div>

      {postModalFragment}
    </div>
  )
}

export default ProfileFeed;
