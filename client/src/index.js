import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { About, Dashboard, Login, Register } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import {Container} from 'reactstrap';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar></Navbar>
      <Container>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/about" component={About}></Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
