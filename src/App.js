import * as React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
//import ReactDOM from 'react-dom';

import { Button } from '@mui/material';

const App = () => {
  
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [defaultData, setDefaultData] = useState([])
//const [keyword, setKeyword] = useState('');
const baseUrl = `https://www.googleapis.com/youtube/v3`
  

const fetchData = async (url) => {
  setLoading(true);
  const data = await axios.get(`${baseUrl}/${url}`, {
    params: {
        //key: 'AIzaSyDVaQm89lEvlCfeB5ArCXPhv12Lak65_nU',
        key: process.env.REACT_APP_API_KEY,
        maxResults: '10',
    },
  });
  console.log(data.data);
  setData(data?.data?.items);
  setLoading(false);
};

const fetchDefaultData = async (url) => {
  const getDefaultData = await axios.get(`${baseUrl}/${url}`, {
    params: {
      //key: 'AIzaSyDVaQm89lEvlCfeB5ArCXPhv12Lak65_nU',
      key: process.env.REACT_APP_API_KEY,
      maxResults: '10',
  },
  });
  console.log(getDefaultData.data, defaultData);
  setDefaultData(getDefaultData?.data?.items);
};

useEffect (() => {
  setLoading(true);
  setError(null);
  try {
    fetchData('search?part=snippet&type=video&q=react');
    fetchDefaultData('search?part=snippet&type=video&q=react');
    } catch (error) {
      setError(error);
   }
  setLoading(false);
   // eslint-disable-next-line 
}, []);

return (
    <>
      <div className="App">
      <h1>Youtube API</h1>
      <br />
      <input label='Search' />
      <Button variant="contained">Submit</Button>
      <br />
      <br />
      {loading ? ( <p>Loading...</p> ) : (<p></p>)}
      {error && <div>Error: {error.message}</div>}
      
      {data.map((item) => (
        <>
          <div className='video-icon' key={item.snippet.url}>
            <h2>{item.snippet.title}</h2>
            <h4>{item.snippet.id}</h4>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          </div>
        </>
        ))}
      </div>
    </>
  );
}

export default App;
