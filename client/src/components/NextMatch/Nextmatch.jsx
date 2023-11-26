import React from 'react';
import './Nextmatch.css';

export default function Nextmatch() {

  const homeTeam = "Gryffindor";
  const awayTeam = "Slytherin";

  return (
    <div>
      <div className='NextmatchCard'>
        
        <div className='NextmatchHeader'>
            <h3>Next Match</h3>
        </div>

        <div className="NextmatchShow">
            <div className={`teamName ${homeTeam}`}>
                <h5>{homeTeam}</h5>
                <img src={`assets/${homeTeam}.png`} alt="teamImage" className="teamImage" />
            </div>
            <div className="vs">
                <h6>vs</h6>
            </div>
            <div className={`teamName ${awayTeam}`}>
                <h5>{awayTeam}</h5>
                <img src={`assets/${awayTeam}.png`} alt="teamImage" className="teamImage" />
            </div>
        </div>

      </div>
    </div>
  )
}
