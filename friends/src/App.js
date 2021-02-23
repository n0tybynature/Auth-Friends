import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { axiosWithAuth } from "./components/axiosAuth";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import './App.css';

function App() {

    const history = useHistory();



  return (
    <Switch>
      <PrivateRoute exact path="/protected" componenet={FriendsList}/>
    <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
