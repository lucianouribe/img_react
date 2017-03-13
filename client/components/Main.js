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
    this.carruselStateSetter = this.carruselStateSetter.bind(this);

    // crud actions for carrusel
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);


    this.state = {
      slideInfo: {},
      description: '',
      whichOne: ''
    };
  }


  addItem(name, image, role, commentsPerPic) {
    console.log('add item');
    $.ajax({
      url: '/api/slide_images',
      type: 'POST',
      dataType: 'JSON',
      data: { name, image, role, commentsPerPic }
    }).done( item => {
      console.table(item)
    }).fail( data => {
      console.log(data)
    })
  }

  editItem() {
    console.log('edit item');
  }
  deleteItem() {
    console.log('delete item');
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

// image information receiver, filters and dispatch
  infoSpongeAjax(e, info) {
     e.preventDefault();
     console.log(info)
     $.ajax({
       url: '/api/slide_images',
       type: 'GET',
       dataType: 'JSON'
     }).done ( data => {
       // loop the database & pick the specific info
       const theStuffForTheCarrusel = data.filter( filteredData => filteredData.role === info )
       console.table(theStuffForTheCarrusel);
       // dispatch only the data with the specified role
       this.carruselStateSetter(theStuffForTheCarrusel, info);
     }).fail ( data => {
       console.log(error)
     })
  }

// sets state of the desired info
  carruselStateSetter(stuff, info) {
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

// Main renderer selector
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
          {Object.keys(this.state.slideInfo).map(item => <Carrusel key={item} details={this.state.slideInfo[item]} description={this.state.description} addItem={this.addItem} editItem={this.editItem} deleteItem={this.deleteItem}/>)}
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
