import React from 'react';
import { connect } from 'react-redux';

import Procom from './Procom';

import { editPaso, deletePaso, addProcom } from '../actions/proyectos';
import { addMemoPaso } from '../actions/mymemory';

import { createMarkup } from '../helpers';


class Paso extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      //procoms (child)
      showAddProcomForm: false, // true: to show the form
      typeOfIssue: 'comment', // can be comment, example, problem
      //pasos (parent)
      estilo: 'paragraph', // standard estilo
      showEditButtons: 'hide-buttons', // show-buttons: to show the form
    }
    this.memorySetter = this.memorySetter.bind(this);
    // PROCOMS
    this.showProcomsFu = this.showProcomsFu.bind(this);
    this.displayProcoms = this.displayProcoms.bind(this);
    this.addProcomSetter = this.addProcomSetter.bind(this);
    this.procomSubmit = this.procomSubmit.bind(this);
    // PASO CRUDS
    this.submitEditPaso = this.submitEditPaso.bind(this);
    this.deletePaso = this.deletePaso.bind(this);

    this.setTextareaHeight = this.setTextareaHeight.bind(this);
  }

  componentDidMount(){
    $('select').material_select();
    // para que textareas se ajusten a las medidas de su contenido
    this.setTextareaHeight($('textarea'));
    let estilo = this.props.elpaso.estilo;
    this.setState({estilo})
  }

  componentDidUpdate(){
    $('select').material_select();
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

  // ALL MIGHTY MEMORY
  memorySetter(show, how){
    // console.log('im memory setter in paso')
    let whoAmI = {
      proyectoId: this.props.proyecto.id,
      id: this.props.elpaso.id,
      state: {
        showProcom: show,
        typeOfProcom: how
      }
    }

    this.props.memoryBankFunction(whoAmI)
  }

  // VARIABLE HIGHNESS OF THE PASO CONTENT TEXTAREA
  // check if it can be a helper
  setTextareaHeight(paso){
    paso.each(function(index, item){
      item.style.height = item.scrollHeight+'px';
    });
  }


  // PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!PROCOMS!!!!
  showProcomsFu(how){
    let show = !this.props.showProcom
    this.memorySetter(show, how);
  }

  displayProcoms(){
    let showProcoms = this.props.procoms;
    let paso = this.props.elpaso;
    let proyecto = this.props.proyecto;
    let numeracionComment = 0;
    let numeracionProblems = 0;

    let comments = this.props.procoms.filter( comme => { if(comme.type_of_issue === 'comment') return comme })

    let problems = this.props.procoms.filter( proble => { if(proble.type_of_issue === 'problem') return proble })

    // add example

    if(this.props.showProcom && (this.props.typeOfProcom === 'comment' || this.props.typeOfProcom === 'example')) {
      if(showProcoms.length > 0) {
        return comments.map( procom => {
          numeracionComment++
          return(<Procom key={procom.id} procom={procom} paso={paso} proyecto={proyecto} numeracion={numeracionComment}/>);
        })
      } else {
        return (<p className="nothing-flash">no comments</p>)
      }
    } else if (this.props.showProcom && this.props.typeOfProcom === 'problem') {
      if(showProcoms.length > 0) {
        return problems.map( procom => {
          numeracionProblems++
          return(<Procom key={procom.id} procom={procom} paso={paso} proyecto={proyecto} numeracion={numeracionProblems}/>);
        })
      } else {
        return (<p className="nothing-flash">no problems</p>)
      }
    }
  }

  // ADD PROCOM STARTER
  addProcomSetter(){
    // console.log('add procom')
    this.setState({showAddProcomForm: !this.state.showAddProcomForm})
  }

  //PROCOM FORM
  procomForm(){
    let ejemplo = 'example';
    let comentario = 'comment';
    let problema = 'problem';
    if(this.state.showAddProcomForm){
      return(
        <div className="">
          <form className="paso-container">
            <textarea className="paso-content" ref='pro_content' placeholder="Add Comment or Problem"></textarea>
            <span className="botones-container">
              <div className="botones-form">
                <span><i className="fa fa-check" aria-hidden="true" onClick={()=> this.procomSubmit()}></i></span>
                <span><i className="fa fa-ban" aria-hidden="true" onClick={()=> this.addProcomSetter()}></i></span>
              </div>
              <div className='edit-btns-estilo'>
                <input type='radio' name="radAnswer" id='ejemplo' onClick={()=> this.setState({typeOfIssue: ejemplo})}/>
                <label htmlFor='ejemplo'><i className="fa fa-eye btn-icon" aria-hidden="true"></i></label>
                <input type='radio' name="radAnswer" id='comentario' onClick={()=> this.setState({typeOfIssue: comentario})}/>
                <label htmlFor='comentario'><i className="fa fa-comments btn-icon" aria-hidden="true"></i></label>
                <input type='radio' name="radAnswer" id='problema' onClick={()=> this.setState({typeOfIssue: problema})}/>
                <label htmlFor='comentario'><i className="fa fa-exclamation-triangle btn-icon" aria-hidden="true"></i></label>
              </div>
            </span>
          </form>
        </div>
      )
    }
  }
  // PROCOM ADD DISPATCHER
  procomSubmit(){
    let pasId = this.props.elpaso.id;
    let proId = this.props.proyecto.id;

    let pro_content = this.refs.pro_content.value;
    let type_of_issue = this.state.typeOfIssue;
    let pro_style;
    if(this.state.typeOfIssue === 'problem') {
      pro_style = 'problema';
    } else if (this.state.typeOfIssue === 'example'){
      pro_style = 'ejemplo';
    } else {
      pro_style = "comentario"
    }
    let pro_order = 0;
    this.props.dispatch(addProcom(proId, pasId, pro_content, pro_style, pro_order, type_of_issue));
    this.addProcomSetter();
    // if(type_of_issue === true){
    //   this.setComment()
    // } else {
    //   this.setProblem()
    // }
  }


  // PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!

  // EDIT PASO

  submitEditPaso(){
    // console.log('submiting edit paso')
    let proyecto = this.props.proyecto;
    let paso = this.props.elpaso;
    let step = this.refs.step.value;
    let orden = 0;
    let estilo = this.state.estilo;
    let tutoLink = '';
    let videoLink = '';
    let imageLink = '';
    this.props.dispatch(editPaso(proyecto, paso.id, step, orden, estilo, tutoLink, videoLink, imageLink));
    this.setState({showEditButtons: 'hide-buttons'})
  }

  // DELETE PASO
  deletePaso(pasId, proyecto){
    // console.log('delete me');
    this.props.dispatch(deletePaso(pasId, proyecto));
  }

  // RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!
  // this should be an independent component
  optionButtons(){
    let hide = 'hide-buttons'

    let goTo = 'go-to'
    let terminal = 'terminal'
    let codigo = 'codigo'
    let paragraph = 'paragraph'
    let linkTuto = 'linkTuto'
    let linkVideo = 'linkVideo'
    let linkImage = 'linkImage'

    let goToS;
    let terminalS;
    let codigoS;
    let paragraphS;
    let linkTutoS;
    let linkVideoS;
    let linkImageS;

    let elected = {color: 'red', fontSize: '1.4rem'}

    switch (this.state.estilo) {
      case 'go-to':
        goToS = elected
        break;
      case 'terminal':
        terminalS = elected
        break;
      case 'codigo':
        codigoS = elected
        break;
      case 'paragraph':
        paragraphS = elected
        break;
      case 'linkTuto':
        linkTutoS = elected
        break;
      case 'linkVideo':
        linkVideoS = elected
        break;
      case 'linkImage':
        linkImageS = elected
        break;
      default:

    }

    return(
      <span className={`texta-botones-container ${this.state.showEditButtons}`}>
        <div className="botones-form">
          <span><i className="fa fa-check listo" aria-hidden="true" onClick={()=> this.submitEditPaso()}></i></span>

          <i className="fa fa-long-arrow-right" style={goToS} aria-hidden="true" onClick={()=> this.setState({ estilo: goTo})}></i>
          <i className="fa fa-terminal" style={terminalS} aria-hidden="true" onClick={()=> this.setState({ estilo: terminal})}></i>
          <i className="fa fa-code" style={codigoS} aria-hidden="true" onClick={()=> this.setState({ estilo: codigo})}></i>
          <i className="fa fa-paragraph" style={paragraphS} aria-hidden="true" onClick={()=> this.setState({ estilo: paragraph})}></i>
          <i className="fa fa-link" style={linkTutoS} aria-hidden="true" onClick={()=> this.setState({ estilo: linkTuto})}></i>
          <i className="fa fa-video-camera" style={linkVideoS} aria-hidden="true" onClick={()=> this.setState({ estilo: linkVideo})}></i>
          <i className="fa fa-picture-o" style={linkImageS} aria-hidden="true" onClick={()=> this.setState({ estilo: linkImage})}></i>

          <span><i className="fa fa-ban pues-no" aria-hidden="true" onClick={()=> this.setState({showEditButtons: hide})}></i></span>
        </div>
      </span>
    )
  }

  extraContent(){
    let paso = this.props.elpaso;
    if(paso.estilo === 'terminal') {
      return(<i className="fa fa-terminal paso-type" aria-hidden="true"></i>)
    } else if (paso.estilo === 'go-to') {
      return(<i className="fa fa-long-arrow-right paso-type" aria-hidden="true"></i>)
    } else {
      return(<p className="paso-type"></p>)
    }
  }

  renderPasoContent(){
    let paso = this.props.elpaso;
    let proyecto = this.props.proyecto;

    let show = 'show-buttons';
    let hide = 'hide-buttons';
    let comentario = 'comment';
    let problema = 'problem';
    let ejemplo = 'example';

    let inlineStyle = {height: '18px'};
    let emergency;
    if(this.state.showEditButtons === 'show-buttons') {
      emergency = {border: '2px solid rgba(255,0,0,1)', borderRadius: '1rem'};
    }
    return(
      <div>
        {this.procomForm()}
        <div className={`paso-container ${paso.estilo}`} style={emergency}>
          {this.extraContent()}
          <div className="paso-content">
            {this.optionButtons()}
            <textarea className="paso-content-text" style={inlineStyle} ref='step' onChange={()=> this.setState({showEditButtons: show})}>{paso.step}</textarea>
          </div>
          <span className="botones-container">
            <span className='botones'>
              <i className="fa fa-plus-circle btn-icon" aria-hidden="true" onClick={() => this.addProcomSetter()}></i>
              <i className="fa fa-comments btn-icon" aria-hidden="true" onClick={() => this.showProcomsFu(comentario)}></i>
              <i className="fa fa-exclamation-triangle btn-icon" aria-hidden="true" onClick={() => this.showProcomsFu(problema)}></i>
              <i className="fa fa-trash" aria-hidden="true" onClick={() => this.deletePaso(paso.id, proyecto)}></i>
            </span>
          </span>
        </div>
        {this.displayProcoms()}
      </div>
    )
  }

  render() {
    return(this.renderPasoContent())
  }

}

const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Paso);
