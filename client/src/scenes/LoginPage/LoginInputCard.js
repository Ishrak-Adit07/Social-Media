import React, {Fragment, useState} from 'react';
import './Login.css';

import { GiOwl } from "react-icons/gi";

const LoginInputCard = (props) =>{
    
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const onEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const onPasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  const handleSignIn = async(e) =>{
    e.preventDefault();
    try{

        const body = { 
            email,
            password
         };
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body),
        });
        const responseData = await response.json();
        console.log(responseData);
        console.log(responseData.token);
        console.log(responseData.user);

    }catch(err){
        console.error(err.message);
    }
  }

    return (
        <div>
            <div class="rightAlign loginFields">

                <h2 className='titleName'>Owltweet<GiOwl className='titleIcon'/></h2>

                <div>
                  <label className='registerLabel'>Email: </label>
                 <input type='email' name='email' placeholder={`Enter email`} className='registerInput' onChange={onEmailChange} required/>
                </div>

                <div>
                    <label className='registerLabel'>Password: </label>
                    <input type='password' name='password' placeholder='Enter password' className='registerInput' onChange={onPasswordChange}/>
                </div>

            </div>

            <div className='centerAlign loginButtonField'>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={handleSignIn}>Sign in</button>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={props.handleSignUp}>Sign up</button>
            </div>
        </div>
    );
  }

  export default LoginInputCard;