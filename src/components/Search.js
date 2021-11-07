import React, { useContext } from 'react';
import { CircularProgress } from '@mui/material';
import Item from './Item';
import { useStateContext } from '../context-api/ContextProvider';
import { ThemeContext } from '../context-api/ThemeContext';
import Moment from 'react-moment';

const Search = () => {
  const { data, loading } = useStateContext();
  const theme = useContext(ThemeContext);
  if (loading) {
    return <div>Loading...<br /><CircularProgress /></div>};
  
  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className={`container${theme.darkMode ? "_dark" : ""}`}>
    <h2>Search Results</h2>

    <div className={`left${theme.darkMode ? "_dark" : ""}`}>
        {data?.map((video) => (
        <>
        <div className={`left${theme.darkMode ? "_dark" : ""}`}>
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

export default Search;
