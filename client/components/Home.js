import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Stuff from '../Stuff';

class Home extends Component {

  constructor() {
    super();
    this.softwares = this.softwares.bind(this);

    this.state = {
      slideInfo: {}
    };
  }

  componentDidMount() {
    $('.parallax').parallax();
    $('.slider').slider();
    var renderSoft = Stuff.slideRenderSoft
    this.setState({
      slideInfo: { renderSoft }
    });
  }

  softwares() {
    // console.log("this is renderSoft")
    return  (
        <div>
          <ul>
            {Object.keys(this.state.slideInfo).map(key => <Carousel key={key} details={this.state.slideInfo[key]}  />)}
          </ul>
        </div>
      );
  }

  render() {
    return (
      <div>
        <div className="first-section valign-wrapper">
          <div className="brand-logo logo"></div>
          <div className="letreros valign">
            <h1 className="title">Imágenes 360</h1>
            <h3 className="title">renders digitales, fotografia, panoramicos 360, aplicativos web</h3>
            <Link className="ingresa" to='/main'>ingresa</Link>
          </div>
        </div>
        <div className="grey-bar">
          <Link className="contacto right" to='/contact'>contacto</Link>
        </div>
        <div className="slider second-section row">
          <ul className="slides col s10 m10">
            <li>
              <div className="caption center-align">
                <h3 className="subtitle">renders digitales, fotografia, panoramicos 360, aplicativos web</h3>
              </div>
            </li>
            <li>
              <div className="caption center-align">
                <div className="slide-render"></div>
              </div>
              <div className="caption right-align">
                <h3 className="subtitle">Renders</h3>
                <h5 className="subtitle">Productos</h5>
              </div>
            </li>
            <li>
              <div className="caption left-align">
                <div className="slide-panos"></div>
              </div>
              <div className="caption right-align">
                <h3 className="subtitle">Panoramicos 360</h3>
                <h5 className="subtitle">arquitectura, espacios</h5>
              </div>
            </li>
            <li>
              <div className="caption right-align">
                <div className="slide-foto"></div>
                <h3 className="subtitle">Aplicativos web</h3>
                <h5 className="subtitle">React, Ruby on Rails, JS</h5>
              </div>
            </li>
            <li>
            <div className="caption center-align">
              <div className="slide-foto"></div>
              <h3 className="subtitle">Fotografia</h3>
              <h5 className="subtitle">decorativa, productos</h5>
            </div>
            </li>
          </ul>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://imagenes360.net/fotos/paralax/paralax_01.JPG"/>
          </div>
        </div>
        <div className="orange-bar"></div>
        <div className="third-section">
          <div className="soft col s12 m4 offset-m4">
            {this.softwares()}
          </div>
          <div className="third-stuff col s12 m4">
          <h4 className='last'>Mira mi portafolio...</h4>
          <Link id="dos" className="ingresa" to='/main'>ingresa</Link>
          </div>
        </div>
        <div className="wine-bar"></div>
      </div>
    )
  }
}

export default Home;
