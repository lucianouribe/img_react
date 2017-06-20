import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import App from './containers/App';
import Admin from './components/Admin';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Panoramicos from './components/Panoramicos';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin'},
  redirectAction: () => browserHistory.push('/'),
  wrapperDisplayName: 'UserlsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="main" component={Main} />
      <Route path="navbar" component={Navbar} />
      <Route path="signup" component={SignUp} />
      <Route path="signin" component={SignIn} />
      <Route path="contact" component={Contact} />
      <Route path="panos" component={Panoramicos} />

      <Route component={AuthenticatedRoutes}>
        <Route component={AdminRoutes}>
          <Route path="/admin" component={Admin} />
        </Route>
      </Route>

      <Route path="*" status={404} component={NoMatch}/>

    </Route>
  </Route>
)
