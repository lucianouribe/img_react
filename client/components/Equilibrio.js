import React from 'react';
import EquiResult from './EquiResult';
import EquiForms from './EquiForms';
import { formatPrice, pluralize } from '../helpers';

class Equilibrio extends React.Component {

  constructor() {
    super();

    this.state = {
      fruta: '',
      valores: '',
      expo: false,
      unidad: null,
      valExpo: null,
      valNal: null,
      rechazo: null,
      queGasto: [],
      which: '',
      show: true
    }

    this.setStater = this.setStater.bind(this);
    this.equilibrio = this.equilibrio.bind(this);
    this.valorPromedio = this.valorPromedio.bind(this);
    this.equilibrio = this.equilibrio.bind(this);
    this.deleter = this.deleter.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(){
    this.setState({ show: !this.state.show });
  }

  setStater(hereItCommes) {
    this.setState(hereItCommes)
  }

  deleter(aidi){
    let array = this.state.queGasto
    let index = array.findIndex( c => c.id === aidi)
    array = [
      ...array.slice(0, index),
      ...array.slice(index + 1)
    ]
    this.setState({queGasto: array})
  }

  valorPromedio(a, b, c, d) {
    return ((a * b) + (c * d))
  }

  equilibrio(a, b, c, d, e) {
    return (e / ( (a * d) + (b * c) - b))
  }

  // def equilibrio(b, c, d, e, f, g)
  //   return f / ((b * e) + (c * d) - c)
  // end

  calculoEquilibrio() {
    if(this.state.queGasto.length) {
      // datos variables
      let fruto = this.state.fruta;
      let valExpo = this.state.valExpo;
      let valNal = this.state.valNal;
      let porcenNal = this.state.rechazo / 100;
      let porcenExpo = 1 - (1 * porcenNal);
      // costos sumados
      let costos = [];
      let totalCostos;
      this.state.queGasto.forEach( (gasto) => {
          costos.push(parseInt(gasto.costo));
          totalCostos = costos.reduce((a, b) => a + b, 0);
          // console.log(costos)
      });
      // calculos valor promedio y punto de equilibrio
      let valpromedio = this.valorPromedio(valExpo, porcenExpo, valNal, porcenNal)
      let ptoEquilibro = this.equilibrio(valExpo, valNal, porcenNal, porcenExpo, totalCostos)

      return(
        <div className='result-section'>
          <h2>Punto de equilibrio: <strong>{ptoEquilibro.toFixed(2)}</strong> {pluralize(this.state.unidad)}</h2>
          <h3>Valor {this.state.unidad} promedio: <strong>{formatPrice(valpromedio)}</strong></h3>
        </div>
      )

    } else {
      return (
        <div className='result-section'>
          <h2>Punto de equilibrio</h2>
          <h3>frutales exportacion vs nacional</h3>
        </div>
      )
    }

  }

  viewRenderer(){
    if(this.state.show) {
      return(
        <div className='cuerpo'>
          <EquiForms setStater={this.setStater} estado={this.state} />
          <EquiResult setStater={this.setStater} estado={this.state} deleter={this.deleter}/>
        </div>
      )
    } else {
      return(
        <div className='cuerpo'>
          <div className='descripcion'>
            <h5>Información acerca de este app</h5>
            <p>Componentes realizados en ReactJS.<br/>Calculos realizados en javascript desde el client side.<br/>No back end.<br/>Estilo y encuadre realizado con flexbox.<br/>Iconos tomados de Font Awesome<i className="fa fa-font-awesome"></i> y materialize</p>
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div className='equilibrio'>
        <div className='titulo'>
          {this.calculoEquilibrio()}
          <i className="fa fa-info-circle info-btn" onClick={() => this.toggleView()}></i>
        </div>
        {this.viewRenderer()}
      </div>
    )
  }

}

export default Equilibrio;
