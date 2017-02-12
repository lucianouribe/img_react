import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import RArquitectura from './components/RArquitectura';

export default (
  <Route>
    <Route path="/" component={Home} />
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="main" component={Main} />
    <Route path="navbar" component={Navbar} />
    <Route path="rarquitectura" component={RArquitectura} />
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
