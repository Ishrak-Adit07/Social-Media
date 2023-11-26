import React,{useContext} from 'react';
import { UserContext } from 'Hooks/UserContext';

import './SideBar.css';

import { FaUserGroup } from "react-icons/fa6";

export default function SideBar() {

  const {currentUser} = useContext(UserContext);

  const userName = "Hermione Granger";
  return (
    <div>

      <div className="sidebarWrapper">

        <ul className="sidebarList">
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemNameButton"><img src={`${currentUser.profileImage}`} alt="profileImage" className="sidebarProfileImage" />{currentUser.userName}</button></li>
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
