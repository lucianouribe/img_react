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
              renderOtr={this.props.renderOtr}
              renderProd={this.props.renderProd}
              renderEsp={this.props.renderEsp}
              />
        </aside>
      </div>
    )
  }
}


export default Dashboard;
