import React from "react";
import HeaderOption from "./HeaderOption";

import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import linkedinLogo from './assets/linkedin.png';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import {deepOrange} from '@mui/material/colors';


function Header() {
    return(
        <div className="header">
            <div className='header__left'> 
            <img src={linkedinLogo} alt='linkedin-logo'/>

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={<Avatar sx={{ bgcolor: deepOrange[500] }}>RK</Avatar>} title='Me'/>
            </div>
        </div>
    );
}

export default Header;