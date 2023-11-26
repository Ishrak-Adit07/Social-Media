import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function FeedcardFooter(props) {

  const userName = props.userName;
  const userHouse = props.userHouse;
  const feedcardProfileImage = props.feedcardProfileImage;

  const [liked, setLiked] = useState(false);
  const [likeIcon, setLikeIcon] = useState(FavoriteBorderOutlinedIcon);

  const setInitialLiked = () =>{
    // Fetch function
  }

  const toggleLike = () =>{
    setLiked(!liked);
    setLikeIcon(liked ? FavoriteIcon : FavoriteBorderOutlinedIcon);
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
