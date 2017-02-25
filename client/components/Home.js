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
        <div className="square valign-wrapper"><h3 className="caption panos">360 Panoramics</h3></div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://imagenes360.net/devume/slc.jpg"/>
          </div>
        </div>
        <div className="square"><h3>Renders</h3></div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://imagenes360.net/devume/slc.jpg"/>
          </div>
        </div>
        <div className="square"><h3>Web Programming</h3></div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://imagenes360.net/devume/slc.jpg"/>
          </div>
        </div>
        <div className="square"><h3>Photography</h3></div>
      </div>
    )
  }
}

export default Home;
