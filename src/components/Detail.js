import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context-api/ContextProvider';
import ReactPlayer from 'react-player';
import Item from './Item';

const Detail = () => {
  
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
        <div className='left'>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
              <Typography>
                {videoDetail?.snippet?.title}
              </Typography>
                  <Typography>
                    {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString('en-US')}{' '}
                    views
                  </Typography>
            </div>
            <div className='right'>
            <Typography>Related</Typography>
              {data?.map((video) => (
                <Item
                  video={video}
                  id={(video.id.videoId && video.id.videoId) || video.id}
                  key={(video.id.videoId && video.id.videoId) || video.id}
                />
              ))}
          </div>
    </>
  );
};

export default Detail;