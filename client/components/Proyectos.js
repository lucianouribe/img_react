import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos, addProyecto } from '../actions/proyectos';
import { addMemory } from '../actions/mymemory';
import { ortografica } from '../helpers';
import Proyecto from './Proyecto';
import ProyectosSearch from './ProyectosSearch';
import Tutorials from '../Tutorials';

class Proyectos extends React.Component {

  constructor(){
    super();

    this.state = {
      showForm: false,
      cualTopic: 'none',
      cualSubTopic: ['none'],
      modalize: false
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.addForm = this.addForm.bind(this);
    this.addHandleSubmit = this.addHandleSubmit.bind(this);
    this.setTopics = this.setTopics.bind(this);
  }

  componentDidMount() {
    $('select').material_select();
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
    // option for cellphones
    // let isMobile = (window.innerWidth <= 800 && window.innerHeight <= 600)
    let isMobile = true
    this.modalizeMe(isMobile);
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
      return(this.addForm());
    } else {
      return(this.displayProyectos());
    }
  }

  //SET TOPIC STATER
  setTopics(aTopic){
    let picked = Tutorials[aTopic];
    this.setState({cualTopic: aTopic, cualSubTopic: picked});
  }

  // ADD FORM this should be a component
  addForm(){
    let elProyecto = Tutorials.topic;
    let proyectoTopic = elProyecto.map((elPro, i) => {
      return (
        <option type="text" key={i} value={elPro} >{elPro}</option>
      );
    });

    let elSubProyecto = this.state.cualSubTopic;
    let subProyectoTopic;
    if(elSubProyecto !== []) {
      subProyectoTopic = elSubProyecto.map((subPro, i) => {
        return (
          <option type="text" key={i} value={subPro} >{ortografica(subPro)}</option>
        );
      });
    }
    // select topics could be a component or a separated method?
    return(
        <div className="tarjeta form-edit">
          <form className="input-field" encType="multipart/form-data">
            <div className="tarjeta-content">
              <h3 className='tarjeta-title center'>Proyecto nuevo</h3>
                <input type="text" ref='name' required placeholder="nombre"/>
                <select className="browser-default" ref="topic" onChange={() => this.setTopics(this.refs.topic.value)}>
                  {proyectoTopic}
                </select>
                <select className="browser-default" ref="subtopic">
                  {subProyectoTopic}
                </select>
                <select className="browser-default" ref="difficulty">
                  <option>basic</option>
                  <option>medium</option>
                  <option>advanced</option>
                  <option>sayayin</option>
                </select>
            </div>
            <div className="tarjeta-action">
              <span onClick={this.addHandleSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.toggleDisplay}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
    );
  }

  // ADD FORM SUBMIT
  addHandleSubmit(e){
    e.preventDefault();
    // console.log('handle sumbit')
    let name = this.refs.name.value.toLowerCase();
    let topic = this.refs.topic.value;
    let subtopic = this.refs.subtopic.value;
    let difficulty = this.refs.difficulty.value;
    let orden = 0;
    this.props.dispatch(addProyecto(name, topic, subtopic, difficulty, orden, this.props.user.id));
    this.toggleDisplay();
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
    user: state.user,
    proyectos: state.proyectos,
    mymemory: state.mymemory
 }
}

export default connect(mapStateToProps)(Proyectos);
