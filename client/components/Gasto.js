import React from 'react';
import { formatPrice } from '../helpers';

class Gasto extends React.Component {

  render() {
    let gasto = this.props.gasto
    return (
      <div className='costos-section equiresult'>
        <span className="encabezado">
          <p>Costo: {gasto.item}</p>
        </span>
        <span className="datos">
          <h4>{formatPrice(gasto.costo)}</h4>
          <span className="botones">
            <i className="icon-btn material-icons" onClick={() => this.props.deleter(gasto.id)}>delete</i>
          </span>
        </span>
      </div>
    )
  }
}



export default Gasto;
