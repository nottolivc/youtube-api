import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { ThemeContext } from '../context-api/ThemeContext';

const Header = () => {  
  const theme = useContext(ThemeContext);

return (
        <>
        <ThemeContext.Provider value={theme}>
        <div className={`header${theme.darkMode ? "_dark" : ""}`}>
          <div className="header-left">
          <MenuIcon />
              <Link to='/'><img className='header-logo' 
              src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='YouTube' />
              </Link>
          </div>
          <div className='header-center'>
          <div className="header-right">
            <VideoCallIcon className='header-icon'/>
            <AppsIcon className='header-icon'/>
            <NotificationsIcon className='header-icon'/>
            <Avatar alt='' />
          </div>
          </div>
        </div>
        </ThemeContext.Provider>
        </>
    )
}

export default Header;