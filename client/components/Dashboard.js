import React, { Component } from 'react';
import DashButtons from './DashButtons';
import Picture from './Picture';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard col s12 m2 l2 left">
        <aside className="center">
          <Picture className="pic-compo"></Picture>
          <DashButtons
              infoSpongePanos={this.props.infoSpongePanos}
              infoSpongeImages={this.props.infoSpongeImages}
              infoSpongeAjax={this.props.infoSpongeAjax}
              />
        </aside>
      </div>
    )
  }
}


export default Dashboard;
