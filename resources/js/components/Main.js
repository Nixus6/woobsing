import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./User/Form"
import List from "./User/List"
import Edit from "./User/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
  
function Main(){
  return (
    <Router>
      <main>
        <Nav/>
        <Switch>
          <Route path="/user/index" exact component={List} />
          <Route path="/user/form"  component={Form} />
          <Route path="/user/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  )
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById('mainuser'));