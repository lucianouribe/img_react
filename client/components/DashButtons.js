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

    this.state = {
      openDash: 'panos360'
    }

    this.theSettler = this.theSettler.bind(this);
    this.theDashSettler = this.theDashSettler.bind(this);
  }

  componentDidMount(){
    // grab first menu
    const slider = document.querySelector('.nav-bar-main-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;  // stop the fn from running
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
    
    // grab second menu
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
    e.preventDefault();
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
        campo = 'galeria'
    }
    this.props.dispatch(setQueVeo(campo));
  }

  theDashSettler(e, info){
    // console.log('hit', info)
    e.preventDefault();
    let campo;
    switch (info) {
      case 'panos360':
        campo = 'panos360'
        break;
      case 'renders':
        campo = 'renders'
        break;
      case 'fotoproductos':
        campo = 'fotoproductos'
        break;
      case 'galeria':
        campo = 'galeria'
        break;
    }
    this.setState({openDash: campo})
  }

  theDashButtons(){
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
    if(this.state.openDash === 'panos360'){
      return(
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, panodigital)}><span>{Portada[info].digital}</span></a>
          <a onClick={(e) => this.theSettler(e, panofotografia)}><span>{Portada[info].fotografia}</span></a>
          <a onClick={(e) => this.theSettler(e, panoradar)}><span>{Portada[info].radar}</span></a>
        </div>
      )
    } else if(this.state.openDash === 'renders') {
      return (
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, renderGifs)}><span>{Portada[info].gifs360}</span></a>
          <a onClick={(e) => this.theSettler(e, products)}><span>{Portada[info].productos}</span></a>
          <a onClick={(e) => this.theSettler(e, spaces)}><span>{Portada[info].espacios}</span></a>
          <a onClick={(e) => this.theSettler(e, others)}><span>{Portada[info].otros}</span></a>
        </div>
      )
    } else if(this.state.openDash === 'fotoproductos') {
      return(
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, fotosGifs)}><span>{Portada[info].gifs360}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosJoyas)}><span>{Portada[info].joyas}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosComp)}><span>{Portada[info].componentes}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosCuadros)}><span>{Portada[info].cuadros}</span></a>
        </div>
      )
    } else if(this.state.openDash === 'galeria') {
      return(
        <div className='nav-bar-sub-carousel'>
          <a onClick={(e) => this.theSettler(e, fotosDetalles)}><span>{Portada[info].fotosDetalles}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosPaisajes)}><span>{Portada[info].paisajes}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosUrbano)}><span>{Portada[info].urbano}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosTexturas)}><span>{Portada[info].texturas}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosMuelles)}><span>{Portada[info].muelles}</span></a>
          <a onClick={(e) => this.theSettler(e, fotosCuadrados)}><span>{Portada[info].cuadrados}</span></a>
        </div>
      )
    }
  }

  render() {
    let info = this.props.idiomas;
    const panos360 = 'panos360';
    const renders = 'renders';
    const fotoproductos = 'fotoproductos';
    const galeria = 'galeria';

    return (
      <nav>
        <div className='main-nav-carousel'>
          <div className='nav-bar-main-carousel'>
            <a onClick={(e) => this.theDashSettler(e, panos360)}><span>{Portada[info].panos360}</span></a>
            <a onClick={(e) => this.theDashSettler(e, renders)}><span>{Portada[info].renders}</span></a>
            <a onClick={(e) => this.theDashSettler(e, fotoproductos)}><span>{Portada[info].fotoproductos}</span></a>
            <a onClick={(e) => this.theDashSettler(e, galeria)}><span>{Portada[info].galeria}</span></a>
          </div>
          {this.theDashButtons()}
          <div type="button" onClick={this.toggleCard} className="hamburger right"></div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas,
    queVeo: state.queVeo,
    reseter: state.reseter
  }
}

export default connect(mapStateToProps)(DashButtons);
