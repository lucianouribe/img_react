import React, { Component } from 'react';
import { Link } from 'react-router';
import Stuff from '../Stuff';

class DashButtons extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    $('.collapsible').collapsible();
    $('.side-but').on('click', function() {
      $('.button-collapse').sideNav('hide');
    });
  }

  componentDidUpdate() {
    $('.side-but').on('click', function() {
      $('.button-collapse').sideNav('hide');
    });
  }

  render() {
    // hard coded info
    const panoradar = {name: 'Aplicativo con radar', address: "http://imagenes360.net/pano_03/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};
    const panofotografia = {name: 'Fotografia 360', address: "http://imagenes360.net/pano_02/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};
    const panodigital = {name: 'Digital 360', address: "http://imagenes360.net/pano_01/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};

    // info from a database (it's obvious in Main!)
    const productos = 'products';
    const espacios = 'spaces';
    const otros = 'others';

    const fotosJoyas = 'fotosJoyas';
    const fotosComp = 'fotosComp';
    const fotosCuadros = 'fotosCuadros';

    const fotosDetalles = 'fotosDetalles';
    const fotosPaisajes = 'fotosPaisajes';
    const fotosUrbano = 'fotosUrbano';
    const fotosTexturas = 'fotosTexturas';
    const fotosMuelles = 'fotosMuelles';
    const fotosCuadrados = 'fotosCuadrados';

    const translate = 'translate';
    const morse = 'morse';
    const calculator = 'calculator';


    return(
      <div className="dash-buttons">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="world"></i>Panoramicos 360</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panodigital)} ><a>Digital</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panofotografia)}><a>Fotografia</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panoradar)}><a>Radar</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="teapot"></i>Renders</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, productos)}><a>Productos</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, espacios)}><a>Espacios</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, otros)}><a>Otros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="bulb"></i>Fotografia Productos</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosJoyas)}><a>Joyas</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosComp)}><a>Componentes</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosCuadros)}><a>Cuadros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="gallery_icon"></i>Galeria Imagenes</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosDetalles)}><a>Detalles</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosPaisajes)}><a>Paisajes</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosUrbano)}><a>Urbano</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosTexturas)}><a>Texturas</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosMuelles)}><a>Muelles</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosCuadrados)}><a>Cuadrados</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="programming_icon"></i>Programming</div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(translate)}><a>Cyrillic</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(morse)}><a>Morse</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(calculator)}><a>Calculator</a></div>
          </li>
        </ul>
      </div>
    )
  }
}
// <li>
//   <div className="collapsible-header"><i className="material-icons">whatshot</i>Libros</div>
//   <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
//   <div className="collapsible-body"><a>Rutas de Oriente</a></div>
// </li>
// <li>
//   <div className="collapsible-header"><i className="material-icons">whatshot</i>Blogs</div>
//   <div className="collapsible-body"><a>Bitacora del Motoneto</a></div>
//   <div className="collapsible-body"><a>Tribunal de Justicia</a></div>
// </li>
export default DashButtons;
