import React from 'react';
import { connect } from 'react-redux';

import Procom from './Procom';

import { fetchPasos, editPaso, deletePaso, addProcom } from '../actions/proyectos';
import { createMarkup } from '../helpers';


class Paso extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showComment: false,
      showProblem: false,
      typeOfProcom: true,
      showAddProcomForm: false,
      showEditPasoForm: false
    }

    // PASO CRUDS
    this.showEditPaso = this.showEditPaso.bind(this);
    this.submitEditPaso = this.submitEditPaso.bind(this);
    this.deletePaso = this.deletePaso.bind(this);
    // PROCOMS
    this.setComment = this.setComment.bind(this);
    this.setProblem = this.setProblem.bind(this);
    this.displayProcoms = this.displayProcoms.bind(this);
    this.addProcom = this.addProcom.bind(this);
    this.procomSubmit = this.procomSubmit.bind(this);
  }


  // PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!

  // EDIT
  showEditPaso(){
    console.log('edit me');
    this.setState({showEditPasoForm: !this.state.showEditPasoForm})
  }

  editPasoForm(){
    let paso = this.props.elpaso;
    return(
      <div className="tarjeta form-edit">
        <form className="add-form-container input-field">
          <div className="tarjeta-content">
            <textarea ref='step'>{paso.step}</textarea>
          </div>
          <div className="tarjeta-action">
            <span><i className="material-icons" onClick={()=> this.submitEditPaso()}>done</i></span>
            <span><i className="material-icons" onClick={()=> this.showEditPaso()}>cancel</i></span>
          </div>
        </form>
      </div>
    )
  }

  submitEditPaso(){
    let proyecto = this.props.proyecto;
    let paso = this.props.elpaso;
    let step = this.refs.step.value;
    let orden = 0;
    let estilo = 'terminal';
    this.props.dispatch(editPaso(proyecto, paso.id, step, orden, estilo));
    this.showEditPaso();
  }

  //DELETE
  deletePaso(pasId, proyecto){
    console.log('delete me');
    this.props.dispatch(deletePaso(pasId, proyecto));
    // this.props.showContent();
    // let full = 'full';
    // this.props.dispatch(fetchProyectos(full));
  }

  // PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!
  setComment(){
    this.setState({showComment: !this.state.showComment, typeOfProcom: true});
  }

  setProblem(){
    this.setState({showProblem: !this.state.showProblem, typeOfProcom: false});
  }

  displayProcoms(){
    let showProcoms = this.props.procoms;
    let paso = this.props.elpaso;
    let comments = this.props.procoms.filter( comme => { if(comme.type_of_issue === true) return comme })
    let problems = this.props.procoms.filter( proble => { if(proble.type_of_issue === false) return proble })
    if(this.state.showComment && this.state.typeOfProcom === true) {
      if(showProcoms.length > 0) {
        return comments.map( procom => {
          return(<Procom key={procom.id} procom={procom} paso={paso} />);
        })
      } else {
        return (<p>no comments</p>)
      }
    } else if (this.state.showProblem && this.state.typeOfProcom === false) {
      if(showProcoms.length > 0) {
        return problems.map( procom => {
          return(<Procom key={procom.id} procom={procom} paso={paso} />);
        })
      } else {
        return (<p>no problems</p>)
      }
    }
  }

  // ADD PROCOM STARTER
  addProcom(){
    // console.log('add procom')
    this.setState({showAddProcomForm: !this.state.showAddProcomForm})
  }

  //PROCOM FORM
  procomForm(){
    if(this.state.showAddProcomForm){
      return(
        <div className="tarjeta form-edit">
          <form className="add-form-container input-field">
            <div className='btns-estilo'>
              <input type='radio' ref='type_of_issue' value='true' />
              <label>comentario</label>
              <input type='radio' ref='type_of_issue' value='false'/>
              <label>problema</label>
            </div>
            <div className="tarjeta-content">
              <textarea ref='pro_content'></textarea>
            </div>
            <div className="tarjeta-action">
              <span onClick={()=> this.procomSubmit()}><i className="material-icons">done</i></span>
              <span><i className="material-icons" onClick={()=> this.addProcom()}>cancel</i></span>
            </div>
          </form>
        </div>
      )
    }
  }
  // PROCOM ADD DISPATCHER
  procomSubmit(){
    let pro_content = this.refs.pro_content.value;
    let type_of_issue = this.refs.type_of_issue.value;
    let pro_style = 'problema';
    let pro_order = 0;
    let paso = this.props.elpaso;
    this.props.dispatch(addProcom(paso, pro_content, pro_style, pro_order, type_of_issue));
    this.addProcom();
  }

  // RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!
  renderPasoContent(){
    let paso = this.props.elpaso;
    let proyecto = this.props.proyecto;
    return(
      <div>
        <div className={`paso-container ${paso.estilo}`}>
          <div className="paso-content" dangerouslySetInnerHTML={createMarkup(paso.step)}/>
          <span className='botones'>
            <i className="fa fa-plus-circle btn-icon" aria-hidden="true" onClick={() => this.addProcom()}></i>
            <i className="fa fa-exclamation-triangle btn-icon" aria-hidden="true" onClick={() => this.setProblem()}></i>
            <i className="fa fa-comments btn-icon" aria-hidden="true" onClick={() => this.setComment()}></i>
            <i className="fa fa-pencil" aria-hidden="true" onClick={()=> this.showEditPaso()}></i>
            <i className="fa fa-trash" aria-hidden="true" onClick={() => this.deletePaso(paso.id, proyecto)}></i>
          </span>
        </div>
        {this.displayProcoms()}
        {this.procomForm()}
      </div>
    )
  }

  render() {
    if(!this.state.showEditPasoForm){
      return(this.renderPasoContent())
    } else {
      return(this.editPasoForm())
    }
  }

}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Paso);
