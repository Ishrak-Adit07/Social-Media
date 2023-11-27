import React, { useContext, useEffect } from 'react';
import './Feedcard.css';
import FeedcardHeader from './FeedcardHeader';
import FeedcardBody from './FeedcardBody';
import FeedcardFooter from './FeedcardFooter';
import { UserContext } from 'Hooks/UserContext';

const FeedCardsInfo = [
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

  const getFeedPosts = async() =>{
    try {

      let feedQuery = `http://localhost:4000/posts/feedPosts`;
      if(!storyDisplay) feedQuery=`http://localhost:4000/posts/userPosts/${currentUser.userID}`;
      
      const response = await fetch(`${feedQuery}`);
      const responseData = await response.json();
  
      if(response.status === 200){
        console.log(responseData);
      }
  
    } catch (err) {
      console.error(err.meassage);
    }
  }

  useEffect(()=>{
    getFeedPosts();
  }, []);

  return (
    <div>
        
        <div className="feedcards">

        <div>
          
          {FeedCardsInfo.map((FeedCardInfo)=>{
            return (
              
              <div className="feedcard">
                <FeedcardHeader userName={FeedCardInfo.userName} userHouse={FeedCardInfo.userHouse} feedcardProfileImage={FeedCardInfo.feedcardProfileImage}/>
                <FeedcardBody postImage={FeedCardInfo.postImage}/>
                <FeedcardFooter userName={FeedCardInfo.userName} userHouse={FeedCardInfo.userHouse} feedcardProfileImage={FeedCardInfo.feedcardProfileImage}/>
              </div>

            );
          })}

      </div>

      </div>

    </div>
  )
}
