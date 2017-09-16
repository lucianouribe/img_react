import React, { Component } from 'react';
import { connect } from 'react-redux';
import Description from '../Description';

class CarruselsDescription extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      frontState: 'show',
      currentSlide: 0
    }
  }

  behind() {
    let infoForBehind;
    let first;
    const sprache = this.props.idiomas;
    switch (this.props.selectedCarrusel) {
      case "products":
      case "spaces":
      case "others":
        first = Description.renders;
        infoForBehind = first[sprache]
        break;
      case "fotosJoyas":
      case "fotosComp":
      case "fotosCuadros":
        first = Description.productos;
        infoForBehind = first[sprache]
        break;
      case "renderGifs":
      case "fotosGifs":
        first = Description.gifs;
        infoForBehind = first[sprache]
        break;
      case "fotosDetalles":
      case "fotosPaisajes":
      case "fotosUrbano":
      case "fotosTexturas":
      case "fotosMuelles":
      case "fotosCuadrados":
        first = Description.galeria;
        infoForBehind = first[sprache]
        break;
      default:
        infoForBehind = "Descripcion.galeria[this.props.idiomas]"
        break;
    }
    return(
      <div>
        <div className="card-reveal">
          <span className="card-title"><i type="button" onClick={this.props.show} className="close material-icons right">close</i><h5>{infoForBehind.name}</h5></span>
          <p>{infoForBehind.description}</p>
          <div className="logos">
          </div>
        </div>
      </div>
    )
  }

  render() {
    return(this.behind());
  }
}
  const mapStateToProps = (state) => {
    return {
      selectedCarrusel: state.selectedCarrusel,
      transitoryInfo: state.transitoryInfo,
      idiomas: state.idiomas,
      queVeo: state.queVeo
    }
  }

export default connect(mapStateToProps)(CarruselsDescription);
