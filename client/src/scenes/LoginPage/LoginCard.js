import React, {Fragment} from 'react';
import './Login.css';

import { MdOutlineMail } from "react-icons/md";
import { GiOwl } from "react-icons/gi";

import LogoHeader from './LogoHeader';

export default function LoginCard() {
  return (
    <div>
        <Fragment>

            <LogoHeader />

                <div class="container rightAlign cardDesign bigMargin">

                    <div class="rightAlign loginFields">

                        <h2 className='titleName'>Owltweet<GiOwl className='titleIcon'/></h2>

                        <div>
                            <label className='registerLabel'>Email: </label>
                            <input type='email' name='email' placeholder={`Enter email`} className='registerInput' />
                        </div>

                        <div>
                            <label className='registerLabel'>Password: </label>
                            <input type='password' name='password' placeholder='Enter password' className='registerInput' />
                        </div>

                        <div>
                            <button type="button" class="btn btn-primary btn-sm registerButton">Sign up</button>
                            <button type="button" class="btn btn-primary btn-sm registerButton">Sign in</button>
                        </div>

                    </div>

                </div>

                <div>
                    <p style={{color:'white'}}>Copyright @ Ishrak-Adit@Gryffindor</p>
                </div>

        </Fragment>
    </div>
  );
}
