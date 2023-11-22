import React, {Fragment, useState} from 'react';
import './Login.css';

import { GiOwl } from "react-icons/gi";
import LogoHeader from './LogoHeader';
import LoginInputCard from './LoginInputCard';
import LoginCardFooter from './LoginCardFooter';

import SignupInputCard from 'scenes/SignupPage/SignupInputCard';

export default function LoginCard() {

  const [loginInputDisplay, setLoginInputDisplay] = useState(true);
  const [signupInputFirstDisplay, setSignupInputFirstDisplay] = useState(false);

  const handleSignUp = () =>{
    setLoginInputDisplay(false);
    setSignupInputFirstDisplay(true);
  }

  const backFromFirstSignupDisplay = () =>{
    setLoginInputDisplay(true);
    setSignupInputFirstDisplay(false);
  }

  return (
    <div>
        <Fragment>

            <LogoHeader />

            <div class="container rightAlign cardDesign bigMargin">  

                {loginInputDisplay && <LoginInputCard handleSignUp={handleSignUp}/>}
                {signupInputFirstDisplay && <SignupInputCard backFromFirstSignupDisplay={backFromFirstSignupDisplay}/>}
                    
            </div>

            <LoginCardFooter />

        </Fragment>
    </div>
  );
}
