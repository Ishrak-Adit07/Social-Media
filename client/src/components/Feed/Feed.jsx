import React, { Fragment, useContext, useState } from 'react';
import './Feed.css';
import Storycard from 'components/Storycards/Storycard';
import Postcard from 'components/Postcard/Postcard';
import { UserContext } from 'Hooks/UserContext';
import Feedcard from 'components/Feedcards/Feedcard';

export default function Feed() {

  const {currentUser, user, storyDisplay, postCardPlaceHolder} = useContext(UserContext);
  const [caption, setCaption] = useState(" ");

const handlePostCaptionChange = (e) =>{
  setCaption(e.target.value);
  console.log(caption);
}
const createPostHandler = async() =>{

  try {

    const body = {
      userName : currentUser.userName,
      house : currentUser.house,
      profileImage : currentUser.profileImage,
      postImage : "dummy//assets//PostImage",
      caption,
      location : "Hogwarts"
    }

    let newPostQuery = `http://localhost:4000/posts/createPost/${currentUser.userID}`;

    const response = await fetch(`${newPostQuery}`,{
                                  method : "POST",
                                  headers: {"Content-Type" : "application/json"},
                                  body: JSON.stringify(body),
                                });
    
    let responseData;
    if(response.status === 201){
      responseData = await response.json();
      console.log(responseData);
    }

  } catch (err) {
    console.error( err.meassage );
  }

}


 const postModalID = "exampleModal";
 const postModalFragment = (
    <Fragment>
      <div class="modal fade" id={postModalID} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

          <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">What's on your mind?</h5>
          </div>

          <div class="modal-body">

                <div className="postBar">
                    <input type="text" className="postBarInput" placeholder='Write Post' onChange={handlePostCaptionChange}/>
                </div>

                <div className="postImageBar">
                    <input type="file" className="postImageBarInput" placeholder='Write Post'/>
                </div>

          </div>

          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
          <button type="button" class="btn btn-primary">Post</button>
          </div>

          </div>
        </div>
      </div>
      </Fragment>
)

  return (
    <div>

      <UserContext.Provider value={{ currentUser, user, storyDisplay, postCardPlaceHolder }}>

      <div className='StorycardWrapper'>
        {storyDisplay && <Storycard />}
      </div>
      <div className='PostcardWrapper'>
        <Postcard postModalID={postModalID}/>
      </div>
      <div className="FeedcardWrapper">
        <Feedcard />
      </div>


      {postModalFragment}

      </UserContext.Provider>

    </div>
  );
  
}
