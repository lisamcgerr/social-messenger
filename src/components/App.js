import React from 'react';
import '../style/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <div className="app">
          <div className="app__body">
            <Sidebar />
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
