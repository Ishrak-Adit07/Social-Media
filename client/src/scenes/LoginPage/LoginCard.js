import React, {Fragment, useState} from 'react';
import './Login.css';

import { GiOwl } from "react-icons/gi";

import LogoHeader from './LogoHeader';

export default function LoginCard() {

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const onEmailChange = (e) =>{
    setEmail(e.target.value);
    console.log(email);
  }

  const onPasswordChange = (e) =>{
    setPassword(e.target.value);
    console.log(password);
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
        <Fragment>

            <LogoHeader />

                <div class="container rightAlign cardDesign bigMargin">  

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
                       <button type="button" class="btn btn-primary btn-sm registerButton">Sign up</button>
                        <button type="button" class="btn btn-primary btn-sm registerButton" onClick={handleSignIn}>Sign in</button>
                    </div>

                </div>

                <div>
                    <p style={{color:'white'}}>Copyright @ Ishrak-Adit@Gryffindor</p>
                </div>

        </Fragment>
    </div>
  );
}
