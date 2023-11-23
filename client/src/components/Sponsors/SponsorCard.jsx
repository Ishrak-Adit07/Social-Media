import React from 'react';

export default function SponsorCard(props) {

  const sponsorImage = "images/wwwh.png";
  const sponsorName = "Weasley's Wizard Wheezes";

  return (
    <div>
      
        <div className='sponsorCard'>
            <img src={sponsorImage} alt="sponsorImage" className="sponsorImage" />

            <div className="sponsorName">
                <h6>{sponsorName}</h6>
            </div>

        </div>

    </div>
  )
}
