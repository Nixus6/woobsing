import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/user/index">List  </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user/form">Create</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user/edit/5">Edit</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}