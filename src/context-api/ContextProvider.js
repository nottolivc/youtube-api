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
        key: 'AIzaSyDVaQm89lEvlCfeB5ArCXPhv12Lak65_nU',
        maxResults: 5,
      },
    });
    console.log(data);
    setData(data?.data?.items);
    setLoading(false);
  };

  const fetchDefaultData = async (url) => {
    const data1 = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: 'AIzaSyDVaQm89lEvlCfeB5ArCXPhv12Lak65_nU',
        maxResults: 5,
      },
    });
    setResults(data1?.data?.items);
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