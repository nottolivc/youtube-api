import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context-api/ContextProvider';

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
      {videoDetail && (
        <Box className='video-detail-container'>
          <Box>
            <Box className='video-detail'>
              <iframe className='video-card' title={'play'} src={`https://www.youtube.com/watch?v=${id}`} />
              <Typography>
                {videoDetail?.snippet?.title}
              </Typography>
              <Box>
                <Box sx={{ opacity: 0.8 }}>
                  <Typography sx={{ marginBottom: '5px' }}>
                    {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString('en-US')}{' '}
                    views
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 10,
            }}
            className='related-videos'
          >
            <Typography>Related Videos</Typography>
            <Box className='related-videos-container'>
              {data?.map((video) => (
                <Item
                  video={video}
                  id={(video.id.videoId && video.id.videoId) || video.id}
                  key={(video.id.videoId && video.id.videoId) || video.id}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Detail;