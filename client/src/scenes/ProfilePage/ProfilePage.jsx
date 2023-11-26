import React, {useContext} from 'react';
import Navbar from "components/Navbar/Navbar";

import { UserContext } from 'Hooks/UserContext';
import SideBar from 'components/SideBar/SideBar';

import './ProfilePage.css';
import Profile from 'components/Profiles/Profile';


const ProfilePage = () =>{

    const currentUser = useContext(UserContext);

    return(

        <UserContext.Provider value={{currentUser}}>
        
        <div className="">

            <Navbar />

            <div className='profilePageContainer'>

                <div className='sidebarContainer'> <SideBar /> </div>

                <div className='profileContainer'> <Profile /> </div>

            </div>

        </div>

        </UserContext.Provider>

    );
};

export default ProfilePage;