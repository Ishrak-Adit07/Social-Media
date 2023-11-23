import React, { Fragment } from 'react';
import './Postcard.css';

export default function Postcard(props) {

  const firstName = "Hermione";

  return (
    <div>
      
      <div className='postcardWImage'>
      <img src="assets/hermione.png" alt="profileImage" className="postCardImage" />
      <div className="postcard">

        <button className="postModalButton" data-toggle="modal" data-target={`#${props.postModalID}` } aria-hidden>
        <h6>What's on your mind, {firstName}?</h6>
        </button>

      </div>
      </div>

    </div>
  )
}
