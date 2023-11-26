import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'index.css'

//Importing Scenes 
import ProfilePage from 'scenes/ProfilePage/ProfilePage';
import HomePage from 'scenes/HomePage/HomePage';
import LoginPage from 'scenes/LoginPage/LoginPage';

//Importing data and models
import { user } from 'models/user.model';

const currentUser = user;

const OwltweetRouting = () => {
  return (
    <div>
      
    <BrowserRouter>

        <Routes>

            <Route path="/" element={
              <div className='appBG1'>
                <LoginPage />
              </div>
            } />
            
            <Route path="/home" element={
              <div>
                <HomePage />
              </div>
            } />

        </Routes>

    </BrowserRouter>

    </div>
  )
}

export default OwltweetRouting;
