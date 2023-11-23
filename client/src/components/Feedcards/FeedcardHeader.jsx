import React from 'react'

export default function FeedcardHeader(props) {

  const userName = props.userName;
  const userHouse = props.userHouse;
  const feedcardProfileImage = props.feedcardProfileImage;
  
  return (
    <div className='feedcardHeader'>

      <img src={feedcardProfileImage} alt="profileImage" className="feedcardHeaderImage" />

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
