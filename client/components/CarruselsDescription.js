import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDescripcions } from '../actions/descripcions';

class CarruselsDescription extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      frontState: 'show',
      currentSlide: 0
    }
  }

  componentDidMount(){
    this.props.dispatch(fetchDescripcions(this.props.queVeo));
  }

  behind() {
    let laDescripcion = this.props.descripcions.filter( descr => { if(descr.lenguaje === this.props.idiomas) return descr })
    let infoForBehind = laDescripcion[0]
    
    if(this.props.descripcions.length > 0) {
      return(
        <div>
          <div className="carrusel-description">
            <span className="card-title"><i type="button" onClick={this.props.show} className="close material-icons right">close</i><h5>{infoForBehind.titulo}</h5></span>
            <p>{infoForBehind.contenido}</p>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div className="carrusel-description">
            <span className="card-title"><i type="button" onClick={this.props.show} className="close material-icons right">close</i><h5>Saddly we have no content here</h5></span>
            <p>That's why this is kind of empty</p>
          </div>
        </div>
      )
    }

  }

  render() {
    return(this.behind());
  }
}
  const mapStateToProps = (state) => {
    return {
      idiomas: state.idiomas,
      queVeo: state.queVeo,
      descripcions: state.descripcions
    }
  }

export default connect(mapStateToProps)(CarruselsDescription);
