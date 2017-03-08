import React, { Component } from 'react';
import { Link } from 'react-router';

class DashButtons extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    $('.collapsible').collapsible();
  }

  render() {
    return(
      <div className="dash-buttons">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="world"></i>Panoramicos 360</div>
            <div className="collapsible-body" onClick={this.props.panodigital} >Digital</div>
            <div className="collapsible-body" onClick={this.props.panofotografia}>Fotografia</div>
            <div className="collapsible-body" onClick={this.props.panoradar}>Radar</div>
          </li>
          <li>
            <div className="collapsible-header"><i className="teapot"></i>Renders</div>
            <div className="collapsible-body" onClick={this.props.renderProd}><a>Productos</a></div>
            <div className="collapsible-body" onClick={this.props.renderEsp}><a>Espacios</a></div>
            <div className="collapsible-body" onClick={this.props.renderOtr}><a>Otros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Programming</div>
            <div className="collapsible-body"><a>What time is it?</a></div>
            <div className="collapsible-body"><a>Batterie</a></div>
            <div className="collapsible-body"><a>Something else</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">filter_drama</i>Fotografia Productos</div>
            <div className="collapsible-body" onClick={this.props.fotosJoyas}><a>Joyas</a></div>
            <div className="collapsible-body" onClick={this.props.fotosComp}><a>Componentes</a></div>
            <div className="collapsible-body" onClick={this.props.fotosCuadros}><a>Cuadros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">place</i>Fotografia Decorativa</div>
            <div className="collapsible-body" onClick={this.props.fotosDetalles}><a>Detalles</a></div>
            <div className="collapsible-body" onClick={this.props.fotosPaisajes}><a>Paisajes</a></div>
            <div className="collapsible-body" onClick={this.props.fotosUrbano}><a>Urbano</a></div>
            <div className="collapsible-body" onClick={this.props.fotosTexturas}><a>Texturas</a></div>
            <div className="collapsible-body" onClick={this.props.fotosMuelles}><a>Muelles</a></div>
            <div className="collapsible-body" onClick={this.props.fotosCuadrados}><a>Cuadrados</a></div>
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
