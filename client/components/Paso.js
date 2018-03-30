import React from 'react';
import { connect } from 'react-redux';

import Procom from './Procom';
import PasoOptions from './PasoOptions';

import { addProcom, editProcom, deleteProcom } from '../actions/proyectos';
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
      procoms: []
    }

    this.memorySetter = this.memorySetter.bind(this);
    this.procomSetter = this.procomSetter.bind(this);
    // PROCOMS
    this.showProcomsFu = this.showProcomsFu.bind(this);
    this.displayProcoms = this.displayProcoms.bind(this);
    this.addProcomSetter = this.addProcomSetter.bind(this);
    this.procomBuild = this.procomBuild.bind(this);
    this.deleteProcomFunc = this.deleteProcomFunc.bind(this);
    // PASO CRUDS
    this.submitEditPaso = this.submitEditPaso.bind(this);
    // this.deletePaso = this.deletePaso.bind(this);
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
    let procoms = this.props.elpaso.procoms;
    this.setState({estilo, procoms})
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
      proyectoId: this.props.proyectoId,
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
    // console.log('showProcomsFu');
    // console.log(`entra how: ${how}`)
    // console.log(`this is show: ${show}`)
    this.memorySetter(show, how);
  }

  displayProcoms(){
    let paso = this.props.elpaso;
    let showProcoms = this.state.procoms;
    let proyectoId = this.props.proyectoId;
    let numeracionComment = 0;
    let numeracionProblems = 0;

    let comments = showProcoms.filter( comme => { if(comme.type_of_issue === 'comment') return comme })

    let problems = showProcoms.filter( proble => { if(proble.type_of_issue === 'problem') return proble })

    if(this.props.showProcom && this.props.typeOfProcom === 'comment') {
      // debugger;
      if(showProcoms.length > 0) {
        return comments.map( procom => {
          numeracionComment++
          return(
            <Procom key={procom.id}
              procom={procom}
              pasoId={paso.id}
              proyectoId={proyectoId}
              numeracion={numeracionComment}
              procomSetter={this.procomSetter}
              deleteProcomFunc={this.deleteProcomFunc} />
            );
        })
      } else {
        return (<p className="nothing-flash">no comments</p>)
      }
    } else if (this.props.showProcom && this.props.typeOfProcom === 'problem') {
      if(showProcoms.length > 0) {
        return problems.map( procom => {
          numeracionProblems++
          return(
            <Procom key={procom.id}
              procom={procom}
              paso={paso.id}
              proyectoId={proyectoId}
              numeracion={numeracionProblems}
              procomSetter={this.procomSetter}
              deleteProcomFunc={this.deleteProcomFunc} />
            );
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
      this.procomBuild()
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
  procomSetter(incoming){
    let hello = this.state.procoms;
    let index = hello.findIndex( procom => procom.id === incoming.id);
    hello[index] = incoming;
    this.setState({procoms: hello})
  }

  procomBuild(){
    let procoms = this.state.procoms;

    let id = new Date();
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
    let novelty = true;


    let new_procom = {id, pro_content, type_of_issue, pro_style, pro_order, novelty};
    procoms = [...procoms, new_procom]
    this.setState({procoms: procoms});


    // this.props.dispatch(addProcom(proId, pasId, pro_content, pro_style, pro_order, type_of_issue));
    this.addProcomSetter();
  }

  procomSubmit(){
    let proId = this.props.proyectoId;
    let pasId = this.props.elpaso.id;
    let procoms = this.state.procoms;
    for (var i = 0; i < procoms.length; i++) {
      // console.log(pasos[i])
      if(procoms[i].novelty === true) {
        const pro_content = procoms[i].pro_content;
        const type_of_issue = procoms[i].type_of_issue;
        const pro_style = procoms[i].pro_style;
        const pro_order = procoms[i].pro_order;
        // if el paso tiene id numerico
        if(typeof procoms[i].id === 'number' && (procoms[i].id % 1) === 0) {
          const procomId = procoms[i].id;
          // const proyectoId = proyecto.id;
          // this.props.dispatch(editPaso(proyectoId, pasoId, step, orden, estilo, procomLink, videoLink, image_link ));
          this.props.dispatch(editProcom(proId, pasId, procomId, pro_content, pro_style, pro_order, type_of_issue));
        } else {
          this.props.dispatch(addProcom(proId, pasId, pro_content, pro_style, pro_order, type_of_issue));
          // this.props.dispatch(addPaso(proyecto, step, orden, estilo, procomLink, videoLink, image_link, picture));
        }
      }
    }


    // this.props.dispatch(addProcom(proId, pasId, pro_content, pro_style, pro_order, type_of_issue));
  }

  // DELETE PROCOMS
  deleteProcomFunc(procomId, pasoId, proyectoId) {
    let procoms = this.state.procoms;

    if(typeof procomId === 'number' && (procomId % 1) === 0) {
      this.props.dispatch(deleteProcom(procomId, pasoId, proyectoId));
    }

    let index = procoms.findIndex( procom => procom.id === procomId);
    procoms = [...procoms.slice(0, index), ...procoms.slice(index + 1)]
    this.setState({procoms})
  }


  // PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!PASO_CRUDS!!!!

  // EDIT PASO

  submitEditPaso(){
    // console.log('submiting edit paso')
    let proyectoId = this.props.proyectoId;
    let id = this.props.elpaso.id;
    let step = this.refs.step.value;
    let orden = 0;
    let estilo = this.state.estilo;
    let procomLink;
    let videoLink;
    let imageLink;
    let procoms = this.props.elpaso.procoms;
    let novelty = true;
    // this.props.dispatch(editPaso(proyectoId, paso.id, step, orden, estilo, procomLink, videoLink, imageLink));
    let outcome = { proyectoId, id, step, orden, estilo, procomLink, videoLink, imageLink, procoms, novelty }
    this.setState({showEditButtons: 'hide-buttons'})
    this.props.pasosSetter(outcome);
  }

  // // DELETE PASO
  // deletePaso(pasId, proyectoId){
  //   // console.log('delete me');
  //   this.props.dispatch(deletePaso(pasId, proyectoId));
  // }

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
      if(paso.image_link === 'undefined') {
        return(<img className="image-link" src={paso.step}/>)
      } else {
        return(<img className="image-link" src={`http://res.cloudinary.com/lucianouribe/image/upload/${paso.image_link}.jpg`}/>)
      }
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
    let proyectoId = this.props.proyectoId;

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
              <i className="fa fa-trash btn-icon" aria-hidden="true" onClick={() => this.props.deletePasoFunc(paso.id, proyectoId)}></i>
              <i className="fa fa-adn btn-icon" aria-hidden="true" onClick={() => this.procomSubmit()}></i>
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
