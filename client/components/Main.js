import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Carousel from './Carousel';
import Trisixti from './Trisixti';
import Navbar from './Navbar';
import Stuff from '../Stuff';

class Main extends Component {

  constructor() {
    super();
    this.renderSomething = this.renderSomething.bind(this);
    this.renderOtr = this.renderOtr.bind(this);
    this.renderProd = this.renderProd.bind(this);
    this.renderEsp = this.renderEsp.bind(this);
    this.fotosJoyas = this.fotosJoyas.bind(this);
    this.fotosComp = this.fotosComp.bind(this);
    this.fotosCuadros = this.fotosCuadros.bind(this);
    this.fotosDetalles = this.fotosDetalles.bind(this);
    this.fotosPaisajes = this.fotosPaisajes.bind(this);
    this.fotosUrbano = this.fotosUrbano.bind(this);
    this.fotosTexturas = this.fotosTexturas.bind(this);
    this.fotosMuelles = this.fotosMuelles.bind(this);
    this.fotosCuadrados = this.fotosCuadrados.bind(this);
    // 360 panos
    this.mainRenderer = this.mainRenderer.bind(this);
    this.panoRenderer = this.panoRenderer.bind(this);
    this.panodigital = this.panodigital.bind(this);
    this.panofotografia = this.panofotografia.bind(this);
    this.panoradar = this.panoradar.bind(this);

    this.state = {
      slideInfo: {},
      whichOne: ''
    };
  }

  // renders and photos
  renderSomething(info) {
    this.setState({
      slideInfo: {info},
      whichOne: "carousel"
    });
  }
  renderOtr(e) {
    e.preventDefault();
    var info = Stuff.slideRenderOtr
    this.renderSomething(info);
  }
  renderProd(e) {
    e.preventDefault();
    var info = Stuff.slideRenderProd
    this.renderSomething(info);
  }
  renderEsp(e) {
    e.preventDefault();
    var info = Stuff.slideRenderEsp
    this.renderSomething(info);
  }
  fotosJoyas(e) {
    e.preventDefault();
    var info = Stuff.slideFotosJoyas
    this.renderSomething(info);
  }
  fotosComp(e) {
    e.preventDefault();
    var info = Stuff.slideFotosComp
    this.renderSomething(info);
  }
  fotosCuadros(e) {
    e.preventDefault();
    var info = Stuff.slideFotosCuadros
    this.renderSomething(info);
  }
  fotosDetalles(e) {
    e.preventDefault();
    var info = Stuff.slideFotosDetalles
    this.renderSomething(info);
  }
  fotosPaisajes(e) {
    e.preventDefault();
    var info = Stuff.slideFotosPaisajes
    this.renderSomething(info);
  }
  fotosUrbano(e) {
    e.preventDefault();
    var info = Stuff.slideFotosUrbano
    this.renderSomething(info);
  }
  fotosTexturas(e) {
    e.preventDefault();
    var info = Stuff.slideFotosTexturas
    this.renderSomething(info);
  }
  fotosMuelles(e) {
    e.preventDefault();
    var info = Stuff.slideFotosMuelles
    this.renderSomething(info);
  }
  fotosCuadrados(e) {
    e.preventDefault();
    var info = Stuff.slideFotosCuadrados
    this.renderSomething(info);
  }
  // panoramics
  panoRenderer(info) {
    console.log('this is pano digital');
    this.setState({
      slideInfo: {info},
      whichOne: "trisixti"
    });
  }

  panodigital(e) {
    e.preventDefault();
    var info = {name: 'Digital 360', address: "http://imagenes360.net/tresde/"}
    console.log(info)
    this.panoRenderer(info);
  }
  panofotografia(e) {
    e.preventDefault();
    var info = {name: 'Fotografia 360', address: "http://imagenes360.net/panofoto/"}
    console.log(info)
    this.panoRenderer(info);
  }
  panoradar(e) {
    e.preventDefault();
    var info = {name: 'Aplicativo con radar', address: "http://imagenes360.net/radar/"}
    console.log(info)
    this.panoRenderer(info);
  }

  mainRenderer(){
    if(this.state.whichOne === "carousel") {
      return (
        <ul>
          {Object.keys(this.state.slideInfo).map(key => <Carousel key={key} details={this.state.slideInfo[key]} />)}
        </ul>
      );
    } else if(this.state.whichOne === "trisixti") {
      return (
        <ul>
          {Object.keys(this.state.slideInfo).map(key => <Trisixti key={key} details={this.state.slideInfo[key]}/>)}
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="col s12 m2">
          <Dashboard
              renderOtr={this.renderOtr }
              renderProd={this.renderProd }
              renderEsp={this.renderEsp }
              fotosJoyas={this.fotosJoyas }
              fotosComp={this.fotosComp }
              fotosCuadros={this.fotosCuadros }
              fotosDetalles={this.fotosDetalles }
              fotosPaisajes={this.fotosPaisajes }
              fotosUrbano={this.fotosUrbano }
              fotosTexturas={this.fotosTexturas }
              fotosMuelles={this.fotosMuelles }
              fotosCuadrados={this.fotosCuadrados }
              panodigital={this.panodigital }
              panofotografia={this.panofotografia }
              panoradar={this.panoradar }
          />
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m1">
            {this.mainRenderer()}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
