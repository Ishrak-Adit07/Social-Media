import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from 'Hooks/UserContext';

import './SideBar.css';

import { FaUserGroup } from "react-icons/fa6";
import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export default function SideBar() {

  const {currentUser} = useContext(UserContext);
  const navigate = useNavigate();

  const goToCurrentUserProfile = () =>{
    navigate("/myProfile");
  }

  const userName = "Hermione Granger";
  return (
    <div>

      <div className="sidebarWrapper">

        <ul className="sidebarList">
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemNameButton" onClick={goToCurrentUserProfile}><img src={`${currentUser.profileImage}`} alt="profileImage" className="sidebarProfileImage" />{currentUser.userName}</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><GroupIcon className='sidebarListItemIcon'/>Friends</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><GroupIcon className='sidebarListItemIcon'/>Orders</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><StoreIcon className='sidebarListItemIcon'/>Diagon Alley</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><StoreIcon className='sidebarListItemIcon'/>Feeds</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton"><ImportContactsIcon className='sidebarListItemIcon'/>The Quibbler</button></li>
          <li className="sidebarListItem"><button type="button" class="btn sidebarListItemButton">Show More</button></li>
        </ul>

      </div>
      
    </div>
  );
}
