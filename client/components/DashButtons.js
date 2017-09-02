import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Stuff from '../Stuff';
import Portada from '../Portada';


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
// public/panoramicos/pano_01/index.html
  render() {
    let info = this.props.idiomas;
    // hard coded info
    const panoradar = {name: 'Aplicativo con radar', address: "../panoramicos/pano_03_s/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};
    const panofotografia = {name: 'Fotografia 360', address: "../panoramicos/pano_02_s/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};
    const panodigital = {name: 'Digital 360', address: "../panoramicos/pano_01_s/", description: 'hello ooooo', logo1: 'tridimax', logo2: 'photoshop'};

    // info from a database (it's obvious in Main!)
    const productos = 'products';
    const espacios = 'spaces';
    const otros = 'others';
    const renderGifs = 'renderGifs';

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
            <div className="collapsible-header"><i className="world"></i>{Portada[info].panos360}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panodigital, PicPanoramics)}><a>{Portada[info].digital}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panofotografia, PicPanoramics)}><a>{Portada[info].fotografia}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panoradar, PicPanoramics)}><a>{Portada[info].radar}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="teapot"></i>{Portada[info].renders}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, renderGifs, PicRenders)}><a>{Portada[info].gifs360}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, productos, PicRenders)}><a>{Portada[info].productos}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, espacios, PicRenders)}><a>{Portada[info].espacios}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, otros, PicRenders)}><a>{Portada[info].otros}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="bulb"></i>{Portada[info].fotoproductos}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosGifs, PicProducts)}><a>{Portada[info].gifs360}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosJoyas, PicProducts)}><a>{Portada[info].joyas}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosComp, PicProducts)}><a>{Portada[info].componentes}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosCuadros, PicProducts)}><a>{Portada[info].cuadros}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="gallery_icon"></i>{Portada[info].galeria}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosDetalles, PicGallery)}><a>{Portada[info].detalles}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosPaisajes, PicGallery)}><a>{Portada[info].paisajes}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosUrbano, PicGallery)}><a>{Portada[info].urbano}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosTexturas, PicGallery)}><a>{Portada[info].texturas}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosMuelles, PicGallery)}><a>{Portada[info].muelles}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongeAjax(e, fotosCuadrados, PicGallery)}><a>{Portada[info].cuadrados}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="programming_icon"></i>{Portada[info].programacion}</div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(translate, PicProgramming)}><a>{Portada[info].cirilico}</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(morse, PicProgramming)}><a>{Portada[info].morse}</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(calculator, PicProgramming)}><a>{Portada[info].calculadora}</a></div>
            <div className="collapsible-body side-but" onClick={() => this.props.cardOpener(equilibrio, PicProgramming)}><a>{Portada[info].equilibrio}</a></div>
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

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas,
    queVeo: state.queVeo
  }
}

export default connect(mapStateToProps)(DashButtons);
