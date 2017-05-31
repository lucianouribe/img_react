import React from 'react';
import { formatPrice } from '../helpers';

class Gasto extends React.Component {

  render() {
    let gasto = this.props.gasto
    return (
      <div className='costos-section equiresult'>
        <h5>{gasto.item}: {formatPrice(gasto.costo)}</h5>
      </div>
    )
  }
}

export default Gasto;
