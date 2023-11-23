import React from 'react';

import './SideBar.css';

export default function SideBar() {
  return (
    <div>

      <div className="sidebarWrapper">

        <ul className="sidebarList">
          <li className="sidebarListItem">User name</li>
          <li className="sidebarListItem">Friends</li>
          <li className="sidebarListItem">Groups</li>
          <li className="sidebarListItem">Marketplace</li>
          <li className="sidebarListItem">Feeds</li>
          <li className="sidebarListItem">Videos</li>
          <li className="sidebarListItem">See more</li>
        </ul>

      </div>
      
    </div>
  );
}
