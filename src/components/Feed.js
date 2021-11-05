import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useStateContext } from '../context-api/ContextProvider';
import VideoItem from './Item';


const Feed = () => {
  const { data, loading, results, fetchData, fetchDefaultData } = useStateContext();
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (keyword) {
      fetchData(`search?part=snippet&q=${keyword}`);
    } else {
      fetchData(`videos?part=snippet&chart=mostPopular`);
    }
    fetchDefaultData('videoCategories?part=snippet');
    // eslint-disable-next-line 
  }, [keyword]);

  if (loading) {
    return <><br /><div>Loading...</div></>};

  return (
    <>
    <div className='container'>
    <Box>
      <Box className='categories'>
          {results?.map((category) => (
            <Button
              className='category-button'
              onClick={() => setKeyword(category.snippet.title)}
              key={category?.id}>
              {category?.snippet?.title}
            </Button>
          ))}
      </Box>
      <Box>
        <Typography>
          <h4>Popular Videos</h4>
        </Typography>
      </Box>
      <Box>
        {data?.map((video) => (
          <VideoItem
            video={video}
            id={(video.id.videoId && video.id.videoId) || video.id}
            key={(video.id.videoId && video.id.videoId) || video.id}
          />
        ))}
      </Box>
    </Box>
    </div>
    </>
  );
};

export default Feed;