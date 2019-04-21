import React, { Component } from 'react';
import { connect } from 'react-redux';

import Carrusels from './Carrusels';
import Trisixti from './Trisixti';
import DashButtons from './DashButtons';
import { transitoryInfo } from '../actions/transitoryInfo';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      showDashButtons: false,
    }

    this.toggleDashButtons = this.toggleDashButtons.bind(this);
    this.dashButtons = this.dashButtons.bind(this);
    this.mainRenderer = this.mainRenderer.bind(this);
  }

  componentDidMount(){
    let info = 'panodigital'
    this.props.dispatch(transitoryInfo(info));
  }

  toggleDashButtons() {
    this.setState({ showDashButtons: !this.state.showDashButtons });
  }

  dashButtons(){
    if(this.state.showDashButtons){
      return(<DashButtons />)
    }
  }

  // Main renderer card selector
  mainRenderer(){
    switch (this.props.selectedCarrusel) {
      case "panodigital":
      case "panofotografia":
      case "panoradar":
        return (
          <Trisixti toggleDashButtons={this.toggleDashButtons}/>
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
      case "fotosLost":
      case "fotosMonuments":
      case "fotosMonPerspective":
        return (
          <Carrusels toggleDashButtons={this.toggleDashButtons}/>
        );
        break;
    }
  }

  render() {
    let {queVeo, selectedCarrusel} = this.props;
    return (
      <div className='main-component'>
        <div className="main-header">
          <h1>{queVeo} | {selectedCarrusel}</h1>
        </div>
        <div className='carrusel-slider'>
          {this.mainRenderer()}
          {this.dashButtons()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    selectedCarrusel: state.selectedCarrusel,
    queVeo: state.queVeo
  }
}

export default connect(mapStateToProps)(Main);
