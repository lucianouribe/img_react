import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import DashButtons from './DashButtons';
import Carousel from './Carousel';
import Carrusel from './Carrusel';
import Trisixti from './Trisixti';
import Navbar from './Navbar';
import Translator from './Translator';
import Description from '../Description';



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


    this.state = {
      slideInfo: {},
      description: '',
      whichOne: 'intro',
      reset: true
    };

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
  renderPanoramics(info) {
    this.cardOpener('trisixti');
    this.setState({
      slideInfo: {info},
    });
  }

// panoramic information receiver
  infoSpongePanos(e, info) {
    e.preventDefault();
    this.renderPanoramics(info);
  }

// image information receiver
  infoSpongeImages(e, info) {
    e.preventDefault();
    // console.log(info)
    this.renderImages(info);
  }

// image information receiver, filters and dispatch
  infoSpongeAjax(e, info) {
    e.preventDefault();
      this.setState({reset: true}); // si lo reseteo aca, funciona si esta afuera y adentro (pero la data sigue la del primer clickeado)
      $.ajax({
        url: '/api/carrusels',
        type: 'GET',
        dataType: 'JSON'
      }).done ( data => {
        // loop the database & pick the specific info
        const theStuffForTheCarrusel = data.filter( filteredData => filteredData.role === info )
        // console.table(theStuffForTheCarrusel);
        // dispatch only the data with the specified role
        this.carruselStateSetter(theStuffForTheCarrusel, info);
      }).fail ( data => {
        console.log(error)
      })
  }

// sets state of the desired info
  carruselStateSetter(stuff, info) {
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

    this.cardOpener('carrusel')
    this.setState({
      slideInfo: { stuff },
      description: newState,
      // reset: true // si esta activado funciona desde adentro pero la data sigue con el primer clickeado
    });
  }

  // card opener for main renderer
  cardOpener(info) {
    this.setState({
      whichOne: info
    })
  }

 // Main renderer selector
  mainRenderer(){
    if(this.state.whichOne === "intro") {
      return (
        <div>
          <div className="card intro">
            <p className='bienvenido'>Bienvenido!</p>
            Haz click en el menu para visualizar las imágenes.
          </div>
        </div>
      );
    } else if(this.state.whichOne === "trisixti") {
      return (
        <ul>
          {Object.keys(this.state.slideInfo).map(key => <Trisixti key={key} details={this.state.slideInfo[key]} />)}
        </ul>
      );
    } else if(this.state.whichOne === "carrusel") {
      return (
        <ul>
          {Object.keys(this.state.slideInfo).map(item => <Carrusel key={item} details={this.state.slideInfo[item]} description={this.state.description} reset={this.state.reset} reseter={this.reseter} infoSponge={this.infoSpongeAjax}/>)}
        </ul>
      );
    } else if(this.state.whichOne === "translate") {
      return (
        <Translator />
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar
          infoSpongeAjax={this.infoSpongeAjax  }
          infoSpongePanos={this.infoSpongePanos }
          cardOpener={this.cardOpener }
        />
        <Dashboard className="row"
            infoSpongePanos={this.infoSpongePanos }
            infoSpongeImages={this.infoSpongeImages }
            infoSpongeAjax={this.infoSpongeAjax  }
            cardOpener={this.cardOpener }
        />
        <div className="row">
          <div className="col s10 m10 l8 offset-l1 offset-m1 offset-s1">
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
    slideInfo: state.slideInfo
  }
}

export default connect(mapStateToProps)(Main);
