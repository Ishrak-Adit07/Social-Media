import React from 'react';
import './ActiveFriends.css';
import CircleIcon from '@mui/icons-material/Circle';

export default function ActiveFriends() {

  const activeFriendsInfo = [
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
    {
      profileImage : "assets/ron.png",
      userName :"Ron Weasley"
    },
  ];

  return (
    <div>
      
      <div className="activeFriendsWrapper">

        <div className='activeFriendsHeader'>
            <h3>Active</h3>
        </div>

        <ul className="activeFriendsList">
          {activeFriendsInfo.map((activeFriendInfo)=>{
            return (
              <li className="activeFriendsListItem">
                <button type="button" class="btn activeFriendsListItemButton">
                <img src={activeFriendInfo.profileImage} alt="profileImage" className="activeFriendsListItemImage" />
                {activeFriendInfo.userName}
                <span><CircleIcon className = "activeFriendsListItemIcon" /></span>
                </button>
                </li>
            );
          })}
        </ul>

      </div>

    </div>
  )
}
