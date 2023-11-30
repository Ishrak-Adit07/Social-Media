import React from 'react'

export default function FeedcardBody(props) {

  const postImage = props.postImage;
  const caption = props.caption;

  return (
    <div className='feedcardBody'>

      <div className="feedcardbodyCaption">
        {caption}
      </div>

      <div className="feedcardbodyImage">
        <img src={postImage} alt="postImage" className="feedcardBodyImage" />
      </div>

    </div>
  )
}
