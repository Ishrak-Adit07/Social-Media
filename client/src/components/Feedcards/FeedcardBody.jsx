import React from 'react'

export default function FeedcardBody(props) {

  const postImage = props.postImage;

  return (
    <div className='feedcardBody'>
      
      <img src={postImage} alt="profileImage" className="feedcardBodyImage" />

    </div>
  )
}
