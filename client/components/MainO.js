import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import DashButtons from './DashButtons';
import Carousel from './Carousel';
import Carrusel from './Carrusel';
import Carrusels from './Carrusels';
import Trisixti from './Trisixti';
import Navbar from './Navbar';
import Translator from './Translator';
import Morse from './Morse';
import Calculator from './Calculator';
import Equilibrio from './Equilibrio';
import Description from '../Description';

import { setQueVeo } from '../actions/queVeo';
import { selectedCarrusel } from '../actions/selectedCarrusel';
import { transitoryInfo } from '../actions/transitoryInfo';
// import { fetchCarrusels } from '../actions/carrusels';

class Main extends Component {

  constructor() {
    super();
    this.infoSpongePanos = this.infoSpongePanos.bind(this);
    this.infoSpongeImages = this.infoSpongeImages.bind(this);

    this.mainRenderer = this.mainRenderer.bind(this);

    this.renderImages = this.renderImages.bind(this);
    this.renderPanoramics = this.renderPanoramics.bind(this);

    this.infoSpongeAjax = this.infoSpongeAjax.bind(this);
    this.carruselStateSetter = this.carruselStateSetter.bind(this);

    this.reseter = this.reseter.bind(this);

    this.cardOpener = this.cardOpener.bind(this);
    this.picPiquer = this.picPiquer.bind(this);


    this.state = {
      slideInfo: {},
      PanoslideInfo: {},
      description: '',
      whichOne: '',
      reset: true,
      whichPic: 'pic-standard PicLogo'
    };

  }


  // Picture Component
  picPiquer(picType) {
    this.setState({whichPic: `pic-standard ${picType}`})
    // console.log('this.state.whichPic')
    // console.log(this.state.whichPic)
  }

  // state reseter
  reseter(){
    this.setState({reset: false})
  }

  // static images renderer
  renderImages(info) {
    this.cardOpener('carousel');
    this.setState({
      slideInfo: {info},
    });
  }

  // panoramics renderer
  renderPanoramics(info, picType) {
    this.cardOpener('trisixti', picType);
    this.setState({
      PanoslideInfo: {info},
    });
  }

  // panoramic information receiver
  infoSpongePanos(e, info, picType) {
    e.preventDefault();
    this.props.dispatch(setQueVeo(info.name));
    this.renderPanoramics(info, picType);
  }

  // image information receiver
  infoSpongeImages(e, info) {
    e.preventDefault();
    // console.log(info)
    this.renderImages(info);
  }

  // image information receiver, filters and dispatch
  infoSpongeAjax(e, info, picType) {
    e.preventDefault();
    console.log('info');
    console.log(info);
    // this.props.dispatch(setQueVeo(info));
      //reset state to get a new 0
      // debugger;
      // this.props.dispatch(fetchCarrusels(info, picType))
      this.setState({reset: true});
      $.ajax({
        url: '/api/carrusels',
        type: 'GET',
        dataType: 'JSON'
      }).done ( carruselPic => {
        // console.log('info sponge ajax done')
        // loop the database & pick the specific info
        const theStuffForTheCarrusel = carruselPic.filter( filteredData => filteredData.role === info )
        // dispatch only the data with the specified role
        this.carruselStateSetter(theStuffForTheCarrusel, info);
        // Set the picture for the pic piquer
        this.picPiquer(picType);
      }).fail ( data => {
        console.log('fail info sponge ajax')
        console.log(error)
      })
  }

  // sets state of the desired info
  carruselStateSetter(stuff, info) {
    // console.log('carrusel state setter')
    // console.log(stuff);
    // console.log(info);
    // debugger;
    let newState;
    switch (info) {
        case 'products':
            newState = Description.descriptionRenderProd
          break;
        case 'spaces':
            newState = Description.descriptionRenderEsp
          break;
        case 'others':
            newState = Description.descriptionRenderOtr
          break;
        case 'renderGifs':
            newState = Description.descriptionRenderOtr
          break;
        case 'fotosGifs':
            newState = Description.descriptionRenderGifs
          break;
        case 'fotosJoyas':
            newState = Description.descriptionFotosJoyas
          break;
        case 'fotosComp':
            newState = Description.descriptionFotosComp
          break;
        case 'fotosCuadros':
            newState = Description.descriptionFotosCuadros
          break;
        case 'fotosDetalles':
            newState = Description.descriptionFotosDetalles
          break;
        case 'fotosPaisajes':
            newState = Description.descriptionFotosPaisajes
          break;
        case 'fotosUrbano':
            newState = Description.descriptionFotosUrbano
          break;
        case 'fotosTexturas':
            newState = Description.descriptionFotosTexturas
          break;
        case 'fotosMuelles':
            newState = Description.descriptionFotosMuelles
          break;
        case 'fotosCuadrados':
            newState = Description.descriptionFotosCuadrados
          break;
      };
      // console.log(newState);
      // console.log(stuff);
    this.cardOpener('carrusel')
    this.setState({
      slideInfo: { stuff },
      description: newState,
    });
  }

  // card opener for main renderer
  cardOpener(info, picType) {
    this.picPiquer(picType);
    // this.props.dispatch(setQueVeo(info));
    this.setState({
      whichOne: info
    })
  }

  // Main renderer card selector

  mainRenderer(){
    switch (this.state.whichOne) {
      case 'intro':
        return (
          <div>
            <div className="card intro">
              <p className='bienvenido'>Bienvenido!</p>
              Haz click en el menu para visualizar las imágenes.
            </div>
          </div>
        );
        break;
      case "trisixti":
        return (
          <ul>
            {Object.keys(this.state.PanoslideInfo).map(key => <Trisixti key={key} details={this.state.PanoslideInfo[key]} />)}
          </ul>
        );
        break;
      case "carrusel":
        return (
          <ul>
            {Object.keys(this.state.slideInfo).map(item => <Carrusel key={item} details={this.state.slideInfo[item]} description={this.state.description} reset={this.state.reset} reseter={this.reseter} infoSponge={this.infoSpongeAjax}/>)}
          </ul>
        );
        break;
      case "carrusels":
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
    return (
      <div className='main-component'>
        <Navbar
          infoSpongeAjax={ this.infoSpongeAjax  }
          infoSpongePanos={ this.infoSpongePanos }
          cardOpener={ this.cardOpener }
        />
        <Dashboard className="row"
            infoSpongePanos={ this.infoSpongePanos }
            infoSpongeImages={ this.infoSpongeImages }
            infoSpongeAjax={ this.infoSpongeAjax  }
            cardOpener={ this.cardOpener }
            thePicture={ this.state.whichPic }
        />
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
    slideInfo: state.slideInfo,
    idiomas: state.idiomas,
    queVeo: state.queVeo,
    carrusels: state.carrusels,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo
  }
}

export default connect(mapStateToProps)(Main);
