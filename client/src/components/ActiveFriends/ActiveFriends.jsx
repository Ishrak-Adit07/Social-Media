import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from 'Hooks/UserContext';
import './ActiveFriends.css';
import CircleIcon from '@mui/icons-material/Circle';

export default function ActiveFriends() {

  const {currentUser} = useContext(UserContext);

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
              <li className="activeFriendsListItem" key={activeFriendInfo.userName}>
                <button type="button" class="btn activeFriendsListItemButton">
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
