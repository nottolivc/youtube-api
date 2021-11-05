import React from 'react';
import { Box } from '@mui/material';
import VideoItem from './Item';
import { useStateContext } from '../context-api/ContextProvider';


const Search = () => {
  const { data, loading } = useStateContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Box className='card'>
      {data.length !== 0 &&
        data.map((video) => (
          <VideoItem
            key={video.id.videoId}
            video={video}
            id={video.id.videoId}
          />
        ))}
    </Box>
  );
};

export default Search;
