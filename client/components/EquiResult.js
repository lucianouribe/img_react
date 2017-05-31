import React from 'react';
import Gasto from './Gasto';
import { formatPrice } from '../helpers';

class EquiResult extends React.Component {

  constructor(props) {
    super(props);

    this.showGastos = this.showGastos.bind(this);
  }

  componentDidMount() {
    this.showGastos();
  }

  showFruto() {
    let which = 'fruta';
    if(this.props.estado.fruta) {
      return(
        <div className='fruto-section equiresult'>
          <h4>{this.props.estado.fruta}</h4>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({fruta: null}))}>delete</i>
        </div>
      )
    }
  }

  showValoresNal() {
    let which = 'valorKilo';
    if(this.props.estado.valNal) {
      return (
        <div className='valores-section equiresult'>
          <h5>Valor {this.props.estado.unidad} de {this.props.estado.fruta} mercado nacional:</h5>
          <h5>{formatPrice(this.props.estado.valNal)}</h5>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({valNal: null}))}>delete</i>
        </div>
      )
    }
  }

  showValoresExpo() {
    let which = 'valorKilo';
    if(this.props.estado.valExpo) {
      return (
        <div className='valores-section equiresult'>
          <h5>Valor {this.props.estado.unidad} de {this.props.estado.fruta} exportacion:</h5>
          <h5>{formatPrice(this.props.estado.valExpo)}</h5>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({valExpo: null}))}>delete</i>
        </div>
      )
    }
  }

  showRechazo() {
    let which = 'rechazo';
    if(this.props.estado.rechazo) {
      return (
        <div className='rechazo-section equiresult'>
          <h5>Porcentaje rechazado: {this.props.estado.rechazo}%</h5>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
          <i className="icon-btn material-icons" onClick={() => this.props.setStater(({rechazo: null}))}>delete</i>
        </div>
      )
    }
  }

  showGastos() {
    let queGasto = this.props.estado.queGasto
    if(queGasto.length) {
      return queGasto.map( gasto => {
        return(<Gasto key={gasto.id} gasto={gasto} />);
      })
    }
  }

  render() {
    return (
      <div className="aside-der col s12 m6 l6 right">
        {this.showFruto()}
        {this.showValoresNal()}
        {this.showValoresExpo()}
        {this.showRechazo()}
        {this.showGastos()}
      </div>
    )
  }
}

export default EquiResult;
