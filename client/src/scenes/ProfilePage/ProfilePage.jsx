import React, {useContext} from 'react';
import Navbar from "components/Navbar/Navbar";

import { UserContext } from 'Hooks/UserContext';
import SideBar from 'components/SideBar/SideBar';

import './ProfilePage.css';
import Profile from 'components/Profiles/Profile';
import ProfileInfo from 'components/Profiles/ProfileInfo';
import ProfileHeader from 'components/Profiles/ProfileHeader';


const ProfilePage = (props) =>{

    const currentUser = useContext(UserContext);
    const user = currentUser;
    let postCardPlaceHolder = "Write something to "+currentUser.firstName;
    const storyDisplay = false;

    //Better will be to pass the user from here
    //TBD

    return(

        <UserContext.Provider value={{currentUser, user, storyDisplay, postCardPlaceHolder}}>
        
        <div className="">

            <Navbar />

            <div className='profilePageContainer'>

                <div className='sidebarContainer'> <SideBar /> </div>

                <div className='userInfoContainer'> <ProfileInfo /> </div>

                <div className='userProfileContainer'>
                    <div className='userProfileHeader'> <ProfileHeader /> </div>
                    <div className="userProfileFeedContainer"> <Profile /></div>
                </div>

            </div>

        </div>

        </UserContext.Provider>

    );
};

export default ProfilePage;