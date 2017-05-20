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
    const fotosGifs = 'fotosGifs';

    const fotosDetalles = 'fotosDetalles';
    const fotosPaisajes = 'fotosPaisajes';
    const fotosUrbano = 'fotosUrbano';
    const fotosTexturas = 'fotosTexturas';
    const fotosMuelles = 'fotosMuelles';
    const fotosCuadrados = 'fotosCuadrados';

    const translate = 'translate';
    const morse = 'morse';
    const calculator = 'calculator';
    const equilibrio = 'equilibrio';

    const PicPanoramics = 'PicPanoramics';
    const PicRenders = 'PicRenders';
    const PicProducts = 'PicProducts';
    const PicGallery = 'PicGallery';
    const PicProgramming = 'PicProgramming';


    return(
      <div className="dash-buttons">
        <ul className="collapsible" data-collapsible="accordion">
          <li>
            <div className="collapsible-header"><i className="world"></i>Panoramicos 360</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panodigital, PicPanoramics)}><a>Digital</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panofotografia, PicPanoramics)}><a>Fotografia</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panoradar, PicPanoramics)}><a>Radar</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="teapot"></i>Renders</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, productos, PicRenders)}><a>Productos</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, espacios, PicRenders)}><a>Espacios</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, otros, PicRenders)}><a>Otros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="bulb"></i>Fotografia Productos</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosGifs, PicProducts)}><a>360 Gifs</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosJoyas, PicProducts)}><a>Joyas</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosComp, PicProducts)}><a>Componentes</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosCuadros, PicProducts)}><a>Cuadros</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="gallery_icon"></i>Galeria Imagenes</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosDetalles, PicGallery)}><a>Detalles</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosPaisajes, PicGallery)}><a>Paisajes</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosUrbano, PicGallery)}><a>Urbano</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosTexturas, PicGallery)}><a>Texturas</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosMuelles, PicGallery)}><a>Muelles</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosCuadrados, PicGallery)}><a>Cuadrados</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="programming_icon"></i>Programming</div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(translate, PicProgramming)}><a>Cyrillic</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(morse, PicProgramming)}><a>Morse</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(calculator, PicProgramming)}><a>Calculator</a></div>
            <div className="collapsible-body side-but hide" onClick={() => this.props.cardOpener(equilibrio, PicProgramming)}><a>Equilibrio</a></div>
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
