import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos } from '../actions/proyectos';
import { maxPasoId } from '../actions/maxPaso';
import { maxProcomId } from '../actions/maxProcom';
import { addMemory } from '../actions/mymemory';
import Proyecto from './Proyecto';
import ProyectoAdd from './ProyectoAdd';
import ProyectosSearch from './ProyectosSearch';

class Proyectos extends React.Component {

  constructor(){
    super();

    this.state = {
      showForm: false,
      modalize: true
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.displayAdd = this.displayAdd.bind(this);
  }

  componentDidMount() {
    // $('select').formSelect();
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
    this.props.dispatch(maxPasoId());
    this.props.dispatch(maxProcomId());
  }

  modalizeMe(doIt){
    this.setState({modalize: doIt})
  }

  // SHOW FORM
  toggleDisplay(){
    this.setState({showForm: !this.state.showForm})
  }

  // DISPLAY CHANGER
  displayChanger(){
    if(this.state.showForm) {
      return(<ProyectoAdd toggleDisplay={this.toggleDisplay} />);
    } else {
      return(this.displayProyectos());
    }
  }

  // DISPLAY PROYECTOS
  displayProyectos() {
    let proyectos = this.props.proyectos;
    // memory bank stuff
    let bank;
    let index;
    let newbank;
    let doorStatus;

    if(this.props.mymemory === null) {
      bank = [];
    } else {
      bank = this.props.mymemory;
    }
    // the loop itself
    if(proyectos.length > 0) {
      return proyectos.map( proyecto => {
        // door status stuff for showing pasos
        index = bank.findIndex( elem => elem["id"] === proyecto.id)

        if(index !== -1) {
          doorStatus = bank[index].state['show'];
          newbank = bank.filter( elem => elem["proyectoId"] === proyecto.id);
        } else {
          doorStatus = false;
        }
        // door status stuff for showing procoms
        return(
          <Proyecto key={proyecto.id}
            proyecto={proyecto}
            doorStatus={doorStatus}
            newbank={newbank}
            modalize={this.state.modalize} />
          );
      })
    } else {
      return(<h4>Sin Proyectos</h4>);
    }
  }

  displayAdd(){
    const allowed = this.props.user.role === 'admin'
    if (allowed) {
      return (
    <span className='right' onClick={this.toggleDisplay}><i className="material-icons btn-icon large">add</i></span>)
    }
  }

  // THE REAL RENDER
  render(){
    return (
      <div className='descripciones-container'>
        <div className='admin-title'>
          <h1 className="proyectos-title">tuto360</h1>
          <ProyectosSearch />
          {this.displayAdd()}
        </div>
        <div className='proyectos-section'>
          {this.displayChanger()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    proyectos: state.proyectos,
    mymemory: state.mymemory,
    user: state.user
 }
}

export default connect(mapStateToProps)(Proyectos);
