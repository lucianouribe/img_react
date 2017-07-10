import React from 'react';

class EquiForms extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expo: false
    }

    this.handleSubmitFrutos = this.handleSubmitFrutos.bind(this);
    this.handleSubmitValores = this.handleSubmitValores.bind(this);
    this.handleExpoNal = this.handleExpoNal.bind(this);
    this.handleSubmitRechazo = this.handleSubmitRechazo.bind(this);
    this.handleSubmitGastos = this.handleSubmitGastos.bind(this);


    this.opener = this.opener.bind(this);
  }

  componentDidMount() {
   $('select').material_select();
   $('.show-unit').hide();
   $('.done-unit').on('click', function(){
     $('.show-unit').show();
   })
   $('.show-unit').on('click', function(){
     $(self).hide();
   })

  }

  componentDidUpdate() {
    $('select').material_select();
  }

  opener(which) {
    this.props.setStater(({which}));
  }

  handleSubmitFrutos(e){
    let fruta = this.refs.fruta.value;
    // this.setState({ fruta });
    this.props.setStater(({fruta}));
    this.refs.addFrutaForm.reset();
    this.props.setStater(({which: ''}));
  }

  handleExpoNal(){
    this.setState({ expo: !this.state.expo })
  }

  handleSubmitValores(e){
    e.preventDefault();
    if(!this.props.estado.unidad) {
      let unidad = this.refs.addUnidad.value;
      this.props.setStater(({unidad}));
    }
    if(this.state.expo) {
      let valExpo = this.refs.valorMercado.value;
      // console.log(valExpo)
      this.props.setStater(({valExpo}));
    } else {
      let valNal = this.refs.valorMercado.value;
      // console.log(valNal)
      this.props.setStater(({valNal}));
    }
    this.refs.addValorKiloForm.reset();
    this.props.setStater(({which: ''}));
  }

  handleSubmitRechazo(e) {
    e.preventDefault();
    let rechazo = this.refs.rechazo.value;
    this.props.setStater(({rechazo}));
    // habra que poner aqui el aceptado????
    this.refs.addRechazoForm.reset();
    this.props.setStater(({which: ''}));
  }

  handleSubmitGastos(e){
    e.preventDefault();
    // console.log('Equilibrio handle submit');
    // let id = this.props.estado.queGasto.length + 1;
    let id = new Date().getUTCMilliseconds();
    let item = this.refs.item.value;
    let costo = this.refs.costo.value;

    let unGasto = {id, item, costo}
    let estado = this.props.estado.queGasto;

    this.props.setStater(({queGasto: [...estado, unGasto]}));
    this.refs.addGastoForm.reset();
    this.props.setStater(({which: ''}));
  }

  unidadDeMedida() {
    if(!this.props.estado.unidad) {
      return (
        <div className="input-field unidad-medida">
          <label>Unidad de medida</label>
          <select ref="addUnidad">
            <option value="" disabled>Escoge una opcion</option>
            <option value="kilo">kilo</option>
            <option value="libra">libra</option>
            <option value="tonelada">tonelada</option>
          </select>
        </div>
      )
    }
  }

  addFruta() {
    let which = 'fruta';
    if(!this.props.estado.fruta || this.props.estado.which == 'fruta') {
      return(
        <form ref="addFrutaForm" className="add-fruta-form equiform open">
          <span className="inputer">
            <label>Tipo de fruta o vegetal</label>
            <input type='text' ref='fruta' placeholder='Tipo de fruta' />
          </span>
          <span className="doner" onClick={this.handleSubmitFrutos}>
            <i className="icon-btn material-icons">done</i>
          </span>
        </form>
      )
    } else {
      return(
        <form ref="addFrutaForm" className="add-fruta-form equiform close">
          <label>Tipo de fruta o vegetal</label>
          <i className="icon-btn material-icons" onClick={() => this.opener(which)}>visibility</i>
        </form>
      )
    }

  }

  addValorKilo() {
    let which = 'valorKilo';
    if(!this.props.estado.valNal || !this.props.estado.valExpo || this.props.estado.which == 'valorKilo') {
      return (
        <form ref="addValorKiloForm" className="add-valor-kilo-form equiform open">
          <span className="inputer">
            <label>Valor por unidad y mercado</label>
            <div className="row">
              <i className="icon-btn material-icons show-unit" onClick={() => this.props.setStater(({unidad: null}))}>repeat</i>
              <div className="input-field">
                <div className="switch">
                  <label>
                    Nacional
                      <input ref="expoONal" type="checkbox" onClick={this.handleExpoNal} />
                      <span className="lever"></span>
                    Exportacion
                  </label>
                </div>
                {this.unidadDeMedida()}
                <input className="" type='number' ref='valorMercado' placeholder='valor'/>
              </div>
            </div>
            </span>
            <span className="doner" onClick={this.handleSubmitValores}>
              <i className="icon-btn material-icons done-unit">done</i>
            </span>
        </form>
      )
    } else {
      return (
        <form ref="addValorKiloForm" className="add-valor-kilo-form equiform close">
          <label>Valor por unidad y mercado</label>
          <i className="icon-btn material-icons" onClick={() => this.opener(which)}>visibility</i>
        </form>
      )
    }

  }

  addRechazo() {
    let which = 'rechazo';
    if(!this.props.estado.rechazo || this.props.estado.which == 'rechazo') {
      return(
        <form ref='addRechazoForm' className='add-rechazo-form equiform open'>
          <span className="inputer">
            <label>Porcentaje rechazo</label>
            <input className="" type='number' ref='rechazo' placeholder='% Rechazo'/>
          </span>
          <span className="doner" onClick={this.handleSubmitRechazo}>
            <i className="icon-btn material-icons">done</i>
          </span>
        </form>
      )
    } else {
      return (
        <form ref='addRechazoForm' className='add-rechazo-form equiform close'>
          <label>Porcentaje rechazo</label>
          <i className="icon-btn material-icons" onClick={() => this.opener(which)}>visibility</i>
        </form>
      )
    }
  }
// col s12 m6 l6 left
  render() {
    return (
      <div className="aside-izq">

        {this.addFruta()}
        {this.addValorKilo()}
        {this.addRechazo()}

        <form ref='addGastoForm' className='add-gasto-form equiform open'>
          <span className="inputer">
            <label>Gastos y costos</label>
            <input className="" type='text' ref='item' placeholder='item'/>
            <input className="" type='number' ref='costo' placeholder='costo'/>
          </span>
          <span className="doner" onClick={this.handleSubmitGastos}>
            <i className="icon-btn material-icons">add</i>
          </span>
        </form>

      </div>
    )
  }
}

export default EquiForms;
