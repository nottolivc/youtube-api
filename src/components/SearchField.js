import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router';
import { useStateContext } from '../context-api/ContextProvider';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState();
  const history = useHistory();
  const { fetchData } = useStateContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/search');
    fetchData(`search?part=snippet&q=${searchTerm}`);
  };

  return (
    <Paper component='form' onSubmit={handleSubmit}>
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
    </Paper>
  );
};

export default SearchField;