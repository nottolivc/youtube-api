import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
        <Header />
        <div className='App'>
        <Nav />
        <Route path='/search' component={Search} />
        <Switch>
          <Route exact path='/' className='column left' component={Feed} />

          <Route path='/video-details/:id' className='column right' component={Detail} />
        </Switch>
        </div>
    </Router>
  );
};

export default App;