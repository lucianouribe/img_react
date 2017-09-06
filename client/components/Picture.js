import React from 'react';
import { connect } from 'react-redux';
import { selectedCarrusel } from '../actions/selectedCarrusel';

class Picture extends React.Component {

  componentDidUpdate(){

  }

  render() {
    let IamAClass;
    switch (this.props.selectedCarrusel) {
      case 'panodigital':
      case 'panofotografia':
      case 'panoradar':
        IamAClass = 'PicPanoramics'
        break;
      case 'renderGifs':
      case 'productos':
      case 'espacios':
      case 'otros':
          IamAClass = 'PicRenders'
        break;
      case 'fotosGifs':
      case 'fotosJoyas':
      case 'fotosComp':
      case 'fotosCuadros':
          IamAClass = 'PicProducts'
        break;
      case 'fotosDetalles':
      case 'fotosPaisajes':
      case 'fotosUrbano':
      case 'fotosTexturas':
      case 'fotosMuelles':
      case 'fotosCuadrados':
          IamAClass = 'PicGallery'
        break;
      case 'translate':
      case 'morse':
      case 'calculator':
      case 'equilibrio':
          IamAClass = 'PicProgramming'
        break;
      default:
          IamAClass = 'PicLogo'
        break;
    }
    return (
      <div className={`pic-standard ${IamAClass}`}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCarrusel: state.selectedCarrusel
  }
}
export default connect(mapStateToProps)(Picture);
