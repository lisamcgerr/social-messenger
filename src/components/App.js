import React from 'react';
import '../style/App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Signup';
import ProtectedRoute from './ProtectedRoute';
import { useStateValue } from '../contexts/StateProvider';


const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <Router>
        <Switch>
          <div className="app__body">
          <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
              <Route exact path='/rooms/:roomId'>
                <Sidebar />
                <Chat />
              </Route>
              <Route exact path='/'>
                <Sidebar />
                <Home />
              </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
