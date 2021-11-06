import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { ThemeContext } from '../context-api/ThemeContext';


const Item = ({ video, id }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className={`left${theme.darkMode ? "_dark" : ""}`}>
    <Link to={video?.snippet?.thumbnails?.medium.url ? `/video-details/${id}` : `/video-details/cV2gBU6hKfY`}
      onClick={() => window.scrollTo(0, 0)}>
      <Card className='card'>
        <CardMedia
          component='img'
          height='250'
          image={video?.snippet?.thumbnails?.high.url || 'no img'}
          alt='No Preview Available'
        />
        <CardContent>
          <Typography>{video?.snippet?.title}</Typography>
        </CardContent>
      </Card>
    </Link>
    </div>
    </ThemeContext.Provider>
    </>
  );
};

export default Item;