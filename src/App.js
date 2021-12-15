import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <h2>Client Auth Project</h2> */}
      <NavBar />
      <Switch>
        <Route path='/logout' component={null} />
        <Route path='/friends/add' component={null} /> 
        <Route path='/friends' component={null} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
