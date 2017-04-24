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
    this.theDoubt = this.theDoubt.bind(this);
  }

  logout(e) {
    e.preventDefault();
    console.log('logout dispatcher');
    this.props.dispatch(logout(this.props.history));
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  componentDidUpdate() {
    $('.collapsible-body').on('click', function() {
     $('.button-collapse').sideNav('hide');
    });
  }


  navs() {
    switch(this.props.user.role) {
      case'visitor':
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
            <li><Link to='/admin'>Admin</Link></li>
            <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
          </div>
        );
      default:
        return(
          <div>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/signin'>LogIn</Link></li>
          </div>
        );
    }
  }

  theDoubt(){
    if(this.props.user.role === "admin" || this.props.user.role === "visitor"){
      return(
        <li><a style={{ cursor: 'pointer' }} onClick={this.logout}>Logout</a></li>
      )
    } else {
      return (
        <li><Link className="collapsible-header" to='/signin'><i className="login-icon"></i>Login</Link></li>
      )
    }
  }

  sideNav(){
    return(
      <div>
        <li><Link className="collapsible-header" to='/home'><i className="home-icon"></i>Home</Link></li>
        <li><DashButtons id="side-menu"
        cardOpener={this.props.cardOpener}
        infoSpongeAjax={this.props.infoSpongeAjax} infoSpongePanos={this.props.infoSpongePanos}/></li>
        <li><Link className="collapsible-header" to='/contact'><i className="contact_icon"></i>Contact</Link></li>
        {this.theDoubt()}
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
