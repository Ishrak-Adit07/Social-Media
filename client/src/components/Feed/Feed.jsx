import React, { Fragment } from 'react';
import './Feed.css';
import Storycard from 'components/Storycards/Storycard';
import Postcard from 'components/Postcard/Postcard';
import { postModalFragment, postModalID } from 'components/postModalFragment';
import Feedcard from 'components/Feedcards/Feedcard';

export default function Feed() {

  return (
    <div>

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

    </div>
  );
  
}
