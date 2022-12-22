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
    <Router>
      <Switch>
        <div className="app">
            <div className="app__body">
\             <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <ProtectedRoute user={user} >
                <Sidebar />
                <Route>
                  <Chat path="/rooms/roomId" />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </ProtectedRoute>
            </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
