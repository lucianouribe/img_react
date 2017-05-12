import React from 'react';

class Trisixti extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true
    }

    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    this.setState({ show: !this.state.show });
  }


  front() {
    return(
      <div>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
              <div id="detalles" className="frame">
                <iframe src={this.props.details.address} seamless></iframe>
              </div>
            <div className="letter"></div>
          </div>
          <div className="card-info">
            <h5 className="card-title left">{this.props.details.name}</h5>
            <span>
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
          <span className="card-title grey-text text-darken-4"><i type="button" onClick={this.toggleCard} className="close material-icons right">close</i><h5>{this.props.details.name}</h5></span>
          <p>{this.props.details.description}</p>
          <div className="logos">
          <div className={this.props.details.logo1}></div>
          <div className={this.props.details.logo2}></div>
          <div className={this.props.details.logo3}></div>
          <div className={this.props.details.logo4}></div>
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

export default Trisixti;
