import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Nav from './components/Nav';
import { Box } from '@mui/material';
import Detail from './components/Detail';
import Search from './components/Search';
import Header from './components/Header';
import SidePanel from './components/SidePanel';

const App = () => {
  return (
    <Router>
      <Box>
        <Header />
        <div className='App'>
        <Nav />
        {/* <SidePanel /> */}
        <Switch>
          <Route exact path='/' component={Feed} />
          <Route path='/video-details/:id' component={Detail} />
          <Route path='/search' component={Search} />
        </Switch>
        </div>
      </Box>
    </Router>
  );
};

export default App;