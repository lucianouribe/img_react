import React from 'react';

class Equilibrio extends React.Component {
  constructor() {
    super();

    this.state = {
      medidaEcono: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGastoIngreso = this.handleGastoIngreso.bind(this);
  }

  handleGastoIngreso(){
    this.setState({ medidaEcono: !this.state.medidaEcono })
  }

  handleSubmit(){

  }

  render(){
    return (
      <div className='card equilibrio'>
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <div className="switch col s4">
            <label>
              Gasto
                <input ref="user_type" type="checkbox" onClick={this.handleGastoIngreso}/>
                <span className="lever"></span>
              Ingreso
            </label>
          </div>
          <input className="col s2" type='text' ref='item' placeholder='item'/>
          <input className="col s2" type='text' ref='unidad' placeholder='unidad'/>
          <input className="col s2" type='number' ref='valor' placeholder='valor'/>
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Equilibrio;
