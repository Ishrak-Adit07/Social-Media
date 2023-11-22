import React, {Fragment, useState} from 'react';
import './Login.css';

import { GiOwl } from "react-icons/gi";
import LogoHeader from './LogoHeader';
import LoginInputCard from './LoginInputCard';
import LoginCardFooter from './LoginCardFooter';

import SignupInputCard from 'scenes/SignupPage/SignupInputCard';
import SignupInputSecondCard from 'scenes/SignupPage/SignupInputSecondCard';
import SignupInputThirdCard from 'scenes/SignupPage/SignupInputThirdCard';

import { user } from './user.model';

export default function LoginCard() {

  const [loginInputDisplay, setLoginInputDisplay] = useState(true);
  const [signupInputFirstDisplay, setSignupInputFirstDisplay] = useState(false);
  const [signupInputSecondDisplay, setSignupInputSecondDisplay] = useState(false);
  const [signupInputThirdDisplay, setSignupInputThirdDisplay] = useState(false);

  const handleSignUp = () =>{
    setLoginInputDisplay(false);
    setSignupInputFirstDisplay(true);
  }

  const backFromFirstSignupDisplay = () =>{
    setLoginInputDisplay(true);
    setSignupInputFirstDisplay(false);
  }

  const handleFirstSignupNext = () =>{
    setSignupInputFirstDisplay(false);
    setSignupInputSecondDisplay(true);
  }

  const backFromSecondSignupDisplay = () =>{
    setSignupInputFirstDisplay(true);
    setSignupInputSecondDisplay(false);
  }

  const handleSecondSignupNext = () =>{
    setSignupInputSecondDisplay(false);
    setSignupInputThirdDisplay(true);
  }

  const backFromThirdSignupDisplay = () =>{
    setSignupInputSecondDisplay(true);
    setSignupInputThirdDisplay(false);
  }

  const newUser = user;

  return (
    <div>
        <Fragment>

            <LogoHeader />

            <div class="container rightAlign cardDesign bigMargin">  

                {loginInputDisplay && <LoginInputCard handleSignUp={handleSignUp}/>}
                {signupInputFirstDisplay && <SignupInputCard 
                                             backFromFirstSignupDisplay = {backFromFirstSignupDisplay} 
                                             handleFirstSignupNext = {handleFirstSignupNext}
                                             newUser = {newUser}/>}
                {signupInputSecondDisplay && <SignupInputSecondCard 
                                               backFromSecondSignupDisplay={backFromSecondSignupDisplay} 
                                               handleSecondSignupNext={handleSecondSignupNext}
                                               newUser = {newUser}/>}
                {signupInputThirdDisplay && <SignupInputThirdCard 
                                               backFromThirdSignupDisplay={backFromThirdSignupDisplay} 
                                               handleSecondSignupNext={handleSecondSignupNext}
                                               newUser = {newUser}/>}
                    
            </div>

            <LoginCardFooter />

        </Fragment>
    </div>
  );
}
