import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();
const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    const data = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: 'AIzaSyCcran80MZAIxnP6nWwkRd1O-qEj634L_A',
        maxResults: 5,
      },
    });
    console.log(data);
    setData(data?.data?.items);
    setLoading(false);
  };

  const fetchDefaultData = async (url) => {
    const seedData = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: 'AIzaSyCcran80MZAIxnP6nWwkRd1O-qEj634L_A',
        maxResults: 5,
      },
    });
    setResults(seedData?.data?.items);
    console.log(seedData);
  };


  return (
    <Context.Provider
      value={{
        fetchData,
        fetchDefaultData,
        results,
        data,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);