import React, { useState } from 'react';
import '../style/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const [user, setUser] = useState(null  );
  
  return (
    <Router>
      <Switch>
        <div className="app">
          {!user ?
          (<Route path="/login">
            <Login />
          </Route>
          ) : (
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
