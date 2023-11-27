import React from 'react';
import { FaUserGroup } from "react-icons/fa6";
import ProfileImage from './ProfileImage';
import './Profiles.css';

const ProfileInfo = () => {
  return (

    <div>

        

        <div className="profileInfoWrapper">

        <div className="profileImageContainer">
            <ProfileImage />
        </div>

            <ul className="profileInfoList">
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><FaUserGroup className='profileInfoListItemIcon'/>Friends</button></li>
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><FaUserGroup className='profileInfoListItemIcon'/>Orders</button></li>
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><FaUserGroup className='profileInfoListItemIcon'/>Diagon Alley</button></li>
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><FaUserGroup className='profileInfoListItemIcon'/>Feeds</button></li>
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><FaUserGroup className='profileInfoListItemIcon'/>The Quibbler</button></li>
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><FaUserGroup className='profileInfoListItemIcon'/>Show More</button></li>
            </ul>

        </div>
    </div>
    
  );
}

export default ProfileInfo
