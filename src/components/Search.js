import React from 'react';
//import { Box } from '@mui/material';
import Item from './Item';
import { useStateContext } from '../context-api/ContextProvider';


const Search = () => {
  const { data, loading } = useStateContext();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <br />
    <br />
    <h4>Search Results</h4>
    <div className='left'>
        {/* {data?.map((category) => (
            <Box
              key={category?.id}>
              {category?.snippet?.title}
            </Box>
          ))} */}
        {data?.map((video) => (
          <>
          <div className='left'>
          <Item
            video={video}
            id={(video.id.videoId && video.id.videoId) || video.id}
            key={(video.id.videoId && video.id.videoId) || video.id}
          />
          </div>
          <div className='right'>
            <h5 className='description'>Description: {video?.snippet?.description}</h5>
          </div>
          </>
        ))}
    </div>
    </>
  );
};

export default Search;
