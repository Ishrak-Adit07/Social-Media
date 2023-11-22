import React, {useState} from 'react';
import '../LoginPage/Login.css';

import { GiOwl } from "react-icons/gi";

const SignupInputSecondCard = (props) =>{
    
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [profession, setProfession] = useState(" ");

  const onFirstNameChange = (e) =>{
    setFirstName(e.target.value);
  }

  const onLastNameChange = (e) =>{
    setLastName(e.target.value);
  }

  const onPasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  const onAddressChange = (e) =>{
    setAddress(e.target.value);
  }

  const onProfessionChange = (e) =>{
    setProfession(e.target.value);
  }

  const verifyEmail = async(e) =>{
    e.preventDefault();
    try{

        const body = { 
            firstName,
            lastName,
            password,
            location : address,
            occupation : profession
         };
        const response = await fetch("http://localhost:4000/signup/verifyEmail", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body),
        });
        const responseData = await response.json();
        console.log(responseData);

    }catch(err){
        console.error(err.message);
    }
  }

    return (
        <div>
            <div class="rightAlign loginFields">

                <h2 className='titleName'>Owltweet<GiOwl className='titleIcon'/></h2>

                <div>
                  <label className='registerLabel'>First name: </label>
                 <input type='text' name='firstName' placeholder={`Enter first Name`} className='registerInput' onChange={onFirstNameChange} required/>
                </div>

                <div>
                    <label className='registerLabel'>Last name: </label>
                    <input type='text' name='lastName' placeholder='Enter last name' className='registerInput' onChange={onLastNameChange}/>
                </div>

                <div>
                    <label className='registerLabel'>Password: </label>
                    <input type='text' name='password' placeholder='Enter password' className='registerInput' onChange={onPasswordChange}/>
                </div>

                <div>
                    <label className='registerLabel'>Address: </label>
                    <input type='text' name='address' placeholder='Enter address' className='registerInput' onChange={onAddressChange}/>
                </div>

                <div>
                    <label className='registerLabel'>Profession: </label>
                    <input type='text' name='profession' placeholder='Enter profession' className='registerInput' onChange={onProfessionChange}/>
                </div>

            </div>

            <div className='centerAlign loginButtonField'>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={props.backFromSecondSignupDisplay}>Back</button>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={verifyEmail}>Next</button>
            </div>
        </div>
    );
  }

  export default SignupInputSecondCard;