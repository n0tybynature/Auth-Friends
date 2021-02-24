import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import FriendsList from "./components/FriendsList";
import './App.css';

function App() {

    const history = useHistory();

    const logout = () => {
      localStorage.removeItem("token");
      history.push("/login")
    };



  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
      </ul>
    
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList}/>
      <Route path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
