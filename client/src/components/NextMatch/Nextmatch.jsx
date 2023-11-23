import React from 'react';
import './Nextmatch.css';

export default function Nextmatch() {
  return (
    <div>
      <div className='NextmatchCard'>
        
        <div className='NextmatchHeader'>
            <h3>Next Match</h3>
        </div>

        <div className="NextmatchShow">
            <div className="teamName Gryffindor">
                <h5>Gryffindor</h5>
                <img src="images/Logo.png" alt="teamImage" className="teamImage" />
            </div>
            <div className="vs">
                <h6>vs</h6>
            </div>
            <div className="teamName Slytherin">
                <h5>Slytherin</h5>
                <img src="images/Logo.png" alt="teamImage" className="teamImage" />
            </div>
        </div>

      </div>
    </div>
  )
}
