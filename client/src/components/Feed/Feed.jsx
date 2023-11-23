import React from 'react';
import './Feed.css';

export default function Feed() {

  const stories = [
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
    {
      username : "Harry Potter",
      storyImage : "images/GreatHall.png",
    },
  ];

  return (
    <div>

    <div className='storyBar'>

      <div className='myStoryCard'>
        <img src="images/GreatHall.png" alt="story" className="storyImage" />
      </div>
      
      <div className='storyCard'>
        <img src="images/GreatHall.png" alt="story" className="storyImage" />
      </div>

      {stories.map((story)=>{
        return (
          <div className='storyCard'>
            <img src={story.storyImage} alt="story" className="storyImage" />
          </div>
        );
      })}

    </div>

    </div>
  );
}
