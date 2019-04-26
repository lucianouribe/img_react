import React, { Component } from 'react';
import { connect } from 'react-redux';

import Portada from '../Portada';

class CarruselMenu extends Component {

  constructor() {
    super();
  }

  componentDidMount(){

  }

  theDashSettler(e, info, showDashButtons){
    // console.log('hit', info, showDashButtons)
    e.preventDefault();
    let campo;
    let campoField;
    switch (info) {
      case 'panos360':
        campo = 'panos360'
        campoField = 'panodigital'
        break;
      case 'renders':
        campo = 'renders'
        campoField = 'products'
        break;
      case 'fotoproductos':
        campo = 'fotoproductos'
        campoField = 'fotosGifs'
        break;
      case 'galeria':
        campo = 'galeria'
        campoField = 'fotosDetalles'
        break;
    }
    this.props.whichCarrusel(campo, campoField);
    this.props.showMeDashButtons(showDashButtons);
    this.props.toggleMainMenu();
  }

  render() {
    let info = this.props.idiomas;
    const panos360 = 'panos360';
    const renders = 'renders';
    const fotoproductos = 'fotoproductos';
    const galeria = 'galeria';

    return (
      <div>
        <span className='carrusel-submenu-options'>
          <a onClick={(e) => this.theDashSettler(e, panos360, false)}><span>{Portada[info].panos360}</span></a>
          <div className="go-to-submenu" onClick={(e) => this.theDashSettler(e, panos360, true)}><span>3</span></div>
        </span>
        <span className='carrusel-submenu-options'>
          <a onClick={(e) => this.theDashSettler(e, renders)}><span>{Portada[info].renders}</span></a>
          <div className="go-to-submenu" onClick={(e) => this.theDashSettler(e, renders, true)}><span>4</span></div>
        </span>
        <span className='carrusel-submenu-options'>
          <a onClick={(e) => this.theDashSettler(e, fotoproductos)}><span>{Portada[info].fotoproductos}</span></a>
          <div className="go-to-submenu" onClick={(e) => this.theDashSettler(e, fotoproductos, true)}><span>4</span></div>
        </span>
        <span className='carrusel-submenu-options'>
          <a onClick={(e) => this.theDashSettler(e, galeria)}><span>{Portada[info].galeria}</span></a>
          <div className="go-to-submenu" onClick={(e) => this.theDashSettler(e, galeria, true)}><span>6</span></div>
        </span>
        <span className='carrusel-submenu-close' onClick={() => this.props.toggleMainMenu()}>
          <div><span>close</span></div>
        </span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas
  }
}

export default connect(mapStateToProps)(CarruselMenu);
