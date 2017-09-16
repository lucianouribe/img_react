import React from 'react';
import { connect } from 'react-redux';
import { deleteCarrusel } from '../actions/carrusels';

import Description from '../Description';


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

  menuButtons() {
    // console.log('menu buttons')
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
      <div>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
              <div id="detalles" className="frame">
                <iframe src={actualPic.image} seamless></iframe>
              </div>
            <div className="letter"></div>
          </div>
          <div className="card-info">
            <h5 className="card-title left">{actualPic.name}</h5>
            <span>
              {this.menuButtons()}
              <i type="button" onClick={this.toggleCard} className="hamburger right"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }


  behind() {
    return(
      <div>
        <div className="card-reveal">
          <span className="card-title"><i type="button" onClick={this.toggleCard} className="close material-icons right">close</i><h5>{Description.panoramicos[this.props.idiomas].name}</h5></span>
          <p>{Description.panoramicos[this.props.idiomas].description}</p>
          <div className="logos">
          </div>
        </div>
      </div>
    )
  }

  render() {
    if(this.state.show) {
      return(this.front());
    } else {
      return(this.behind());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    selectedCarrusel: state.selectedCarrusel,
    transitoryInfo: state.transitoryInfo,
    idiomas: state.idiomas,
    queVeo: state.queVeo
  }
}

export default connect(mapStateToProps)(Trisixti);
