import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos, addProyecto } from '../actions/proyectos';
import { ortografica } from '../helpers';
import Proyecto from './Proyecto';
import Tutorials from '../Tutorials';

class Proyectos extends React.Component {

  constructor(){
    super();

    this.state = {
      showForm: false,
      cualTopic: 'javascript',
      cualSubTopic: ['vanella', 'es6', 'react', 'redux', 'json']
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.displayChanger = this.displayChanger.bind(this);
    this.addForm = this.addForm.bind(this);
    this.addHandleSubmit = this.addHandleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showSearcher = this.showSearcher.bind(this);
    this.setTopics = this.setTopics.bind(this);

  }

  componentDidMount() {
    $('select').material_select();

    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
  }

  componentDidUpdate() {
    // $('select').material_select();
  }

  toggleDisplay(){
    this.setState({showForm: !this.state.showForm})
  }

  // SEARCHER FORM
  showSearcher(){
    return(
      <input type="text" className="search-input" placeholder="buscar proyecto" ref='searchInput' onChange={this.handleChange} />
    )
  }
  // SEARCHER CHANGE HANDLER
  handleChange(){
    this.props.dispatch(fetchProyectos(this.refs.searchInput.value));
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

  // ADD FORM
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
    console.log('handle sumbit')
    let name = this.refs.name.value.toLowerCase();
    let topic = this.refs.topic.value;
    let subtopic = this.refs.subtopic.value;
    let difficulty = this.refs.difficulty.value;
    this.props.dispatch(addProyecto(name, topic, subtopic, difficulty));
    this.toggleDisplay();
  }

  // DISPLAY PROYECTOS
  displayProyectos() {
    let proyectos = this.props.proyectos;
    if(proyectos.length > 0) {
      return proyectos.map( proyecto => {
        // debugger;
        return(<Proyecto key={proyecto.id} elproyecto={proyecto} pasos={proyecto.pasos} setTopics={this.setTopics} />);
      })
    } else {
      return(<h4>Sin Proyectos</h4>);
    }
  }

  // THE REAL RENDER
  render(){
    return (
      <div className='descripciones-container'>
        <div className='admin-title'>
          <h1>Tutoriales</h1>
          {this.showSearcher()}
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
    pasos: state.pasos
 }
}

export default connect(mapStateToProps)(Proyectos);
