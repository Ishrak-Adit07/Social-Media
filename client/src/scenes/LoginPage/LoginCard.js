import React, {Fragment, useState} from 'react';
import './Login.css';

import { GiOwl } from "react-icons/gi";
import LogoHeader from './LogoHeader';
import LoginInputCard from './LoginInputCard';
import LoginCardFooter from './LoginCardFooter';

import SignupInputCard from 'scenes/SignupPage/SignupInputCard';
import SignupInputSecondCard from 'scenes/SignupPage/SignupInputSecondCard';

export default function LoginCard() {

  const [loginInputDisplay, setLoginInputDisplay] = useState(true);
  const [signupInputFirstDisplay, setSignupInputFirstDisplay] = useState(false);
  const [signupInputSecondtDisplay, setSignupInputSecondDisplay] = useState(false);

  const handleSignUp = () =>{
    setLoginInputDisplay(false);
    setSignupInputFirstDisplay(true);
  }

  const backFromFirstSignupDisplay = () =>{
    setLoginInputDisplay(true);
    setSignupInputFirstDisplay(false);
  }

  const backFromSecondSignupDisplay = () =>{
    setSignupInputFirstDisplay(true);
    setSignupInputSecondDisplay(false);
  }

  const handleFirstSignupNext = () =>{
    setSignupInputFirstDisplay(false);
    setSignupInputSecondDisplay(true);
  }

  return (
    <div>
        <Fragment>

            <LogoHeader />

            <div class="container rightAlign cardDesign bigMargin">  

                {loginInputDisplay && <LoginInputCard handleSignUp={handleSignUp}/>}
                {signupInputFirstDisplay && <SignupInputCard 
                                             backFromFirstSignupDisplay = {backFromFirstSignupDisplay} 
                                             handleFirstSignupNext = {handleFirstSignupNext}/>}
                {signupInputSecondtDisplay && <SignupInputSecondCard 
                                               backFromSecondSignupDisplay={backFromSecondSignupDisplay} />}
                    
            </div>

            <LoginCardFooter />

        </Fragment>
    </div>
  );
}
