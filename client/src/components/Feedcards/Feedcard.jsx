import React, { useContext, useEffect, useState } from 'react';
import './Feedcard.css';
import FeedcardHeader from './FeedcardHeader';
import FeedcardBody from './FeedcardBody';
import FeedcardFooter from './FeedcardFooter';
import { UserContext } from 'Hooks/UserContext';

const FeedsCardsInfo = [
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "assets/postImages/clock.png",
    feedcardProfileImage : "assets/profileImages/ginny.png",
  },
  {
    userName : "Luna Lovegood",
    userHouse : "Ravenclaw",
    postImage : "assets/postImages/snowyOwl.png",
    feedcardProfileImage : "assets/profileImages/luna.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "assets/postImages/snowyOwl.png",
    feedcardProfileImage : "assets/profileImages/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "assets/postImages/snowyOwl.png",
    feedcardProfileImage : "assets/profileImages/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "assets/postImages/snowyOwl.png",
    feedcardProfileImage : "assets/profileImages/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "assets/postImages/snowyOwl.png",
    feedcardProfileImage : "assets/profileImages/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "assets/postImages/snowyOwl.png",
    feedcardProfileImage : "assets/profileImages/ginny.png",
  },
];

export default function Feedcard() {

  const {currentUser, user, storyDisplay} = useContext(UserContext);

  const [FeedCardsInfo, setFeedCardsInfo] = useState([{}]);

  const getFeedPosts = async() =>{
    try {

      const feedQuery = `http://localhost:4000/posts/feedPosts`;
      const userFeedQuery = `http://localhost:4000/posts/userPosts/${currentUser.userID}`;
      
      const response = await fetch(`${feedQuery}`);
      const userResponse = await fetch(`${userFeedQuery}`);
  
      if(response.status === 200){
        const responseData = await response.json();
        console.log(responseData);
        setFeedCardsInfo(responseData);
        console.log(FeedCardsInfo);
      }
  
    } catch (err) {
      console.error(err.meassage);
    }
  }


  const getProfileFeedPosts = async() =>{
    try {

      const userFeedQuery = `http://localhost:4000/posts/userPosts/${currentUser.userID}`;
      
      const userResponse = await fetch(`${userFeedQuery}`);
  
      if(userResponse.status === 200){
        const responseData = await userResponse.json();
        console.log(responseData);
        setFeedCardsInfo(responseData);
        console.log(FeedCardsInfo);
      }
  
    } catch (err) {
      console.error(err.meassage);
    }
  }

  useEffect(()=>{
    if(storyDisplay) getFeedPosts();
    else getProfileFeedPosts();
  }, []);

  return (
    <div>
        
        <div className="feedcards">

        <div>
          
          {FeedCardsInfo.map((FeedCardInfo)=>{
            return (
              
              <div className="feedcard">
                <FeedcardHeader userName={FeedCardInfo.username} userHouse={FeedCardInfo.house} feedcardProfileImage={FeedCardInfo.profileimage}/>
                <FeedcardBody postImage={FeedCardInfo.postimage} caption={FeedCardInfo.caption}/>
                <FeedcardFooter userName={FeedCardInfo.username} postID={FeedCardInfo.postid} userID={FeedCardInfo.userid} currentUserID={currentUser.userID}/>
              </div>

            );
          })}

      </div>

      </div>

    </div>
  )
}
