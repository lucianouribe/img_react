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
      showAddProcomForm: false,
      showEditPasoForm: false,
      typeOfIssue: 'comment',
      //pasos (parent)
      estilo: 'paragraph',
      showEditButtons: 'hide-buttons',
      radialButtons: 'hide-buttons',
    }
    this.memorySetter = this.memorySetter.bind(this);
    // PROCOMS
    this.showProcomsFu = this.showProcomsFu.bind(this);
    this.displayProcoms = this.displayProcoms.bind(this);
    this.addProcomSetter = this.addProcomSetter.bind(this);
    this.procomSubmit = this.procomSubmit.bind(this);
    // PASO CRUDS
    this.showEditPaso = this.showEditPaso.bind(this);
    this.submitEditPaso = this.submitEditPaso.bind(this);
    this.deletePaso = this.deletePaso.bind(this);

    this.setTextareaHeight = this.setTextareaHeight.bind(this);
  }

  componentDidMount(){
    // para que textareas se ajusten a las medidas de su contenido
    this.setTextareaHeight($('textarea'));
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

  // OPTIONS FOR EDIT
  showEditPaso(){
    this.setState({showEditPasoForm: !this.state.showEditPasoForm})
  }

  showRadialButtons(){
    this.setState({radialButtons: 'show-buttons'});
  }

  submitEditPaso(){
    let proyecto = this.props.proyecto;
    let paso = this.props.elpaso;
    let step = this.refs.step.value;

    let orden = 0;
    let tutoLink = '';
    let videoLink = '';
    let imageLink = '';
    let estilo = this.state.estilo;
    this.props.dispatch(editPaso(proyecto, paso.id, step, orden, estilo, tutoLink, videoLink, imageLink));
    this.setState({showEditButtons: 'hide-buttons', radialButtons: 'hide-buttons'})
  }

  //DELETE
  deletePaso(pasId, proyecto){
    console.log('delete me');
    this.props.dispatch(deletePaso(pasId, proyecto));
    let command = true
    this.props.showPasosFu(command)
  }


  // RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!
  optionButtons(){
    let hide = 'hide-buttons'
    return(
      <div className={`botones-form ${this.state.showEditButtons}`}>
        <span><i className="fa fa-download" aria-hidden="true" onClick={()=> this.showRadialButtons()}></i></span>
        <span><i className="fa fa-check" aria-hidden="true" onClick={()=> this.submitEditPaso()}></i></span>
        <span><i className="fa fa-ban" aria-hidden="true" onClick={()=> this.setState({showEditButtons: hide, radialButtons: hide})}></i></span>
      </div>
    )
  }

  radialButtons(){
    let goTo = 'go-to'
    let terminal = 'terminal'
    let codigo = 'codigo'
    let paragraph = 'paragraph'
    let linkTuto = 'linkTuto'
    let linkVideo = 'linkVideo'
    let linkImage = 'linkImage'
    return(
      <div className={`edit-btns-estilo ${this.state.radialButtons}`}>
        <input type='radio' name="radAnswer" id='go-to' onClick={()=> this.setState({estilo: goTo})}/>
        <label htmlFor='go-to'><i className="fa fa-long-arrow-right" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='terminal' onClick={()=> this.setState({estilo: terminal})}/>
        <label htmlFor='terminal'><i className="fa fa-terminal" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='codigo' onClick={()=> this.setState({estilo: codigo})}/>
        <label htmlFor='codigo'><i className="fa fa-code" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='paragraph' onClick={()=> this.setState({estilo: paragraph})}/>
        <label htmlFor='paragraph'><i className="fa fa-paragraph" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='link-tuto' onClick={()=> this.setState({estilo: linkTuto})}/>
        <label htmlFor='link-tuto'><i className="fa fa-link" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='link-video' onClick={()=> this.setState({estilo: linkVideo})}/>
        <label htmlFor='link-video'><i className="fa fa-video-camera" aria-hidden="true"></i></label>
        <input type='radio' name="radAnswer" id='link-image' onClick={()=> this.setState({estilo: linkImage})}/>
        <label htmlFor='link-image'><i className="fa fa-picture-o" aria-hidden="true"></i></label>
      </div>
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

    return(
      <div>
        {this.procomForm()}
        <div className={`paso-container ${paso.estilo}`}>
          {this.extraContent()}
          <textarea className="paso-content" ref='step' onChange={()=> this.setState({showEditButtons: show})}>{paso.step}</textarea>
          <span className="botones-container">
            <span className='botones'>
              <i className="fa fa-plus-circle btn-icon" aria-hidden="true" onClick={() => this.addProcomSetter()}></i>
              <i className="fa fa-comments btn-icon" aria-hidden="true" onClick={() => this.showProcomsFu(comentario)}></i>
              <i className="fa fa-exclamation-triangle btn-icon" aria-hidden="true" onClick={() => this.showProcomsFu(problema)}></i>
              <i className="fa fa-trash" aria-hidden="true" onClick={() => this.deletePaso(paso.id, proyecto)}></i>
            </span>
            {this.optionButtons()}
            {this.radialButtons()}
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
