import React from 'react';

import './RightBar.css';
import Sponsors from 'components/Sponsors/Sponsors';
import Nextmatch from 'components/NextMatch/Nextmatch';
import ActiveFriends from 'components/ActiveFriends/ActiveFriends';

export default function RightBar() {
  return (
    <div>
      
      <div className="sponsorsWrapper">
        <Sponsors />
      </div>

      <div className="nextmatchWrapper">
        <Nextmatch />
      </div>

      <div className="activeFriends">
        <ActiveFriends />
      </div>

    </div>
  );
}
