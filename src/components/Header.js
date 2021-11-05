import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

const Header = () => {  

return (
        <>
        <div className='header'>
          <div className="header-left">
          <MenuIcon />
              <Link to='/'><img className='header-logo' 
              src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='YouTube' />
              </Link>
          </div>
          {/* <Link to='/search' className='header-search'>
          <SearchIcon className='header-search-button'/>Click to search...
          </Link> */}
          <div className='header-center'>
          <div className="header-right">
            <VideoCallIcon className='header-icon'/>
            <AppsIcon className='header-icon'/>
            <NotificationsIcon className='header-icon'/>
            <Avatar alt='' />
          </div>
          </div>
        </div>
        </>
    )
}

export default Header;