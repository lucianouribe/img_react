import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import DashButtons from './DashButtons';
import Carousel from './Carousel';
import Carrusels from './Carrusels';
import Trisixti from './Trisixti';
import Navbar from './Navbar';
import Translator from './Translator';
import Morse from './Morse';
import Calculator from './Calculator';
import Equilibrio from './Equilibrio';
import Description from '../Description';
import Introduction from './Introduction';

import { setQueVeo } from '../actions/queVeo';
import { selectedCarrusel } from '../actions/selectedCarrusel';
import { transitoryInfo } from '../actions/transitoryInfo';
import { setColor } from '../actions/colorset';


class Main extends Component {

  constructor() {
    super();

    this.mainRenderer = this.mainRenderer.bind(this);

  }

  // Main renderer card selector
  mainRenderer(){
    switch (this.props.selectedCarrusel) {
      case 'intro':
        return (
          <Introduction />
        );
        break;
      case "panodigital":
      case "panofotografia":
      case "panoradar":
        return (
          <Trisixti />
        );
        break;
      case 'products':
      case 'spaces':
      case 'others':
      case 'renderGifs':
      case 'fotosJoyas':
      case 'fotosComp':
      case 'fotosCuadros':
      case 'fotosGifs':
      case "fotosDetalles":
      case "fotosPaisajes":
      case "fotosUrbano":
      case "fotosTexturas":
      case "fotosMuelles":
      case "fotosCuadrados":
        return (
          <Carrusels />
        );
        break;
      case "translate":
        return (
          <Translator />
        );
        break;
      case "morse":
        return (
          <Morse />
        );
        break;
      case "calculator":
        return (
          <Calculator />
        );
        break;
      case "equilibrio":
        return (
          <Equilibrio />
        );
        break;
      case "contact":
        return (
          <Contact />
        );
        break;
      default:
        return (
          <Translator />
        );
        break;
    }
  }



  render() {
    let imgUrl = "assets/background_02.png"
    const divStyle = {
      backgroundColor: this.props.colorset,
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundRepeat: 'repeat',
      backgroundSize: '60px',
      height: '100vh',
      WebkitTransition: 'all',
      msTransition: 'all'
    };
    return (
      <div style={divStyle} className='main-component'>
        {/* <Navbar/> */}
        {/* <Dashboard className="row" /> */}
        <div className="row">
          <div className="col s12 m10 l8 offset-l1 offset-m1">
            {this.mainRenderer()}
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    idiomas: state.idiomas,
    queVeo: state.queVeo,
    carrusels: state.carrusels,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo,
    colorset: state.colorset
  }
}

export default connect(mapStateToProps)(Main);
