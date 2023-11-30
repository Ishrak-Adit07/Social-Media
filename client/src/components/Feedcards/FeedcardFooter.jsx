import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function FeedcardFooter(props) {

  const [postid, setPostid] = useState(" ");
  const [liked, setLiked] = useState(false);
  const [postLikers, setPostLikers] = useState([]);

  const likePost = async() =>{
    try {

        const body = {
          postID : postid,
          likerID : props.currentUserID
        }

        const response = await fetch(`http://localhost:4000/posts/like/${props.userID}`, {
                                      method: "PUT",
                                      headers: {"Content-Type" : "application/json"},
                                      body: JSON.stringify(body),
                                      });
        
        if(response.status===201){
          const responseData = await response.json();
          console.log(responseData);
        }

    } catch (err) {
      console.error(err.message);
    }
  }

  const unlikePost = async() =>{
    try {

        const body = {
          postID : postid,
          unlikerID : props.currentUserID
        }

        const response = await fetch(`http://localhost:4000/posts/like/${props.userID}`, {
                                      method: "PUT",
                                      headers: {"Content-Type" : "application/json"},
                                      body: JSON.stringify(body),
                                      });
        
        if(response.status===201){
          const responseData = await response.json();
          console.log(responseData);
        }

    } catch (err) {
      console.error(err.message);
    }
  }

  const toggleLike = () =>{
    setLiked(!liked);

    if(liked) likePost();
    else unlikePost();
  }

  const getLikeUpdate = async() =>{
    try {
      setPostid(props.postID);

      const isLikedUpdateQuery = `http://localhost:4000/posts/isLiked/${props.currentUserID}`;
      const body = {
        postID : postid
      }

      const responseIsLiked = await fetch(isLikedUpdateQuery, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body),
        });
      if(responseIsLiked.status===201) setLiked(true);
      else if(responseIsLiked===202) setLiked(false);

      
      const getLikeUpdateQuery = `http://localhost:4000/posts/likers/${postid}`;
      const response = await fetch(getLikeUpdateQuery);

      if(response.status === 200){
        const responseData = await response.json()
        console.log(responseData);
        setPostLikers(responseData);
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
          <button className='feedCardLikersButton'>
            {postLikers.length}
          </button>
    </div>
  )
}
