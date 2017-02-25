import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Stuff from '../Stuff';

class Main extends Component {

  constructor() {
    super();
    this.convertSlide = this.convertSlide.bind(this);
    this.renderArq = this.renderArq.bind(this);
    this.renderProd = this.renderProd.bind(this);
    this.renderAmb = this.renderAmb.bind(this);

    this.state = {
      slideInfo: {}
    };
  }

  convertSlide(slide) {
    console.log("convertSlide")
    //update slideInfo state
    const slideInfo = {...this.state.slideInfo};
    // add in our new fish
    const num = slide.num;
    slideInfo[`slide-${num}`] = slide;
    //set state
    this.setState({ slideInfo });
  }

  renderArq(e) {
    e.preventDefault();
    console.log("this is renderArq")
    var renderArq = Stuff.slideRenderArq
    console.log(renderArq)
    this.setState({
      slideInfo: {renderArq}
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
  renderAmb(e) {
    e.preventDefault();
    console.log("this is renderAmb")
    var renderAmb = Stuff.slideRenderAmb
    console.log(renderAmb)
    this.setState({
      slideInfo: {renderAmb}
    });
  }

  render() {
    return (
      <div>
      <Navbar />
        <div className="col s12 m2">
          <Dashboard
              convertSlide={this.convertSlide}
              renderArq={this.renderArq }
              renderProd={this.renderProd }
              renderAmb={this.renderAmb }
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
