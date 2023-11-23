import React, {useState} from 'react';
import '../LoginPage/Login.css';

import { GiOwl } from "react-icons/gi";

const SignupInputSecondCard = (props) =>{
    
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [password, setPassword] = useState(" ");

  const onFirstNameChange = (e) =>{
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e) =>{
    setLastName(e.target.value);
  }

  const onPasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  const recordSecondSignupInfo = async(e) =>{
    e.preventDefault();
    try{

        props.newUser.firstName = firstName;
        props.newUser.lastName = lastName;
        props.newUser.password = password;

        props.handleSecondSignupNext();

    }catch(err){
        console.error(err.message);
    }
  }

    return (
        <div>
            <div class="rightAlign loginFields">

                <h2 className='titleName'>Owltweet<GiOwl className='titleIcon'/></h2>

                <div class=''>
                <div>
                  <label class='registerLabel float-child'>First name: </label>
                 <input type='text' name='firstName' placeholder={`Enter first Name`} className='registerInput' onChange={onFirstNameChange} required/>
                </div>

                <div>
                    <label class='registerLabel float-child'>Last name: </label>
                    <input type='text' name='lastName' placeholder='Enter last name' className='registerInput' onChange={onLastNameChange}/>
                </div>
                </div>

                <div>
                    <label className='registerLabel'>Password: </label>
                    <input type='password' name='password' placeholder='Enter password' className='registerInput' onChange={onPasswordChange}/>
                </div>

            </div>

            <div className='centerAlign loginButtonField'>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={props.backFromSecondSignupDisplay}>Back</button>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={recordSecondSignupInfo}>Next</button>
            </div>
        </div>
    );
  }

  export default SignupInputSecondCard;