import React, { Component } from 'react';
import { Link } from 'react-router';
import Stuff from '../Stuff';

class DashButtons extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    const panoradar = {name: 'Aplicativo con radar', address: "http://imagenes360.net/radar/"};
    const panofotografia = {name: 'Fotografia 360', address: "http://imagenes360.net/panofoto/"};
    const panodigital = {name: 'Digital 360', address: "http://imagenes360.net/tresde/"};

    // const renderProd = Stuff.slideRenderProd;
    // const renderEsp = Stuff.slideRenderEsp;
    // const renderOtr = Stuff.slideRenderOtr;
    const productos = 'products';
    const espacios = 'spaces';
    const otros = 'others';

    const fotosJoyas = Stuff.slideFotosJoyas;
    const fotosComp = Stuff.slideFotosComp;
    const fotosCuadros = Stuff.slideFotosCuadros;

    const fotosDetalles = Stuff.slideFotosDetalles;
    const fotosPaisajes = Stuff.slideFotosPaisajes;
    const fotosUrbano = Stuff.slideFotosUrbano;
    const fotosTexturas = Stuff.slideFotosTexturas;
    const fotosMuelles = Stuff.slideFotosMuelles;
    const fotosCuadrados = Stuff.slideFotosCuadrados;


    return(
      <div className="dash-buttons">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="world"></i>Panoramicos 360</div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongePanos(e, panodigital)} >Digital</div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongePanos(e, panofotografia)}>Fotografia</div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongePanos(e, panoradar)}>Radar</div>
          </li>
          <li>
            <div className="collapsible-header"><i className="teapot"></i>Renders</div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeAjax(e, productos)}><a>Productos</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeAjax(e, espacios)}><a>Espacios</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeAjax(e, otros)}><a>Otros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="bulb"></i>Fotografia Productos</div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosJoyas)}><a>Joyas</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosComp)}><a>Componentes</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosCuadros)}><a>Cuadros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">place</i>Fotografia Decorativa</div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosDetalles)}><a>Detalles</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosPaisajes)}><a>Paisajes</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosUrbano)}><a>Urbano</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosTexturas)}><a>Texturas</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosMuelles)}><a>Muelles</a></div>
            <div className="collapsible-body" onClick={(e) => this.props.infoSpongeImages(e, fotosCuadrados)}><a>Cuadrados</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Programming</div>
            <div className="collapsible-body"><a>What time is it?</a></div>
            <div className="collapsible-body"><a>Batterie</a></div>
            <div className="collapsible-body"><a>Something else</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Libros</div>
            <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
            <div className="collapsible-body"><a>Rutas de Oriente</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">whatshot</i>Blogs</div>
            <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
            <div className="collapsible-body"><a>Tribunal de Justicia</a></div>
          </li>
        </ul>
      </div>
    )
  }
}

export default DashButtons;
