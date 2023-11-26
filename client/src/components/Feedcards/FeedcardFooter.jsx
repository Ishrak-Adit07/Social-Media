import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function FeedcardFooter() {

  const [liked, setLiked] = useState(false);

  const toggleLike = () =>{
    setLiked(!liked);
  }
  
  return (
    <div className='feedcardFooter'>
        <button  className='feedCardLikeButton' onClick={toggleLike}>
          {liked && <FavoriteIcon className='likedIcon'/>}
          {!liked && <FavoriteBorderOutlinedIcon className='unLikedIcon'/>}
          </button>
    </div>
  )
}
