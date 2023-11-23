import React from 'react';

export default function FeedcardFooter() {

  const userName = "Ginny Weasley";
  const userHouse = "Gryffindor";
  
  return (
    <div className='feedcardFooter'>

      <img src="assets/ginny.png" alt="profileImage" className="feedcardHeaderImage" />

      <div className="feedcardHeaderInfo">
        <div className="feedcaredHeaderName">
            <h6>{userName}</h6>
        </div>
        <div className="feedcardHeaderHouse">
            {userHouse}
        </div>
      </div>

    </div>
  )
}
