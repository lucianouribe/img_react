import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Portada from '../Portada';

import { setQueVeo } from '../actions/queVeo';
import { selectedCarrusel } from '../actions/selectedCarrusel';
import { transitoryInfo } from '../actions/transitoryInfo';
import { reseter } from '../actions/reseter';

class DashButtons extends Component {

  constructor() {
    super();

    this.theSettler = this.theSettler.bind(this);
  }

  componentDidUpdate(){
    const slider2 = document.querySelector('.nav-bar-sub-carousel');
    let isDown2 = false;
    let startX2;
    let scrollLeft2;

    slider2.addEventListener('mousedown', (e) => {
      isDown2 = true;
      slider2.classList.add('active');
      startX2 = e.pageX - slider2.offsetLeft;
      scrollLeft2 = slider2.scrollLeft;
    });

    slider2.addEventListener('mouseleave', () => {
      isDown2 = false;
      slider2.classList.remove('active');
    });

    slider2.addEventListener('mouseup', () => {
      isDown2 = false;
      slider2.classList.remove('active');
    });

    slider2.addEventListener('mousemove', (e) => {
      if (!isDown2) return;  // stop the fn from running
      e.preventDefault();
      const x2 = e.pageX - slider2.offsetLeft;
      const walk2 = (x2 - startX2) * 3;
      slider2.scrollLeft = scrollLeft2 - walk2;
    });

  }


  theSettler(e, info){
    // console.log('theSettler', info);
    let campo;
    this.props.dispatch(reseter(true));
    this.props.dispatch(transitoryInfo(info));
    this.props.dispatch(selectedCarrusel(info));
    switch (info) {
      case 'panodigital':
      case 'panofotografia':
      case 'panoradar':
        campo = 'panoramicos'
        break;
      case 'products':
      case 'spaces':
      case 'others':
        campo = 'renders'
        break;
      case 'renderGifs':
      case 'fotosGifs':
        campo = 'gifs'
        break;
      case 'fotosJoyas':
      case 'fotosComp':
      case 'fotosCuadros':
        campo = 'productos'
        break;
      case 'fotosDetalles':
      case 'fotosPaisajes':
      case 'fotosUrbano':
      case 'fotosTexturas':
      case 'fotosMuelles':
      case 'fotosCuadrados':
      case 'fotosLost':
      case 'fotosMonuments':
      case 'fotosPerspective':
        campo = 'galeria'
    }
    this.props.dispatch(setQueVeo(campo));
    this.props.toggleDashButtons();
  }

  theDashButtons(){
    // console.log('theDashButtons', this.props.openCarrusel)
    let info = this.props.idiomas;
    const panodigital = 'panodigital';
    const panofotografia = 'panofotografia';
    const panoradar = 'panoradar';

    const products = 'products';
    const spaces = 'spaces';
    const others = 'others';
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

    const fotosLost = 'fotosLost';
    const fotosMonuments = 'fotosMonuments';
    const fotosPerspective = 'fotosPerspective';

    if(this.props.openCarrusel === 'panos360'){
      return(
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, panodigital)}><span>{Portada[info].digital}</span></a>
          <a onClick={(e) => this.theSettler(e, panofotografia)}><span>{Portada[info].fotografia}</span></a>
          <a onClick={(e) => this.theSettler(e, panoradar)}><span>{Portada[info].radar}</span></a>
        </div>
      )
    } else if(this.props.openCarrusel === 'renders') {
      return (
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, renderGifs)}><span>{Portada[info].gifs360}</span></a>
          <a onClick={(e) => this.theSettler(e, products)}><span>{Portada[info].productos}</span></a>
          <a onClick={(e) => this.theSettler(e, spaces)}><span>{Portada[info].espacios}</span></a>
          <a onClick={(e) => this.theSettler(e, others)}><span>{Portada[info].otros}</span></a>
        </div>
      )
    } else if(this.props.openCarrusel === 'fotoproductos') {
      return(
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, fotosGifs)}><span>{Portada[info].gifs360}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosJoyas)}><span>{Portada[info].joyas}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosComp)}><span>{Portada[info].componentes}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosCuadros)}><span>{Portada[info].cuadros}</span></a>
        </div>
      )
    } else if(this.props.openCarrusel === 'galeria') {
      return(
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, fotosDetalles)}><span>{Portada[info].detalles}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosPaisajes)}><span>{Portada[info].paisajes}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosUrbano)}><span>{Portada[info].urbano}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosTexturas)}><span>{Portada[info].texturas}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosMuelles)}><span>{Portada[info].muelles}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosCuadrados)}><span>{Portada[info].cuadrados}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosLost)}><span>{Portada[info].lost}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosMonuments)}><span>{Portada[info].monuments}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosPerspective)}><span>{Portada[info].perspective}</span></a>
        </div>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className='main-nav-carousel'>
            {this.theDashButtons()}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas,
    reseter: state.reseter
  }
}

export default connect(mapStateToProps)(DashButtons);
