import React, {useContext} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserContext } from 'Hooks/UserContext';
import 'index.css'

//Importing Scenes 
import ProfilePage from 'scenes/ProfilePage/ProfilePage';
import HomePage from 'scenes/HomePage/HomePage';
import LoginPage from 'scenes/LoginPage/LoginPage';

//Importing data and models
import { user } from 'models/user.model';
import MyProfilePage from 'scenes/ProfilePage/MyProfilePage';

const OwltweetRouting = () => {

  let currentUser = user;

  return (
    <div>
      
    <UserContext.Provider value={{ currentUser }}>

    <BrowserRouter>

        <Routes>

            <Route path="/" element={
              <div className='loginAppWrapper'>
                <LoginPage />
              </div>
            } />
            
            <Route path="/home" element={
              <div>
                <HomePage />
              </div>
            } />

            <Route path="/profile" element={
              <div>
                <ProfilePage />
              </div>
            } />

            <Route path="/myProfile" element={
              <div>
                <MyProfilePage />
              </div>
            } />

        </Routes>

    </BrowserRouter>

    </UserContext.Provider>

    </div>
  )
}

export default OwltweetRouting;
