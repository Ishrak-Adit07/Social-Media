import './Home.css';

import Navbar from 'components/Navbar/Navbar';
import SideBar from 'components/SideBar/SideBar';
import Feed from 'components/Feed/Feed';
import RightBar from 'components/RightBar/RightBar';

const HomePage = () =>{
    return(
        <div className=''> 

            <Navbar />
            
            <div className='homeContainer'>

                <div className='sidebarContainer'> <SideBar /> </div>
                <div className='feedContainer'> <Feed /> </div>
                <div className='rightbarContainer'> <RightBar /> </div>

            </div>

        </div>
    );
};

export default HomePage;