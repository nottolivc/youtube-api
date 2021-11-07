import React, { useEffect, useState, useContext } from 'react';
import { CircularProgress  } from '@mui/material';
import { useStateContext } from '../context-api/ContextProvider';
import Item from './Item';
import { ThemeContext } from '../context-api/ThemeContext';
import Moment from 'react-moment';
import uuid from 'react-uuid';

const Feed = () => {
  const { data, loading, results, fetchData, fetchDefaultData } = useStateContext();
  const [keyword, setKeyword] = useState('');
  
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
    <div className={`container${theme.darkMode ? "_dark" : ""}`}>
     <h2>Popular Videos</h2>
      <div className={`left${theme.darkMode ? "_dark" : ""}`}>
        {results?.map((category) => (
          <p style={{ color: 'darkred'}}
              onClick={() => setKeyword(category.snippet.title)}
              key={category?.id}>
              {category?.snippet?.title}
            </p>
          ))}
        {data?.map((video) => (
          <>
          <div className={`left${theme.darkMode ? "_dark" : ""}`} key={video.id}>
          <Item
            video={video}
            id={(video.id.videoId && video.id.videoId) || video.id}
            key={uuid()}
          />
          </div>
          <div className={`right${theme.darkMode ? "_dark" : ""}`} key={uuid()}>
            <div className={`description${theme.darkMode ? "_dark" : ""}`} style={{textAlign: 'left', padding: '20px'}}>
              <h4>{video?.snippet?.title}</h4>
              <h5>{video?.snippet?.channelTitle}</h5>
              <h5><Moment format="YYYY/MM/DD">{video?.snippet?.publishedAt}</Moment></h5>
              <p>{video?.snippet?.description}</p>
              </div>
          </div>
          </>
        ))}
    </div>
    </div>
    </ThemeContext.Provider>
    </>
  );
};

export default Feed;