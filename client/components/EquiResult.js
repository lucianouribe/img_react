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
          <span className="encabezado">
            <p>Producto</p>
          </span>
          <span className="datos">
            <h4>{this.props.estado.fruta}</h4>
            <span className="botones">
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({fruta: null}))}>delete</i>
            </span>
          </span>
        </div>
      )
    }
  }

  showValoresNal() {
    let which = 'valorKilo';
    if(this.props.estado.valNal) {
      return (
        <div className='valores-section equiresult'>
          <span className="encabezado">
            <p>Valor {this.props.estado.unidad} de {this.props.estado.fruta} mercado nacional</p>
          </span>
          <span className="datos">
            <h4>{formatPrice(this.props.estado.valNal)}</h4>
            <span className="botones">
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({valNal: null}))}>delete</i>
            </span>
          </span>
        </div>
      )
    }
  }

  showValoresExpo() {
    let which = 'valorKilo';
    if(this.props.estado.valExpo) {
      return (
        <div className='valores-section equiresult'>
          <span className="encabezado">
            <p>Valor {this.props.estado.unidad} de {this.props.estado.fruta} exportacion</p>
          </span>
          <span className="datos">
            <h4>{formatPrice(this.props.estado.valExpo)}</h4>
            <span className="botones">
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({valExpo: null}))}>delete</i>
            </span>
          </span>
        </div>
      )
    }
  }

  showRechazo() {
    let which = 'rechazo';
    if(this.props.estado.rechazo) {
      return (
        <div className='rechazo-section equiresult'>
          <span className="encabezado">
            <p>Porcentaje rechazado</p>
          </span>
          <span className="datos">
            <h4>{this.props.estado.rechazo}%</h4>
            <span className="botones">
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({which}))}>edit</i>
              <i className="icon-btn material-icons" onClick={() => this.props.setStater(({rechazo: null}))}>delete</i>
            </span>
          </span>
        </div>
      )
    }
  }

  showGastos() {
    let queGasto = this.props.estado.queGasto
    if(queGasto.length) {
      return queGasto.map( gasto => {
        return(<Gasto key={gasto.id} gasto={gasto} deleter={this.props.deleter}/>);
      })
    }
  }
 // col s12 m6 l6 right
  render() {
    return (
      <div className="aside-der">
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
