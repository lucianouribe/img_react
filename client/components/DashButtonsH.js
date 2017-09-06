import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Stuff from '../Stuff';
import Portada from '../Portada';

import { selectedCarrusel } from '../actions/selectedCarrusel';
import { transitoryInfo } from '../actions/transitoryInfo';

class DashButtons extends Component {

  constructor() {
    super();

    this.theSettler = this.theSettler.bind(this);
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

  theSettler(e, info){
    e.preventDefault();
    // console.log('the setter info')
    // console.log(info)
    this.props.dispatch(transitoryInfo(info));
    this.props.dispatch(selectedCarrusel(info));
  }

// public/panoramicos/pano_01/index.html
  render() {
    let info = this.props.idiomas;
    // hard coded info
    // const panoradar = {name: 'Aplicativo con radar', address: "../panoramicos/pano_03_s/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};
    // const panofotografia = {name: 'Fotografia 360', address: "../panoramicos/pano_02_s/", description: 'hello everybody', logo1: 'tridimax', logo2: 'photoshop'};
    // const panodigital = {name: 'Digital 360', address: "../panoramicos/pano_01_s/", description: 'hello ooooo', logo1: 'tridimax', logo2: 'photoshop'};
    const panodigital = 'panodigital';
    const panofotografia = 'panofotografia';
    const panoradar = 'panoradar';

    // info from a database (it's obvious in Main!)
    const productos = 'productos';
    const espacios = 'espacios';
    const otros = 'otros';
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
            <div className="collapsible-body side-but" onClick={(e) => this.props.dispatch(selectedCarrusel(panodigital))}><a>{Portada[info].digital}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panofotografia, PicPanoramics)}><a>{Portada[info].fotografia}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.props.infoSpongePanos(e, panoradar, PicPanoramics)}><a>{Portada[info].radar}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="teapot"></i>{Portada[info].renders}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, renderGifs)}><a>{Portada[info].gifs360}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, productos)}><a>{Portada[info].productos}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, espacios)}><a>{Portada[info].espacios}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, otros)}><a>{Portada[info].otros}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="bulb"></i>{Portada[info].fotoproductos}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosGifs)}><a>{Portada[info].gifs360}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosJoyas)}><a>{Portada[info].joyas}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosComp)}><a>{Portada[info].componentes}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosCuadros)}><a>{Portada[info].cuadros}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="gallery_icon"></i>{Portada[info].galeria}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosDetalles)}><a>{Portada[info].detalles}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosPaisajes)}><a>{Portada[info].paisajes}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosUrbano)}><a>{Portada[info].urbano}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosTexturas)}><a>{Portada[info].texturas}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosMuelles)}><a>{Portada[info].muelles}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, fotosCuadrados)}><a>{Portada[info].cuadrados}</a></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="programming_icon"></i>{Portada[info].programacion}</div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, translate)}><a>{Portada[info].cirilico}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, morse)}><a>{Portada[info].morse}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, calculator)}><a>{Portada[info].calculadora}</a></div>
            <div className="collapsible-body side-but" onClick={(e) => this.theSettler(e, equilibrio)}><a>{Portada[info].equilibrio}</a></div>
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