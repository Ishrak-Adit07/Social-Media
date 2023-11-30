import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function FeedcardFooter() {

  const [postid, setPostid] = useState(" ");
  const [liked, setLiked] = useState(false);
  const [postLikers, setPostLikers] = useState([]);

  const toggleLike = () =>{
    setLiked(!liked);
  }

  const getLikeUpdate = async() =>{
    try {
      
      const getLikeUpdateQuery = `http://localhost:4000/posts/likers/${postid}`;
      const response = await fetch(getLikeUpdateQuery);

      if(response.status === 200){
        const responseData = await response.json()
        console.log(responseData);
      }

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getLikeUpdate();
  }, []);
  
  return (
    <div className='feedcardFooter'>
        <button  className='feedCardLikeButton' onClick={toggleLike}>
          {liked && <FavoriteIcon className='likedIcon'/>}
          {!liked && <FavoriteBorderOutlinedIcon className='unLikedIcon'/>}
          </button>
    </div>
  )
}
