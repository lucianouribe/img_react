import React, { Component } from 'react';
import DashButtons from './DashButtons';
import Picture from './Picture';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard col s12 m2 left">
        <aside className="center">
          <Picture className="pic-compo"></Picture>
          <DashButtons
              convertSlide={this.props.convertSlide}
              renderArq={this.props.renderArq}
              renderProd={this.props.renderProd}
              renderAmb={this.props.renderAmb}
              />
        </aside>
      </div>
    )
  }
}


export default Dashboard;
