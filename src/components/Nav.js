import React from 'react';
import { Typography, Box } from '@mui/material';
import SearchField from './SearchField';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <Box>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography>
          YouTube API
        </Typography>
      </Link>
      <SearchField />
    </Box>
  );
};

export default Nav;
