import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from 'Hooks/UserContext';
import './ActiveFriends.css';
import CircleIcon from '@mui/icons-material/Circle';
import { user } from 'models/user.model';

export default function ActiveFriends() {

  const {currentUser} = useContext(UserContext);

  const navigate = useNavigate();

  const goToUserProfile = (profileUserInfo) =>{
    const profileUser = user;

    profileUser.userID = profileUserInfo.userid;
    profileUser.firstName = profileUserInfo.firstname;
    profileUser.lastName = profileUserInfo.lastname;
    profileUser.userName = profileUserInfo.username;
    profileUser.profileImage = profileUserInfo.profileimage;
    profileUser.email = profileUserInfo.email;
    profileUser.location = profileUserInfo.location;
    profileUser.occupation = profileUserInfo.occupation;
    profileUser.friends = profileUserInfo.friends;

    navigate(`/profile/${profileUser.userID}`, { state: { profileUser } } );
  }

  const [friendsInfo, setFriendsInfo] = useState([{}]);

  const getFriendsInfo = async () => {
    try {
  
      const friendsInfoQuery = `http://localhost:4000/user/usersShowInfo`;
      console.log(currentUser.friends);
      const body = {
        users : currentUser.friends
      }
      const response = await fetch(`${friendsInfoQuery}`,{
                                    method : "POST",
                                    headers: {"Content-Type" : "application/json"},
                                    body: JSON.stringify(body),
                                  });
      
      if(response.status === 200){
        const responseData = await response.json();
        console.log(responseData);
        setFriendsInfo(responseData);
        console.log(friendsInfo);
      }

    } catch (err) {
      console.error(err.message);
    }

    console.log("This is friends");
    console.log(friendsInfo);
  };

  useEffect(()=>{
    getFriendsInfo();
  }, []);

  return (
    <div>
      
      <div className="activeFriendsWrapper">

        <div className='activeFriendsHeader'>
            <h3>Active</h3>
        </div>

        <ul className="activeFriendsList">
          {friendsInfo.map(activeFriendInfo=>{
            return (
              <li className="activeFriendsListItem" key={activeFriendInfo.userid}>
                <button type="button" class="btn activeFriendsListItemButton" onClick={()=>{goToUserProfile(activeFriendInfo)}}>
                <img src={`${activeFriendInfo.profileimage}`} alt="profileImage" className="activeFriendsListItemImage" />
                {`${activeFriendInfo.username}`}
                </button>
                </li>
            );
          })}
        </ul>

      </div>

    </div>
  )
}
