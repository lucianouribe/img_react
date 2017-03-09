import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Carousel from './Carousel';
import Trisixti from './Trisixti';
import Navbar from './Navbar';


class Main extends Component {

  constructor() {
    super();
    this.infoSpongePanos = this.infoSpongePanos.bind(this);
    this.infoSpongeImages = this.infoSpongeImages.bind(this);

    this.mainRenderer = this.mainRenderer.bind(this);

    this.renderImages = this.renderImages.bind(this);
    this.renderPanoramics = this.renderPanoramics.bind(this);

    this.state = {
      slideInfo: {},
      whichOne: ''
    };
  }

  // static images renderer
  renderImages(info) {
    this.setState({
      slideInfo: {info},
      whichOne: "carousel"
    });
  }

  // panoramics renderer
  renderPanoramics(info) {
    this.setState({
      slideInfo: {info},
      whichOne: "trisixti"
    });
  }



  infoSpongePanos(e, info) {
    e.preventDefault();
    this.renderPanoramics(info);
  }

  infoSpongeImages(e, info) {
    e.preventDefault();
    this.renderImages(info);
  }

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
          {Object.keys(this.state.slideInfo).map(key => <Trisixti key={key} details={this.state.slideInfo[key]}/>)}
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
