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
      showEditPasoForm: false,
      estilo: null,
      radialButtonsOne: false,
      radialButtonsTwo: 'hide-buttons',
      typeOfIssue: true
    }

    // PROCOMS
    this.setComment = this.setComment.bind(this);
    this.setProblem = this.setProblem.bind(this);
    this.displayProcoms = this.displayProcoms.bind(this);
    this.addProcom = this.addProcom.bind(this);
    this.procomSubmit = this.procomSubmit.bind(this);
    // PASO CRUDS
    this.showEditPaso = this.showEditPaso.bind(this);
    this.submitEditPaso = this.submitEditPaso.bind(this);
    this.deletePaso = this.deletePaso.bind(this);

  }

  componentDidMount(){
    let estilo = this.props.elpaso.estilo;
    this.setState({estilo});
  }

  componentDidUpdate(){
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
    let comentario = true;
    let problema = false;
    if(this.state.showAddProcomForm){
      return(
        <div className="tarjeta form-edit">
          <form className="add-form-container input-field">
            <div className='btns-estilo'>
              <input type='radio' name="radAnswer" id='comentario' onClick={()=> this.setState({typeOfIssue: comentario})}/>
              <label htmlFor='comentario'>comment</label>
              <input type='radio' name="radAnswer" id='problema' onClick={()=> this.setState({typeOfIssue: problema})}/>
              <label htmlFor='problema'>problem</label>
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
    let type_of_issue = this.state.typeOfIssue;
    let pro_style;
    if(this.state.typeOfIssue) {
      pro_style = 'comentario';
    } else {
      pro_style = 'problema';
    }
    let pro_order = 0;
    let paso = this.props.elpaso;
    this.props.dispatch(addProcom(paso, pro_content, pro_style, pro_order, type_of_issue));
    this.addProcom();
  }


  // PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!

  // EDIT
  showEditPaso(){
    console.log('edit me');
    this.setState({showEditPasoForm: !this.state.showEditPasoForm})
  }

  showRadialButtons(){
    this.setState({radialButtonsOne: !this.state.radialButtonsOne});
    if(this.state.radialButtonsOne){
      this.setState({radialButtonsTwo: 'show-buttons'});
    } else {
      this.setState({radialButtonsTwo: 'hide-buttons'});
    }
  }

  editPasoForm(){
    let paso = this.props.elpaso;
    let fullCode = 'full-code'
    let codigo = 'codigo'
    let terminal = 'terminal'
    let goTo = 'go-to'
    let shortcut = 'shortcut'
    return(
      <div className="">
        <form className="paso-container">
          <textarea className="paso-content" ref='step'>{paso.step}</textarea>
          <span className="botones-container">
            <div className="botones-form">
              <span><i className="fa fa-download" aria-hidden="true" onClick={()=> this.showRadialButtons()}></i></span>
              <span><i className="fa fa-check" aria-hidden="true" onClick={()=> this.submitEditPaso()}></i></span>
              <span><i className="fa fa-ban" aria-hidden="true" onClick={()=> this.showEditPaso()}></i></span>
            </div>
            <div className={`edit-btns-estilo ${this.state.radialButtonsTwo}`}>
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
          </span>
        </form>
      </div>
    )
  }

  submitEditPaso(){
    let proyecto = this.props.proyecto;
    let paso = this.props.elpaso;
    let step;
    if(this.state.estilo === 'terminal') {
      step = `terminal >> ${this.refs.step.value}`
    } else if (this.state.estilo === 'go-to') {
      step = `go to -> ${this.refs.step.value}`
    } else {
      step = this.refs.step.value;
    }
    let orden = 0;
    let estilo = this.state.estilo;
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


  // RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!
  renderPasoContent(){
    let paso = this.props.elpaso;
    let proyecto = this.props.proyecto;
    return(
      <div>
        {this.procomForm()}
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
      </div>
    )
  }

  render() {
    if(!this.state.showEditPasoForm){
      return(this.renderPasoContent())
    } else if(this.state.showEditPasoForm) {
      return(this.editPasoForm())
    }
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Paso);
