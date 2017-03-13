import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Carousel from './Carousel';
import Carrusel from './Carrusel';
import Trisixti from './Trisixti';
import Navbar from './Navbar';
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
    this.renderCarrusel = this.renderCarrusel.bind(this);

    this.state = {
      slideInfo: {},
      description: '',
      whichOne: ''
    };
  }

// static images renderer
  renderImages(info) {
    this.setState({
      slideInfo: {info},
      whichOne: "carousel",
    });
  }

// panoramics renderer
  renderPanoramics(info) {
    this.setState({
      slideInfo: {info},
      whichOne: "trisixti"
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
    console.log(info)
    this.renderImages(info);
  }

  infoSpongeAjax(e, info) {
     e.preventDefault();
     console.log(info)
     $.ajax({
       url: '/api/slide_images',
       type: 'GET',
       dataType: 'JSON'
     }).done ( data => {
       console.log('this is the data')
       // loop the database & pick the correct info
       const theStuffForTheCarrusel = data.filter( filteredData => filteredData.role === info )
       console.log(theStuffForTheCarrusel);
       // select only the data with the specified role
       this.renderCarrusel(theStuffForTheCarrusel, info);
     }).fail ( data => {
       console.log(error)
     })
  }

  renderCarrusel(stuff, info) {
    // console.log(stuff);
    // console.log(info);
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
      };
    this.setState({
      slideInfo: { stuff },
      whichOne: "carrusel",
      description: newState
    });
  }

// Main renderer
  mainRenderer(){
    if(this.state.whichOne === "carousel") {
      return (
        <ul>
          {Object.keys(this.state.slideInfo).map(key => <Carousel key={key} details={this.state.slideInfo[key]} />)}
        </ul>
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
          {Object.keys(this.state.slideInfo).map(key => <Carrusel key={key} details={this.state.slideInfo[key]} description={this.state.description} />)}
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="col s12 m2">
          <Dashboard
              infoSpongePanos={this.infoSpongePanos }
              infoSpongeImages={this.infoSpongeImages }
              infoSpongeAjax={this.infoSpongeAjax  }
          />
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m1">
            {this.mainRenderer()}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
