import React from 'react';
import './Storycard.css'

export default function Storycard() {

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

      {stories.map((story)=>{
        return (
          <div className='storyCard'>
            <img src={story.storyImage} alt="story" className="storyImage" />
          </div>
        );
      })}

    </div>

    </div>
  )
}
