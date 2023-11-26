import React, {Fragment, useState, useContext} from 'react';
import { UserContext } from 'Hooks/UserContext';
import './Login.css';

import { GiOwl } from "react-icons/gi";
import LogoHeader from './LogoHeader';
import LoginInputCard from './LoginInputCard';
import LoginCardFooter from './LoginCardFooter';

import SignupInputCard from 'components/Signup/SignupInputCard';
import SignupInputSecondCard from 'components/Signup/SignupInputSecondCard';
import SignupInputThirdCard from 'components/Signup/SignupInputThirdCard';

//Data and models
import { user } from 'models/user.model';

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

  const handleThirdSignupNext = () =>{
    console.log("New user is created");
  }

  const {currentUser} = useContext(UserContext);

  return (
    <div>
        <Fragment>

            <LogoHeader />

            <UserContext.Provider value={{ currentUser, handleSignUp, backFromFirstSignupDisplay, backFromSecondSignupDisplay, backFromThirdSignupDisplay,
                                           handleFirstSignupNext, handleSecondSignupNext, handleThirdSignupNext }}>

            <div class="container rightAlign cardDesign bigMargin">  

                {loginInputDisplay && <LoginInputCard />}
                {signupInputFirstDisplay && <SignupInputCard />}
                {signupInputSecondDisplay && <SignupInputSecondCard />}
                {signupInputThirdDisplay && <SignupInputThirdCard />}
                    
            </div>

            </UserContext.Provider>

            <LoginCardFooter />

        </Fragment>
    </div>
  );
}
