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
              renderOtr={this.props.renderOtr}
              renderProd={this.props.renderProd}
              renderEsp={this.props.renderEsp}
              fotosJoyas={this.props.fotosJoyas}
              fotosComp={this.props.fotosComp}
              fotosCuadros={this.props.fotosCuadros}
              fotosDetalles={this.props.fotosDetalles}
              fotosPaisajes={this.props.fotosPaisajes}
              fotosUrbano={this.props.fotosUrbano}
              fotosTexturas={this.props.fotosTexturas}
              fotosMuelles={this.props.fotosMuelles}
              fotosCuadrados={this.props.fotosCuadrados}
              panodigital={this.props.panodigital}
              panofotografia={this.props.panofotografia}
              panoradar={this.props.panoradar}
              />
        </aside>
      </div>
    )
  }
}


export default Dashboard;
