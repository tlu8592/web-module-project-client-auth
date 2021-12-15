import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import Logout from './components/Logout';

function App() {
  const history = useHistory();

  return (
    <div className="App">
      {/* <h2>Client Auth Project</h2> */}
      <NavBar />
      <Switch>
        <Route path='/logout'>
          <Logout history={history} />
        </Route>
        <Route path='/friends/add'>
          <AddFriendForm history={history} />  
        </Route> 
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
