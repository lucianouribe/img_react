import React, { Component } from 'react';
import { connect } from 'react-redux';
import { transitoryInfo } from '../actions/transitoryInfo';
import { selectedCarrusel } from '../actions/selectedCarrusel';
import { reseter } from '../actions/reseter';

import Carrusels from './Carrusels';
import Trisixti from './Trisixti';
import DashButtons from './DashButtons';
import CarruselMenu from './CarruselMenu';


class Main extends Component {

  constructor() {
    super();
    this.state = {
      openCarrusel: '',
      showDashButtons: true,
      showMainMenu: false,
      show: true
    }

    this.toggleMainMenu = this.toggleMainMenu.bind(this);
    this.toggleDashButtons = this.toggleDashButtons.bind(this);
    this.showMeDashButtons = this.showMeDashButtons.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
    this.dashButtons = this.dashButtons.bind(this);
    this.mainMenu = this.mainMenu.bind(this);
    this.mainRenderer = this.mainRenderer.bind(this);
    this.whichCarrusel = this.whichCarrusel.bind(this);
  }

  componentDidMount(){
    let info = 'panodigital'
    this.props.dispatch(transitoryInfo(info));
  }

  toggleDashButtons() {
    this.setState({ showDashButtons: !this.state.showDashButtons });
  }

  showMeDashButtons(showDashButtons) {
    this.setState({ showDashButtons });
  }

  toggleMainMenu() {
    this.setState({ showMainMenu: !this.state.showMainMenu });
  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  whichCarrusel(campo, campoField) {
    this.setState({ openCarrusel: campo });
    this.props.dispatch(reseter(true));
    this.props.dispatch(transitoryInfo(campoField));
    this.props.dispatch(selectedCarrusel(campoField));
  }

  dashButtons(){
    if(this.state.showDashButtons){
      return(
        <div className='sub-slider'>
          <DashButtons openCarrusel={this.state.openCarrusel} toggleDashButtons={this.toggleDashButtons}/>
          <div onClick={this.toggleDashButtons} className="icons-image hamburger"></div>
        </div>
        );
    } else {
      return(<div className='sub-slider'><div onClick={this.toggleDashButtons} className="icons-image hamburger"></div></div>);
    }
  }

  mainMenu(){
    if(this.state.showMainMenu){
      return(
        <div className="carrusel-main-menu settings-menu">
          <CarruselMenu whichCarrusel={this.whichCarrusel} toggleMainMenu={this.toggleMainMenu} showMeDashButtons={this.showMeDashButtons} />
        </div>
      )
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
      case "fotosPerspective":
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
          <div type="button" onClick={this.toggleMainMenu} className="icons-image settings-icon sub-menu"></div>
        </div>
        <div className='carrusel-slider'>
          {this.mainMenu()}
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
