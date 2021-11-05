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
  }, [keyword, fetchData, fetchDefaultData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
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
          {keyword || 'Recommended'} Videos
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
  );
};

export default Feed;