import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos, editProyecto, deleteProyecto, addPaso } from '../actions/proyectos';

import Paso from './Paso';

import Tutorials from '../Tutorials';


class Proyecto extends React.Component {

  constructor(){
    super();

    this.state = {
      show: false,
      showEdit: false,
      showAdd: false,
      cualTopic: null,
      cualSubTopic: null,
      estilo: 'combinado'
    }

    this.showEditContent = this.showEditContent.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editForm = this.editForm.bind(this);

    this.showPasos = this.showPasos.bind(this);
    this.showAddPasoOption = this.showAddPasoOption.bind(this);
    this.pasoSubmit = this.pasoSubmit.bind(this);

    this.topicChanger = this.topicChanger.bind(this);
  }

  componentDidMount(){
    $('select').material_select();
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
    let proyectoTopic = this.props.elproyecto.topic
    let picked = Tutorials[proyectoTopic];
    this.setState({cualTopic: proyectoTopic, cualSubTopic: picked});

    // para que los tab funcionen en el textarea
    var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for(var i=0;i<count;i++) {
      textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
          e.preventDefault();
          var s = this.selectionStart;
          this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
          this.selectionEnd = s+1;
        }
      }
    }
  }

  componentDidUpdate() {
    $('select').material_select();
  }

  // PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!
  showEditContent(){
    // this.fixEditState(one, two);
    this.setState({ showEdit: !this.state.showEdit });
  }

  topicChanger(aTopic){
    // console.log('did i change?')
    let picked = Tutorials[aTopic];
    this.setState({cualTopic: aTopic, cualSubTopic: picked});
  }

  // EDIT FORM
  editForm(){
    let proyecto = this.props.elproyecto
    let topic = proyecto.topic;
    let subtopic = proyecto.subtopic;

    let elProyecto = Tutorials.topic;
    let proyectoTopic = elProyecto.map((elPro, i) => {
      if(elPro === proyecto.topic) {
        return (<option type="text" key={i} selected value={elPro}>{elPro}</option>)
      } else {
        return (<option type="text" key={i} value={elPro}>{elPro}</option>)
      }
    });

    let subProyectoTopic = this.state.cualSubTopic.map((subPro, i) => {
      if(subPro === proyecto.subtopic) {
        return (<option type="text" key={i} selected value={subPro}>{subPro}</option>)
      } else {
        return (<option type="text" key={i} value={subPro}>{subPro}</option>)
      }
    });

    let proyectoDiffi = Tutorials.difficulty.map((diffiOpt, i) => {
      if(diffiOpt === proyecto.difficulty) {
        return (<option type="text" key={i} selected value={diffiOpt}>{diffiOpt}</option>)
      } else {
        return (<option type="text" key={i} value={diffiOpt}>{diffiOpt}</option>)
      }
    });

    return(
      <div className={`proyecto-unidad principal ${proyecto.difficulty}`}>
        <span className='titulo-nombre'>
          <form className="name-edit-form">
            <select className="browser-default select-topic" ref="topic" onChange={()=> this.topicChanger(this.refs.topic.value)}>
              {proyectoTopic}
            </select>
            <select className="browser-default select-topic" ref="subtopic">
              {subProyectoTopic}
            </select>
            <select className="browser-default select-difficulty" ref="difficulty">
              {proyectoDiffi}
            </select>
            <input type="hidden" ref='id' value={proyecto.id}/>
            <input className="name-edit" type="text" ref='name' defaultValue={proyecto.name}/>
          </form>
        </span>
        <span className='botones'>
          <i className="material-icons btn-icon btn-edit" onClick={() => this.handleEdit()}>done</i>
          <i className="material-icons btn-icon btn-edit" onClick={() => this.showEditContent()}>cancel</i>
        </span>
      </div>
    )
  }

  handleEdit(){
    let id = this.refs.id.value;
    let name = this.refs.name.value.toLowerCase();
    let topic = this.refs.topic.value;
    let subtopic = this.refs.subtopic.value;
    let difficulty = this.refs.difficulty.value;
    let order = 0;
    this.props.dispatch(editProyecto(id, name, topic, subtopic, difficulty, order));
    this.showEditContent();
  }

  // PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!
  showPasos(){
    this.setState({ show: !this.state.show })
  }
  showAddPasoOption(){
    this.setState({ showAdd: !this.state.showAdd })
  }

  // PASO ADD DISPATCHER
  pasoSubmit(){
    let step;
    if(this.state.estilo === 'terminal') {
      step = `terminal >> ${this.refs.step.value}`
    } else if (this.state.estilo === 'go-to') {
      step = `go to -> ${this.refs.step.value}`
    } else {
      step = this.refs.step.value;
    }
    let orden;
    let estilo = this.state.estilo;
    let proyecto = this.props.elproyecto;
    this.props.dispatch(addPaso(proyecto, step, orden, estilo));
    this.showAddPasoOption();
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
  }

  // ADD PASO FORM
  addPasoForm(){
    if(this.state.showAdd){
      let fullCode = 'full-code'
      let codigo = 'codigo'
      let terminal = 'terminal'
      let goTo = 'go-to'
      let shortcut = 'shortcut'
      return(
        <div className="tarjeta form-edit">
          <form className="add-paso-form">
            <div className='btns-estilo'>
              <input type='radio' name="radAnswer" id='full-code' onClick={()=> this.setState({estilo: fullCode})}/>
              <label htmlFor='full-code'>full code</label>
              <input type='radio' name="radAnswer" id='codigo' onClick={()=> this.setState({estilo: codigo})}/>
              <label htmlFor='codigo'>code</label>
              <input type='radio' name="radAnswer" id='terminal' onClick={()=> this.setState({estilo: terminal})}/>
              <label htmlFor='terminal'>terminal</label>
              <input type='radio' name="radAnswer" id='go-to' onClick={()=> this.setState({estilo: goTo})}/>
              <label htmlFor='go-to'>go to</label>
              <input type='radio' name="radAnswer" id='shortcut' onClick={()=> this.setState({estilo: shortcut})}/>
              <label htmlFor='shortcut'>shortcut</label>
            </div>
            <div className="tarjeta-content">
              <textarea ref='step'></textarea>
            </div>
            <div className="tarjeta-action">
              <span onClick={this.pasoSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.showAddPasoOption}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
      )
    }
  }

  pasoLooper(){
    if(this.state.show) {
      let showPasos = this.props.pasos;
      let proyecto = this.props.elproyecto;

      if(showPasos.length > 0) {
        return showPasos.map( paso => {
          return(<Paso key={paso.id} elpaso={paso} proyecto={proyecto} procoms={paso.procoms} showPasos={this.showPasos}/>);
        })
      } else {
        return(<div className="paso-container"><div>Sin Pasos</div></div>);
      }
    }
  }

  //RENDER DISPLAY
  proyectoUnitShowCase(){
    if(this.state.showEdit) {
      return(this.editForm())
    } else {
      let proyecto = this.props.elproyecto;
      let topic = proyecto.topic;
      let subtopic = proyecto.subtopic;
      return (
        <div className={`proyecto-unidad principal`}>
          <span className='container-logos'>
            <div className={`cont-log ${topic}`}></div>
            <div className={`cont-log ${subtopic}`}></div>
          </span>
          <span className='titulo-nombre'>
            <h4 onClick={this.showPasos}>{proyecto.name}</h4>
          </span>
          <span className={`botones ${proyecto.difficulty}`}>
            <i className="material-icons btn-icon btn-add" onClick={() => this.showAddPasoOption()}>add</i>
            <i className="material-icons btn-icon btn-delete" onClick={() => this.props.dispatch(deleteProyecto(proyecto.id))}>delete</i>
            <i className="material-icons btn-icon btn-edit" onClick={() => this.showEditContent(topic, subtopic)}>edit</i>
          </span>
        </div>
      )
    }
  }


  render(){
    return (
      <div>
        {this.proyectoUnitShowCase()}
        {this.addPasoForm()}
        {this.pasoLooper()}
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {

 }
}

export default connect(mapStateToProps)(Proyecto);
