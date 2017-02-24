import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo logo"></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/main'>Imagenes360</Link></li>
              <li><Link to='/home'>Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
