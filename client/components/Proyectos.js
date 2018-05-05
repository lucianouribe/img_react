import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos } from '../actions/proyectos';
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
  }

  componentDidMount() {
    $('select').material_select();
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
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

  // THE REAL RENDER
  render(){
    let modalizeStyle;
    if(this.state.modalize) {
      modalizeStyle = {
        fontSize: '1.6rem',
        color: 'red'
      }
    }
    return (
      <div className='descripciones-container'>
        <div className='admin-title'>
        <i className="fa fa-arrows-alt modalize" style={modalizeStyle} aria-hidden="true" onClick={() => this.setState({modalize: !this.state.modalize})}></i>
          <h1 className="proyectos-title">iTuto</h1>
          <ProyectosSearch />
          <span className='right' onClick={this.toggleDisplay}><i className="material-icons btn-icon large">add</i></span>
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
    mymemory: state.mymemory
 }
}

export default connect(mapStateToProps)(Proyectos);
