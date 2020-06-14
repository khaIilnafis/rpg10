import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { About, Dashboard, Login, Register } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
