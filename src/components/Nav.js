import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import SearchField from './SearchField';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context-api/ThemeContext';

const Nav = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className={`nav${theme.darkMode ? "_dark" : ""}`}>
      <Link to='/'>
        <Typography>
          YouTube API
        </Typography>
        </Link>
      <SearchField />
    </div>
    </ThemeContext.Provider>
    </>
  );
};

export default Nav;
