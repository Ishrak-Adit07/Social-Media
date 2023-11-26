import React, {Fragment, useContext, useState} from 'react';
import { UserContext } from 'Hooks/UserContext';
import './Login.css';

import { GiOwl } from "react-icons/gi";

const LoginInputCard = () =>{
    
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const {currentUser, handleSignUp} = useContext(UserContext);

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
        let responseData;

        if(response.status===201){

          responseData = await response.json();

          currentUser.userID = responseData.user.userID;
          currentUser.userName = responseData.user.userName;
          currentUser.email = email;
          currentUser.token = responseData.token;
          currentUser.firstName = responseData.user.firstName;
          currentUser.lastName = responseData.user.lastName;
          currentUser.password = responseData.user.password;
          currentUser.profileImage = responseData.user.profileImage;
          currentUser.location = responseData.user.location;
          currentUser.occupation = responseData.user.occupation;
          currentUser.friends = responseData.user.friends;
  
          console.log("This is currentUser Information: ")
          console.log(currentUser);

        }
        else{
          console.log("Log in not successful");
        }

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
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={handleSignUp}>Sign up</button>
            </div>
        </div>
    );
  }

  export default LoginInputCard;