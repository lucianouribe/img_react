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
      showAdd: false
      // cualTopic: null,
      // cualSubTopic: null
    }

    this.showContent = this.showContent.bind(this);
    this.showEditContent = this.showEditContent.bind(this);
    this.showAddOption = this.showAddOption.bind(this);

    this.showNameEdit = this.showNameEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.stepSubmit = this.stepSubmit.bind(this);
    this.pasos = this.pasos.bind(this);
  }

  componentDidMount(){

    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
  }

  showContent(){
    this.setState({ show: !this.state.show })
  }

  showAddOption(){
    this.setState({ showAdd: !this.state.showAdd })
  }

  showEditContent(one, two){
    // this.fixEditState(one, two);
    this.setState({ showEdit: !this.state.showEdit });
  }

  // fixEditState(one, two){
  //   this.setState({ cualTopic: one, cualSubTopic: two})
  // }

  //SET TOPIC STATER
  // setTopics(aTopic){
  //   let picked = Tutorials[aTopic];
  //   this.setState({cualTopic: aTopic, cualSubTopic: picked});
  // }

  // STEP ADD DISPATCHER
  stepSubmit(){
    let step = this.refs.step.value;
    let orden;
    let estilo = 'combinado';
    // let estilo = this.refs.estilo.value;
    let proyecto = this.props.elproyecto;
    console.log('go')
    console.log(proyecto)
    this.props.dispatch(addPaso(proyecto, step, orden, estilo));
    this.showAddOption();
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));
  }

  // ADD STEP FORM
  addStepForm(){
    if(this.state.showAdd){
      // let estilo;
      // let codigo = 'codigo'
      return(
        <div className="tarjeta form-edit">
          <form className="add-form-container input-field">
            <div className='btns-estilo'>
              <input type='radio' name='estilo' value='combinado' checked/>
              <label>combinado</label>
              <input type='radio' name='estilo' value='codigo'/>
              <label>codigo</label>
              <input type='radio' name='estilo' value='terminal'/>
              <label>terminal</label>
              <input type='radio' name='estilo' value='entonces'/>
              <label>entonces</label>
            </div>
            <div className="tarjeta-content">
              <textarea ref='step'></textarea>
            </div>
            <div className="tarjeta-action">
              <span onClick={this.stepSubmit}><i className="material-icons">done</i></span>
              <span onClick={this.showAddOption}><i className="material-icons">cancel</i></span>
            </div>
          </form>
        </div>
      )
    }
  }

  // EDIT FORM
  handleEdit(){
    let id = this.refs.id.value;
    let name = this.refs.name.value.toLowerCase();
    let topic;
    let subtopic;
    let difficulty = this.refs.difficulty.value;
    this.props.dispatch(editProyecto(id, name, topic, subtopic, difficulty));
    this.componentDidMount();
  }

  showNameEdit(){
    let proyecto = this.props.elproyecto

    // let elProyecto = Tutorials.topic;
    // let proyectoTopic = elProyecto.map((elPro, i) => {
    //   if(elPro === proyecto.topic) {
    //     return (<option type="text" key={i} selected value={elPro}>{elPro}</option>)
    //   } else {
    //     return (<option type="text" key={i} value={elPro}>{elPro}</option>)
    //   }
    // });

    // if(this.state.cualSubTopic) {
    //   let elSubProyecto = this.state.cualSubTopic;
    //   let subProyectoTopic = elSubProyecto.map((subPro, i) => {
    //     if(subPro === proyecto.subtopic) {
    //       return (<option type="text" key={i} selected value={subPro}>{subPro}</option>)
    //     } else {
    //       return (<option type="text" key={i} value={subPro}>{subPro}</option>)
    //     }
    //   });
    // }

    let proyectoDiffi = Tutorials.difficulty.map((diffiOpt, i) => {
      if(diffiOpt === proyecto.difficulty) {
        return (<option type="text" key={i} selected value={diffiOpt}>{diffiOpt}</option>)
      } else {
        return (<option type="text" key={i} value={diffiOpt}>{diffiOpt}</option>)
      }
    });

    // <select className="browser-default" ref="topic" onChange={() => this.setTopics(this.refs.topic.value)}>
    //   {proyectoTopic}
    // </select>
    // <select className="browser-default" ref="subtopic">
    //
    // </select>

    if(this.state.showEdit) {
      return(
        <span className='titulo-nombre'>
          <form className="name-edit-form" onChange={this.handleEdit}>
            <select className="browser-default" ref="difficulty">
              {proyectoDiffi}
            </select>
            <input type="hidden" ref='id' value={proyecto.id}/>
            <input className="name-edit" type="text" ref='name' defaultValue={proyecto.name}/>
          </form>
        </span>
      )
    } else {
      return (
        <span className='titulo-nombre'>
          <h4 onClick={this.showContent}>{proyecto.name}</h4>
        </span>
      )
    }
  }

  pasos(){
    if(this.state.show) {
      let showPasos = this.props.pasos;
      let proyecto = this.props.elproyecto;
      // console.log(`show pasos for ${proye.name}`);
      console.table(showPasos);
      if(showPasos.length > 0) {
        return showPasos.map( paso => {
          return(<Paso key={paso.id} elpaso={paso} proyecto={proyecto} procoms={paso.procoms} showContent={this.showContent}/>);
        })
      } else {
        return(<div className="paso-container"><div>Sin Pasos</div></div>);
      }
    }
  }

  render(){
    let proyecto = this.props.elproyecto;
    let topic = proyecto.topic;
    let subtopic = proyecto.subtopic;
    return (
      <div>
        <div className={`proyecto-unidad principal ${proyecto.difficulty}`}>
          <span className='container-logos'>
            <div className={`cont-log ${topic}`}></div>
            <div className={`cont-log ${subtopic}`}></div>
          </span>
          {this.showNameEdit()}
          <span className='botones'>
            <i className="material-icons btn-icon btn-add" onClick={() => this.showAddOption()}>add</i>
            <i className="material-icons btn-icon btn-delete" onClick={() => this.props.dispatch(deleteProyecto(proyecto.id))}>delete</i>
            <i className="material-icons btn-icon btn-edit" onClick={() => this.showEditContent(topic, subtopic)}>edit</i>
          </span>
        </div>
        {this.addStepForm()}
        {this.pasos()}
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {

 }
}

export default connect(mapStateToProps)(Proyecto);
