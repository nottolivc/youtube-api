import React from 'react';
import { CircularProgress } from '@mui/material';
import Item from './Item';
import { useStateContext } from '../context-api/ContextProvider';
//import SidePanel from './SidePanel';

const Search = () => {
  const { data, loading } = useStateContext();
  if (loading) {
    return <div>Loading...<br /><CircularProgress /></div>};
  
  return (
    <>
    <br />
    <br />
    <h2>Search Results</h2>
    <div className='left'>
        {/* {data?.map((category) => (
            <div
              key={category?.id}>
              {category?.snippet?.title}
            </div>
          ))} */}
        {data?.map((video) => (
          <>
        <div className='left'>
          <Item
            video={video}
            id={(video.id.videoId && video.id.videoId) || video.id}
            key={(video.id.videoId && video.id.videoId) || video.id}
            style={{}}
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

export default Search;
