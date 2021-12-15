import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <h2>Client Auth Project</h2> */}
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
