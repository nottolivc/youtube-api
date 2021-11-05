import React from 'react';
import { Box } from '@mui/material';
import Item from './Item';
import { useStateContext } from '../context-api/ContextProvider';


const Search = () => {
  const { data, loading } = useStateContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className='container'>
    <Box className='card'>
      {data.length !== 0 &&
        data.map((video) => (
          <Item
            key={video.id.videoId}
            video={video}
            id={video.id.videoId}
          />
        ))}
    </Box>
    </div>
    </>
  );
};

export default Search;
