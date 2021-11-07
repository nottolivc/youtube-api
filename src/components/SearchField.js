import React, { useState, useContext } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router';
import { useStateContext } from '../context-api/ContextProvider';

import { ThemeContext } from '../context-api/ThemeContext';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const { fetchData } = useStateContext();
  const theme = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/search');
    fetchData(`search?part=snippet&q=${searchTerm}`);
  };

  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className={`${theme.darkMode ? "_dark" : ""}`}>
    <form onSubmit={handleSubmit}>
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => {
          if (e.target.value !== '') {
            setSearchTerm(e.target.value);
          }
        }}
      />
      <IconButton type='submit' aria-label='search'>
        <SearchIcon />
      </IconButton>
    </form>
    </div>
    </ThemeContext.Provider>
    </>
  );
};

export default SearchField;