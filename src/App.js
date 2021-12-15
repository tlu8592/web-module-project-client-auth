import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  const history = useHistory();

  return (
    <div className="App">
      {/* <h2>Client Auth Project</h2> */}
      <NavBar />
      <Switch>
        <Route path='/logout' component={null} />
        <Route path='/friends/add' component={null} /> 
        <Route path='/friends' component={FriendsList} />
        <Route path='/login' >
          <Login history={history} />
        </Route>
        <Route exact path='/'>
          <Login history={history} /> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
