import React from 'react';

import './SideBar.css';

import { FaUserGroup } from "react-icons/fa6";

export default function SideBar() {

  const username = "Hermione Granger";
  return (
    <div>

      <div className="sidebarWrapper">

        <ul className="sidebarList">
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><img src="assets/hermione.png" alt="profileImage" className="sidebarProfileImage" />{username}</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><FaUserGroup className='sidebarListItemIcon'/>Friends</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><FaUserGroup className='sidebarListItemIcon'/>Orders</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><FaUserGroup className='sidebarListItemIcon'/>Diagon Alley</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><FaUserGroup className='sidebarListItemIcon'/>Feeds</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><FaUserGroup className='sidebarListItemIcon'/>The Quibbler</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><FaUserGroup className='sidebarListItemIcon'/>Show More</button></li>
        </ul>

      </div>
      
    </div>
  );
}
