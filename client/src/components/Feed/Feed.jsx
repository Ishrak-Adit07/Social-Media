import React, { Fragment } from 'react';
import './Feed.css';
import Storycard from 'components/Storycards/Storycard';
import Postcard from 'components/Postcard/Postcard';
import { postModalFragment, postModalID } from 'components/postModalFragment';

export default function Feed() {

  return (
    <div>

      <div>
        <Storycard />
      </div>
      <div className='PostcardWrapper'>
        <Postcard postModalID={postModalID}/>
      </div>

      {postModalFragment};

    </div>
  );
  
}
