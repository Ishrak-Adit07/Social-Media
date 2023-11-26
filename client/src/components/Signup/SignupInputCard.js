import React, {useState, useContext} from 'react';
import { UserContext } from 'Hooks/UserContext';
import './Signup.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GiOwl } from "react-icons/gi";

const SignupInputCard = () =>{
    
  const [email, setEmail] = useState(" ");
  const [userName, setUserName] = useState(" ");

  const {currentUser, backFromFirstSignupDisplay, handleFirstSignupNext} = useContext(UserContext);

  const onEmailChange = (e) =>{
    setEmail(e.target.value);
  }

  const onUserNameChange = (e) =>{
    setUserName(e.target.value);
  }

  const verifyUniqueEmail = async(e) =>{
    e.preventDefault();
    try{

        const body = { 
            email,
            userName
         };
        const response = await fetch("http://localhost:4000/signup/verifyEmail", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body),
        });

        let responseData;
        if(response.status === 200){
          responseData = await response.json();
          console.log(responseData);

          currentUser.email = email;
          currentUser.userName = userName;

          handleFirstSignupNext();
        }
        else{
          alert("Mail is already in use");
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
                    <label className='registerLabel'>Username: </label>
                    <input type='text' name='username' placeholder='Enter username' className='registerInput' onChange={onUserNameChange}/>
                </div>

            </div>

            <div className='centerAlign loginButtonField'>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={backFromFirstSignupDisplay}>Back</button>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={verifyUniqueEmail}>Next</button>
            </div>
        </div>
    );
  }

  export default SignupInputCard;