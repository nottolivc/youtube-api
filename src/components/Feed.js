import React, { useEffect, useState, useContext } from 'react';
import {  Button, CircularProgress  } from '@mui/material';
import { useStateContext } from '../context-api/ContextProvider';
import Item from './Item';
import { ThemeContext } from '../context-api/ThemeContext';

const Feed = () => {
  const { data, loading, results, fetchData, fetchDefaultData } = useStateContext();
  const [keyword, setKeyword] = useState();
  
  const theme = useContext(ThemeContext);

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
    <ThemeContext.Provider value={theme}>
    <br />
    <br />
     <h2>Popular Videos</h2>
      <div className={`left${theme.darkMode ? "_dark" : ""}`}>
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
          <div className={`left${theme.darkMode ? "_dark" : ""}`} key={video.id}>
          <Item
            video={video}
            id={(video.id.videoId && video.id.videoId) || video.id}
            key={(video.id.videoId && video.id.videoId) || video.id}
            style={{}}
          />
          </div>
          <div className={`right${theme.darkMode ? "_dark" : ""}`} key={video.id}>
            <div className={`description${theme.darkMode ? "_dark" : ""}`} style={{textAlign: 'left', padding: '20px'}}>
              <h4>{video?.snippet?.title}</h4>
              <h5>{video?.snippet?.publishedAt}</h5>
              <h5>{video?.snippet?.channelTitle}</h5>
              <p>{video?.snippet?.description}</p>
              </div>
          </div>
          </>
        ))}
    </div>
    </ThemeContext.Provider>
    </>
  );
};

export default Feed;