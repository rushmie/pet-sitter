import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';
import Register from './Register';
import RegisterPets from './RegisterPets'
import SitterSearchPage from './SitterSearchPage';
import './App.css';

//router handles mapping routes to components
const Router = (
  <BrowserRouter>
    <div className="App-header">
      <Route path="/" component={App} />
      <Route path="/register" component={Register} />
      <Route path="/register-pets" component={RegisterPets} />
      <Route path="/search" component={SitterSearchPage} />
    </div>
  </BrowserRouter>
);
const PetSitterApp = () => (<Router><App/></Router>);
//render Routes to the root div in index.html
ReactDOM.render(Router,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
