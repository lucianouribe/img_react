import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Navbar from './Navbar';
import Carousel from './Carousel';
import Panoramicos from './Panoramicos';
import IdiomaSelector from './IdiomaSelector';

import { setIdioma } from '../actions/idiomas';
import { setQueVeo } from '../actions/queVeo';

import Stuff from '../Stuff';
import Portada from '../Portada';

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
    let WhatDoISee = 'portada';
    this.props.dispatch(setQueVeo(WhatDoISee));
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
    let info = this.props.idiomas;
    return (
      <div>
        <div className="first-section valign-wrapper">
          <div className="brand-logo logo"></div>
          <div className="letreros valign">
            <h1 className="title">{Portada[info].titulo}</h1>
            <h3 className="title">{Portada[info].frasecita}</h3>
            <Link className="ingresa" to='/main'>{Portada[info].botonIngreso}</Link>
          </div>
        </div>
        <div className="grey-bar">
          <IdiomaSelector />
          <Link className="btn-contacto" to='/contact'><span>{Portada[info].botonContacto}</span></Link>
        </div>
        <div className="slider second-section row">
          <ul className="slides col s10 m10">
            <li>
              <div className="caption center-align">
                <div className="sec-img intro-render"></div>
              </div>
              <div className="caption sec-scrp right-align">
                <h3 className="subtitle">{Portada[info].segundaSeccionUno}</h3>
                <h3 className="subtitle">{Portada[info].segundaSeccionDos}</h3>
              </div>
            </li>
            <li>
              <div className="caption center-align">
                <div className="sec-img slide-render"></div>
              </div>
              <div className="caption sec-scrp right-align">
                <h3 className="subtitle">{Portada[info].segundaSeccionTres}</h3>
              </div>
            </li>
            <li>
              <div className="caption left-align">
                <div className="sec-img slide-panos"></div>
              </div>
              <div className="caption sec-scrp right-align">
                <h3 className="subtitle">{Portada[info].segundaSeccionCuatro}</h3>
                <h5 className="subtitle">{Portada[info].segundaSeccionCinco}</h5>
              </div>
            </li>
            <li>
              <div className="caption center-align">
                <div className="sec-img slide-rails"></div>
              </div>
              <div className="caption sec-scrp right-align">
                <h3 className="subtitle">{Portada[info].segundaSeccionSeis}</h3>
                <h5 className="subtitle">{Portada[info].segundaSeccionSiete}</h5>
              </div>
            </li>
            <li>
              <div className="caption center-align">
                <div className="sec-img slide-js"></div>
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
          <div className="soft">
            {this.softwares()}
          </div>
          <div className="third-stuff">
            <h4 className='last'>{Portada[info].ultimaSeccionUna}</h4>
            <Link id="dos" className="ingresa" to='/main'>{Portada[info].botonIngreso}</Link>
          </div>
        </div>
        <div className="wine-bar"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas,
    queVeo: state.queVeo
  }
}

export default connect(mapStateToProps)(Home);
