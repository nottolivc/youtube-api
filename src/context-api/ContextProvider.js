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
        key: process.env.REACT_APP_API_KEY,
        maxResults: 8,
      },
    });
    console.log(data.data);
    setData(data?.data?.items);
    setLoading(false);
  };

  const fetchDefaultData = async (url) => {
    const seedData = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        maxResults: 8,
      },
    });
    setResults(seedData?.data?.items);
    console.log(seedData.data);
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