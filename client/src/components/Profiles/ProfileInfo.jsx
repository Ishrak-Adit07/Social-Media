import React, {useContext} from 'react';
import { UserContext } from 'Hooks/UserContext';
import { FaUserGroup } from "react-icons/fa6";
import GradeIcon from '@mui/icons-material/Grade';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ProfileImage from './ProfileImage';
import './Profiles.css';

const ProfileInfo = () => {

  const {currentUser, user, storyDisplay, postCardPlaceHolder} = useContext(UserContext);


  const specialties = [
    {
      "display" : "Transfiguration",
    },
    {
      "display" : "Prefect",
    },
    {
      "display" : "Seeker",
    }
  ]

  return (

    <div>

        <div className="profileInfoWrapper">

        <div className="profileImageContainer">
            <ProfileImage />
        </div>

            <ul className="profileInfoList">
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><HomeIcon className='profileInfoListItemIcon'/>{`${user.house}`}</button></li>
                <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><GroupIcon className='profileInfoListItemIcon'/>Orders</button></li>
                {specialties.map((specialty)=>{
                  return (
                    <li className="profileInfoListItem"><button type="button" class="btn profileInfoListItemButton"><GradeIcon className='profileInfoListItemStarIcon'/>{`${specialty.display}`}</button></li>
                  );
                })}
            </ul>

        </div>
    </div>
    
  );
}

export default ProfileInfo
