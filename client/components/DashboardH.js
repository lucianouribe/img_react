import React, { Component } from 'react';
import DashButtons from './DashButtons';
import Picture from './Picture';

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard col s12 m2 l2 left">
        <aside className="center">
          <Picture />
          <DashButtons
              infoSpongePanos={this.props.infoSpongePanos}
              infoSpongeImages={this.props.infoSpongeImages}
              />
        </aside>
      </div>
    )
  }
}


export default Dashboard;
