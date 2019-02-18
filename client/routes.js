import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import App from './containers/App';
import Admin from './components/Admin';
import HomeTwo from './components/HomeTwo';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Panoramicos from './components/Panoramicos';
import Proyectos from './components/Proyectos';
import Translator from './components/Translator';
import Carrusels from './components/Carrusels';

// const AdminAccess = UserAuthWrapper({
//   authSelector: state => state.user,
//   predicate: user => { return user.role === 'admin'},
//   redirectAction: () => browserHistory.push('/'),
//   wrapperDisplayName: 'UserlsAdmin'
// })

// const AdminRoutes = AdminAccess( (props) => props.children )

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component={HomeTwo} />
      <Route path="home" component={HomeTwo} />
      <Route path="main" component={Main} />
      <Route path="signin" component={SignIn} />
      <Route path="contact" component={Contact} />
      <Route path="panos" component={Panoramicos} />
      <Route path="tutorials" component={Proyectos} />
      <Route path="transliterator" component={Translator} />
      <Route path="carrusels" component={Main} />

      {/* <Route component={AuthenticatedRoutes}>
        <Route component={AdminRoutes}> */}
          <Route path="/admin" component={Admin} />
        {/* </Route>
      </Route> */}

      <Route path="*" status={404} component={NoMatch}/>

    </Route>
  </Route>
)
