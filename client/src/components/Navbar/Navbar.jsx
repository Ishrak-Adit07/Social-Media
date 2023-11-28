import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from 'Hooks/UserContext';

import './Navbar.css';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import { GiOwl } from "react-icons/gi";

export default function Navbar() {
    
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();

    const goToCurrentUserProfile = () =>{
      navigate("/myProfile");
    }

  return (
    <div>
      
        <div className="navbarContainer">

            <div className="navbarLeft">
                <span className='homeLogo'><GiOwl className='titleIcon'/></span>
            </div>

            <div className="navbarCenter">
                <div className="navSearchBar">
                    <SearchIcon className='navSearchIcon'/>
                    <input type="text" className="navSearchInput" placeholder='Search owls'/>
                </div>
            </div>

            <div className="navbarFeedCenter">
                <button className='navbarFeedButton'>Home</button>
                <button className='navbarFeedButton'>Home</button>
                <button className='navbarFeedButton'>Home</button>
                <button className='navbarFeedButton'>Home</button>
                <button className='navbarFeedButton'>Home</button>
            </div>


            <div className="navbarRight">

            <div className="navbarIcons">
                    <div className="navbarIcon">
                        <PersonIcon />
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIcon">
                        <TextsmsIcon />
                        <span className="navbarIconBadge">4</span>
                    </div>
                    <div className="navbarIcon">
                        <NotificationsIcon />
                        <span className="navbarIconBadge">7</span>
                    </div>

                    <img src={`${currentUser.profileImage}`} alt="profileImage" className="navbarProfileImage" onClick={goToCurrentUserProfile}/>
                </div>

            </div>

        </div>

    </div>
  );
}
