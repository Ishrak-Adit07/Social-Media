import React, {useState} from 'react';
import '../LoginPage/Login.css';

import { GiOwl } from "react-icons/gi";

const SignupInputThirdCard = (props) =>{
    
  const [address, setAddress] = useState(" ");
  const [profession, setProfession] = useState(" ");

  const onAddressChange = (e) =>{
    setAddress(e.target.value);
  }

  const onProfessionChange = (e) =>{
    setProfession(e.target.value);
  }

  const recordThirdSignupInfo = async(e) =>{
    e.preventDefault();
    try{

        props.newUser.location = address;
        props.newUser.occupation = profession;

        const body = { 
          userName : props.newUser.userName,
          firstName : props.newUser.firstName,
          lastName : props.newUser.lastName,
          email : props.newUser.email,
          password : props.newUser.password,
          profileImage : "C:\\Users\\ELITE X2\\Desktop\\JS Projects\\Social-Media\\server\\public\\images\\harry.png",
          location : props.newUser.location,
          occupation : props.newUser.occupation,
        };
        const response = await fetch("http://localhost:4000/signup/", {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(body),
        });
        let responseData;
        if(response.status === 201){
          responseData = await response.json();
          console.log(responseData);
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
                    <label className='registerLabel'>Address: </label>
                    <input type='text' name='address' placeholder='Enter address' className='registerInput' onChange={onAddressChange}/>
                </div>

                <div>
                    <label className='registerLabel'>Profession: </label>
                    <input type='text' name='profession' placeholder='Enter profession' className='registerInput' onChange={onProfessionChange}/>
                </div>

            </div>

            <div className='centerAlign loginButtonField'>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={props.backFromThirdSignupDisplay}>Back</button>
                <button type="button" class="btn btn-primary btn-sm registerButton" onClick={recordThirdSignupInfo}>Next</button>
            </div>
        </div>
    );
  }

  export default SignupInputThirdCard;