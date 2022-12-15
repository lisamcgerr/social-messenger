import React, { useState } from 'react';
import '../style/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from '../contexts/StateProvider';


const App = () => {
  const [{ user }, dispatch ] = useStateValue();
  
  return (
    <Router>
      <Switch>
        <div className="app">
          {!user ?
           <Login />
           : (
            <div className="app__body">
              <Sidebar />
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </div>
          )}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
