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
    this.renderJoy = this.renderJoy.bind(this);
    this.renderComp = this.renderComp.bind(this);
    this.renderCua = this.renderCua.bind(this);
    this.renderSomething = this.renderSomething.bind(this);

    this.state = {
      slideInfo: {}
    };
  }
  
  renderSomething(info) {
    this.setState({
      slideInfo: {info}
    });
  }

  renderOtr(e) {
    e.preventDefault();
    var info = Stuff.slideRenderOtr
    this.renderSomething(info);
  }
  renderProd(e) {
    e.preventDefault();
    var info = Stuff.slideRenderProd
    this.renderSomething(info);
  }
  renderEsp(e) {
    e.preventDefault();
    var info = Stuff.slideRenderEsp
    this.renderSomething(info);
  }
  renderJoy(e) {
    e.preventDefault();
    var info = Stuff.slideRenderEsp
    this.renderSomething(info);
  }
  renderComp(e) {
    e.preventDefault();
    var info = Stuff.slideRenderEsp
    this.renderSomething(info);
  }
  renderCua(e) {
    e.preventDefault();
    var info = Stuff.slideRenderEsp
    this.renderSomething(info);
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
              renderJoy={this.renderJoy }
              renderComp={this.renderComp }
              renderCua={this.renderCua }
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
