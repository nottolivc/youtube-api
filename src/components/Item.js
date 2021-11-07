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
      <Card className='card' style={{ position: 'relative'}}>
        <CardMedia
          component='img'
          height='250'
          image={video?.snippet?.thumbnails?.high.url || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativebloq.com%2Fnews%2Fyoutube-bhm-new-logo&psig=AOvVaw1S94ZVaGvrs4T7yT3NiyH9&ust=1636325857227000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjawf3qhPQCFQAAAAAdAAAAABAD'}
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