import React from 'react'

export default function FeedcardHeader() {

  const userName = "Ginny Weasley";
  const userHouse = "Gryffindor";
  
  return (
    <div className='feedcardHeader'>

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
