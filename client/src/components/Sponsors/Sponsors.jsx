import React from 'react'
import './Sponsors.css';
import SponsorHeader from './SponsorHeader'
import SponsorCard from './SponsorCard';

export default function Sponsors() {
  return (
    <div className='sponsors'>
      <SponsorHeader />
      <SponsorCard />
      <SponsorCard />
    </div>
  )
}
