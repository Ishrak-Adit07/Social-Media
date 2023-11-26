import React, { Fragment, useContext } from 'react';
import './Feed.css';
import Storycard from 'components/Storycards/Storycard';
import Postcard from 'components/Postcard/Postcard';
import { postModalFragment, postModalID } from './postModalFragment';
import { UserContext } from 'Hooks/UserContext';
import Feedcard from 'components/Feedcards/Feedcard';

export default function Feed() {

  const {currentUser} = useContext(UserContext);

  return (
    <div>

      <UserContext.Provider value={{ currentUser }}>

      <div className='StorycardWrapper'>
        <Storycard />
      </div>
      <div className='PostcardWrapper'>
        <Postcard postModalID={postModalID}/>
      </div>
      <div className="FeedcardWrapper">
        <Feedcard />
      </div>


      {postModalFragment}

      </UserContext.Provider>

    </div>
  );
  
}
