import React, {} from 'react';
import './Feedcard.css';
import FeedcardHeader from './FeedcardHeader';
import FeedcardBody from './FeedcardBody';
import FeedcardFooter from './FeedcardFooter';

const FeedCardsInfo = [
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/clock.png",
    feedcardProfileImage : "assets/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/snowyOwl.png",
    feedcardProfileImage : "assets/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/snowyOwl.png",
    feedcardProfileImage : "assets/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/snowyOwl.png",
    feedcardProfileImage : "assets/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/snowyOwl.png",
    feedcardProfileImage : "assets/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/snowyOwl.png",
    feedcardProfileImage : "assets/ginny.png",
  },
  {
    userName : "Ginny Weasley",
    userHouse : "Gryffindor",
    postImage : "images/snowyOwl.png",
    feedcardProfileImage : "assets/ginny.png",
  },
];

export default function Feedcard() {
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
