import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const Item = ({ video, id }) => {
  
  return (
    <Link to={video?.snippet?.thumbnails?.medium.url ? `/video-details/${id}` : `/video-details/cV2gBU6hKfY`}
      onClick={() => window.scrollTo(0, 0)}>
      <Card className='recipe-card'>
        <CardMedia
          component='img'
          height='250'
          image={video?.snippet?.thumbnails?.high.url || 'no img'}
          alt=''/>
        <CardContent>
          <Typography>{video?.snippet?.title}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Item;