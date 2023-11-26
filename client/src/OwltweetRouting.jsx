import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Importing Scenes 
import ProfilePage from 'scenes/ProfilePage/ProfilePage';
import LoginCard from 'scenes/LoginPage/LoginCard';
import Navbar from 'components/Navbar/Navbar';
import HomePage from 'scenes/HomePage/HomePage';
import { user } from 'user.model';

const currentUser = user;

const OwltweetRouting = () => {
  return (
    <div>
      
    <BrowserRouter>

        <Routes>

            <Route path="/" element={
                <div className='appBG'>
                    <LoginCard />
                </div>
            }/>
            <Route path="/home" element={<HomePage />}/>

        </Routes>

    </BrowserRouter>

    </div>
  )
}

export default OwltweetRouting;
