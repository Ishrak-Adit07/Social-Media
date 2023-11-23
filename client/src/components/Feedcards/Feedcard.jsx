import React, {Fragment} from 'react';
import './Feedcard.css';
import FeedcardHeader from './FeedcardHeader';
import FeedcardBody from './FeedcardBody';
import FeedcardFooter from './FeedcardFooter';

export default function Feedcard() {
  return (
    <div>
        
        <div className="feedcard">
            <FeedcardHeader />
            <FeedcardBody />
            <FeedcardFooter />
        </div>

    </div>
  )
}
