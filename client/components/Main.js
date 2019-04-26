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
      show: true
    }

    this.toggleDashButtons = this.toggleDashButtons.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
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

  toggleCard() {
    this.setState({ show: !this.state.show });
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
          <Trisixti toggleDashButtons={this.toggleDashButtons} show={this.state.show} toggleCard={this.toggleCard}/>
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
          <Carrusels toggleDashButtons={this.toggleDashButtons} show={this.state.show} toggleCard={this.toggleCard}/>
        );
        break;
    }
  }

  render() {
    let {queVeo} = this.props;
    return (
      <div className='main-component'>
        <div className="main-header">
          <div type="button" onClick={this.toggleCard} className="info-icon">i</div>
          <h1>{queVeo}</h1>
          <div type="button" onClick={this.toggleDashButtons} className="icons-image settings-icon sub-menu"></div>
        </div>
        <div className='carrusel-slider'>
          {this.mainRenderer()}
          <div className="dashli">
            {this.dashButtons()}
          </div>
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
