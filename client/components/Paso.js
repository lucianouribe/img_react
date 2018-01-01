import React from 'react';
import { connect } from 'react-redux';

import Procom from './Procom';
import PasoOptions from './PasoOptions';

import { editPaso, deletePaso, addProcom } from '../actions/proyectos';
import { addMemoPaso } from '../actions/mymemory';

import { createMarkup } from '../helpers';


class Paso extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      //procoms (child)
      showAddProcomForm: false, // true: to show the form
      proStyle: 'comment', // can be comment, example, problem
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
    // BOTONES
    this.pasoOptionsConection = this.pasoOptionsConection.bind(this);
    this.procomOptionsConection = this.procomOptionsConection.bind(this);
    // TEXTARE HEIGHT
    this.setTextareaHeight = this.setTextareaHeight.bind(this);
    this.onChange4Textarea = this.onChange4Textarea.bind(this);
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
    let comments = showProcoms.filter( comme => { if(comme.type_of_issue === 'comment') return comme })
    console.log(showProcoms)
    let problems = showProcoms.filter( proble => { if(proble.type_of_issue === 'problem') return proble })

    if(this.props.showProcom && this.props.typeOfProcom === 'comment') {
      // debugger;
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

  // procom connection with PasoOptions component
  procomOptionsConection(income){
    if(income === 'submit') {
      this.procomSubmit()
    } else if (income === 'cancel') {
      this.addProcomSetter() //check
    } else {
      this.setState({ proStyle: income}) //check
    }
  }

  //PROCOM FORM
  procomForm(){
    let whichButtonsShouldIHave = 'add-procom-full-buttons'
    if(this.state.showAddProcomForm){
      return(
        <div className="modal-form">
          <form className="paso-container-form">
            <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.proStyle} conection={this.procomOptionsConection} />
            <textarea id="add-procom-textarea" className="paso-content-text" ref='pro_content' placeholder="Add Comment, example or Problem" onChange={()=>this.setTextareaHeight($('#add-procom-textarea'))}></textarea>
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
    let type_of_issue;
    let pro_style;
    if(this.state.proStyle === 'problema') {
      pro_style = this.state.proStyle;
      type_of_issue = 'problem';
    } else if (this.state.proStyle === 'ejemplo'){
      pro_style = this.state.proStyle;
      type_of_issue = "comment";
    } else {
      pro_style = this.state.proStyle;
      type_of_issue = 'comment';
    }
    let pro_order = 0;
    this.props.dispatch(addProcom(proId, pasId, pro_content, pro_style, pro_order, type_of_issue));
    this.addProcomSetter();
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

  // connector for PasoOptions
  pasoOptionsConection(income){
    if(income === 'submit') {
      this.submitEditPaso()
    } else if (income === 'cancel') {
      this.setState({showEditButtons: 'hide-buttons'})
    } else {
      this.setState({ estilo: income})
    }
  }

  // extra content can be a component
  extraContent(){
    let paso = this.props.elpaso;
    if(paso.estilo === 'terminal') {
      return(<i className="fa fa-terminal paso-type" aria-hidden="true"></i>)
    } else if (paso.estilo === 'go-to') {
      return(<i className="fa fa-long-arrow-right paso-type" aria-hidden="true"></i>)
    } else if (paso.estilo === 'link-tuto') {
      return(<a className="fa fa-link paso-type" aria-hidden="true" href={paso.step} target='blank'></a>)
    } else if (paso.estilo === 'link-video') {
      return(<iframe className="video-link" width="560" height="315" src={`https://www.youtube.com/embed/${paso.step}?rel=0`} allowFullScreen></iframe>)
    } else if (paso.estilo === 'link-image') {
      return(<img className="image-link" src={paso.step}/>)
    } else {
      return(<p className="paso-type"></p>)
    }
  }

  onChange4Textarea(viewType){
    this.setState({showEditButtons: viewType});
    this.setTextareaHeight($('#edit-paso-textarea'));
  }

  renderPasoContent(){
    let paso = this.props.elpaso;
    let proyecto = this.props.proyecto;

    let show = 'show-buttons';
    // let hide = 'hide-buttons';
    let comentario = 'comment';
    let problema = 'problem';
    let ejemplo = 'example';

    let inlineStyle = {height: '18px'};
    let emergency;
    if(this.state.showEditButtons === 'show-buttons') {
      emergency = {border: '2px solid rgba(255,0,0,1)', borderRadius: '1rem'};
    }
    let whichButtonsShouldIHave = 'add-paso-full-buttons';
    return(
      <div>
        {this.procomForm()}
        <div className={`paso-container ${paso.estilo}`} style={emergency}>
          {this.extraContent()}
          <div className="paso-content">
            <div className={this.state.showEditButtons}>
              <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.estilo} conection={this.pasoOptionsConection}/>
            </div>
            <textarea id="edit-paso-textarea" className="paso-content-text" style={inlineStyle} ref='step' onChange={()=> this.onChange4Textarea(show)}>{paso.step}</textarea>
          </div>
          <span className="botones-container">
            <span className='botones'>
              <i className="fa fa-plus-circle btn-icon" aria-hidden="true" onClick={() => this.addProcomSetter()}></i>
              <i className="fa fa-comments btn-icon" aria-hidden="true" onClick={() => this.showProcomsFu(comentario)}></i>
              <i className="fa fa-exclamation-triangle btn-icon" aria-hidden="true" onClick={() => this.showProcomsFu(problema)}></i>
              <i className="fa fa-trash btn-icon" aria-hidden="true" onClick={() => this.deletePaso(paso.id, proyecto)}></i>
            </span>
          </span>
        </div>
        <div className="procoms-container">
          {this.displayProcoms()}
        </div>
      </div>
    )
  }

  render() {return(this.renderPasoContent())}
}

const mapStateToProps = (state) => {return {}}
export default connect(mapStateToProps)(Paso);
