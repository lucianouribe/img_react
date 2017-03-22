import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import DashButtons from './DashButtons';


class Navbar extends Component {

  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.navs = this.navs.bind(this);
    this.sideNav = this.sideNav.bind(this);

  }

  logout(e) {
    e.preventDefault();
    console.log('logout dispatcher');
    this.props.dispatch(logout(this.props.history));
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }
  // <Link to="/" className="brand-logo"></Link>
  // <h5 className="dash">Dashboard</h5>

  navs() {
    switch(this.props.user.role) {
      case'developer':
        return(
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        );
      case'admin':
        return(
          <div>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/main'>Main</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        );
      default:
        return(
          <div>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/signin'>LogIn</Link></li>
          </div>
        );
    }
  }

  sideNav(){
    return(
      <div>
        <li><Link className="collapsible-header" to='/home'>Home</Link></li>
        <li><Link className="collapsible-header" to='/home'>Contact</Link></li>
        <li><DashButtons id="side-menu" infoSpongeAjax={this.props.infoSpongeAjax} infoSpongePanos={this.props.infoSpongePanos}/></li>
      </div>
    )
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href='#' data-activates='mobile' className='button-collapse'>
              <i className="hamburger"></i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className='side-nav' id='mobile'>
              {this.sideNav()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar);
