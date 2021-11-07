import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Search from './components/Search';
import Header from './components/Header';
import { ThemeContext } from './context-api/ThemeContext';
import SidePanel from './components/SidePanel';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = { darkMode, setDarkMode};
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className={`App${theme.darkMode ? "_dark" : ""}`}>
      <Router>
          <Header />
          <Nav />
          <div onClick={toggleMode} className={`container${theme.darkMode ? "_dark" : ""}`}>
              <h5 className='toggle'>Click here for Dark Mode</h5>
          </div>
          <Route path='/search' component={Search} />
          <Switch>
            <Route exact path='/' component={Feed} />
            <Route path='/video-details/:id' component={Detail} />
          </Switch>
      </Router>
      <SidePanel />
    </div>
    </ThemeContext.Provider>
    </>
  );
};

export default App;