import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Stuff from '../Stuff';

class Main extends Component {

  constructor() {
    super();
    this.renderOtr = this.renderOtr.bind(this);
    this.renderProd = this.renderProd.bind(this);
    this.renderEsp = this.renderEsp.bind(this);

    this.state = {
      slideInfo: {}
    };
  }

  renderOtr(e) {
    e.preventDefault();
    console.log("this is renderOtr")
    var renderOtr = Stuff.slideRenderOtr
    console.log(renderOtr)
    this.setState({
      slideInfo: {renderOtr}
    });
  }
  renderProd(e) {
    e.preventDefault();
    console.log("this is renderProd")
    var renderProd = Stuff.slideRenderProd
    console.log(renderProd)
    this.setState({
      slideInfo: {renderProd}
    });
  }
  renderEsp(e) {
    e.preventDefault();
    console.log("this is renderEsp")
    var renderEsp = Stuff.slideRenderEsp
    console.log(renderEsp)
    this.setState({
      slideInfo: {renderEsp}
    });
  }

  render() {
    return (
      <div>
      <Navbar />
        <div className="col s12 m2">
          <Dashboard
              convertSlide={this.convertSlide}
              renderOtr={this.renderOtr }
              renderProd={this.renderProd }
              renderEsp={this.renderEsp }
          />
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m1">
            <ul className="list-of-fishes">
              {Object.keys(this.state.slideInfo).map(key => <Carousel key={key} details={this.state.slideInfo[key]} convertSlide={this.convertSlide} />)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
