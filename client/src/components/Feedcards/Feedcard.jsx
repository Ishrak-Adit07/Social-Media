import React, { useEffect } from 'react';
import './Feedcard.css';
import FeedcardHeader from './FeedcardHeader';
import FeedcardBody from './FeedcardBody';
import FeedcardFooter from './FeedcardFooter';

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

  const getFeedPosts = async() =>{
    try {
      
      const response = await fetch("http://localhost:4000/posts/feedPosts");
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
