import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context-api/ContextProvider';
import ReactPlayer from 'react-player';
import Item from './Item';
import { ThemeContext } from '../context-api/ThemeContext';
import uuid from 'react-uuid';

const Detail = () => {
  const theme = useContext(ThemeContext);
  const { id } = useParams();
  const { data, fetchData, fetchDefaultData, results } = useStateContext();
  const [videoDetail, setVideoDetail] = useState();

  useEffect(() => {
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`);
    fetchDefaultData(`videos?part=snippet,statistics&id=${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    setVideoDetail(results[0]);
  }, [results]);

  if (videoDetail?.snippet?.title) {
    document.title = videoDetail?.snippet?.title;
  }
  return (
      <>
      <ThemeContext.Provider value={theme}>
        <div className={`left${theme.darkMode ? "_dark" : ""}`}>
        <div className={`container${theme.darkMode ? "_dark" : ""}`}>
              <ReactPlayer controls className={`App${theme.darkMode ? "_dark" : ""}`} url={`https://www.youtube.com/watch?v=${id}`} />
              <br />
              <br />
              <h2>{videoDetail?.snippet?.title}</h2>
                  <Typography>{parseInt(videoDetail?.statistics?.viewCount
                    ).toLocaleString('en-US')}{' '}Views</Typography>
            </div>
            </div>
            <div className={`more-related-videos${theme.darkMode ? "_dark" : ""}`}>
            <div className={`right${theme.darkMode ? "_dark" : ""}`}>
            <Typography>Related Videos</Typography>
              {data?.map((video) => (
                <Item
                  video={video}
                  id={(video.id.videoId && video.id.videoId) || video.id}
                  key={uuid()}
                />
              ))}
            </div>
            </div>
            <div className={`related-videos${theme.darkMode ? "_dark" : ""}`}>
            <Typography>More Related</Typography>
              {data?.map((video) => (
                <Item
                  video={video}
                  id={(video.id.videoId && video.id.videoId) || video.id}
                  key={uuid()}
                />
              ))}
          </div>
        </ThemeContext.Provider>
    </>
  );
};

export default Detail;