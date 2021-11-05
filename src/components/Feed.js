import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useStateContext } from '../context-api/ContextProvider';
import Item from './Item';


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

  if (loading) {return <div>Loading...</div>}

  return (
    <>
    <br />
    <br />
     <Typography>
          Popular Videos
        </Typography>
    <div className='left'>
        {results?.map((category) => (
            <Button
              className='category-button'
              onClick={() => setKeyword(category.snippet.title)}
              key={category?.id}>
              {category?.snippet?.title}
            </Button>
          ))}
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

export default Feed;