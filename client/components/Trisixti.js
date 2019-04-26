import React from 'react';
import { connect } from 'react-redux';

import CarruselsDescription from './CarruselsDescription';

import { deleteCarrusel } from '../actions/carrusels';
import { fetchDescripcions } from '../actions/descripcions';


class Trisixti extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true
    }

    this.toggleCard = this.toggleCard.bind(this);
    this.menuButtons = this.menuButtons.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount(){
    let whichDescription = this.props.queVeo
    this.props.dispatch(fetchDescripcions(whichDescription));
  }

  menuButtons() {
    if(this.props.user.role == 'admin' && this.props.queVeo == 'admin') {
      return(
        <div>
          <i type="button" onClick={this.deleteItem} className="pic-options small material-icons">delete</i>
        </div>
      )
    }
  }

  deleteItem(e) {
    e.preventDefault();
    let id = this.props.transitoryInfo[0].id
    let yes = confirm('are you sure');
    if (yes == true) {
      this.props.dispatch(deleteCarrusel(id));
    }
  }

  front() {
    if(this.props.transitoryInfo.length > 0) {
      var actualPic = this.props.transitoryInfo[0];
    } else {
      var actualPic = "no images";
    }
    return(
      <div className="trisixti-container">
        <div className="carrusel-header">
          <h5>{actualPic.name}</h5>
        </div>
        <div id="detalles" className="frame">
          <iframe src={actualPic.image} seamless></iframe>
        </div>
        <div className="card-info">
          <span>
            {this.menuButtons()}
          </span>
        </div>
      </div>
    )
  }

  render() {
    if(this.props.show) {
      return(this.front());
    } else {
      return(<CarruselsDescription show={this.props.toggleCard} selectedCarrusel={this.props.selectedCarrusel}/>);
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo,
    idiomas: state.idiomas,
    queVeo: state.queVeo,
    descripcions: state.descripcions
  }
}

export default connect(mapStateToProps)(Trisixti);
