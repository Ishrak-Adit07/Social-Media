import React, { Fragment, useContext } from 'react';
import { UserContext } from 'Hooks/UserContext';
import './Postcard.css';


export default function Postcard(props) {

  const {currentUser} = useContext(UserContext);

  return (
    <div>
      
      <div className='postcardWImage'>
      <img src={`${currentUser.profileImage}`} alt="profileImage" className="postCardImage" />
      <div className="postcard">

        <button className="postModalButton" data-toggle="modal" data-target={`#${props.postModalID}` } aria-hidden>
        <h6>Quill away, {currentUser.firstName}</h6>
        </button>

      </div>
      </div>

    </div>
  )
}
