import React, { useEffect, useState } from 'react';
import {  Button, CircularProgress  } from '@mui/material';
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
  if (loading) {
  return <div>Loading...<br /><CircularProgress /></div>};

  return (
    <>
    <br />
    <br />
     <h2>Popular Videos</h2>
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
          <div className='right' key={video.id}>
            <div className='description' style={{textAlign: 'left', padding: '20px'}}>
              <h4>{video?.snippet?.title}</h4>
              <h5>{video?.snippet?.publishedAt}</h5>
              <h5>{video?.snippet?.channelTitle}</h5>
              <p>{video?.snippet?.description}</p>
              </div>
          </div>
          </>
        ))}
    </div>
    </>
  );
};

export default Feed;