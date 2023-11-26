import React from 'react'

export default function FeedcardBody(props) {

  const postImage = props.postImage;

  return (
    <div className='feedcardBody'>
      
      <img src={postImage} alt="postImage" className="feedcardBodyImage" />

    </div>
  )
}
