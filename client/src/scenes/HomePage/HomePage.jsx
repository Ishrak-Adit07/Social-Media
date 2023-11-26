import React,{useContext} from 'react';
import { UserContext } from 'Hooks/UserContext';
import './HomePage.css';

import Navbar from 'components/Navbar/Navbar';
import SideBar from 'components/SideBar/SideBar';
import Feed from 'components/Feed/Feed';
import RightBar from 'components/RightBar/RightBar';

const HomePage = () =>{

    const {currentUser} = useContext(UserContext);

    return(

        <UserContext.Provider value={{currentUser}}>

        <div className=''> 

            <Navbar />
            
            <div className='homeContainer'>

                <div className='sidebarContainer'> <SideBar /> </div>
                <div className='feedContainer'> <Feed /> </div>
                <div className='rightbarContainer'> <RightBar /> </div>

            </div>

        </div>

        </UserContext.Provider>
    );
};

export default HomePage;