import React, { Component } from 'react';
import Navbar from './Navbar';

class Home extends Component {

  componentDidMount() {
    $('.parallax').parallax();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="square valign-wrapper"><h3>Some text here</h3></div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://imagenes360.net/devume/slc.jpg"/>
          </div>
        </div>
        <div className="square"></div>
      </div>
    )
  }
}

export default Home;
