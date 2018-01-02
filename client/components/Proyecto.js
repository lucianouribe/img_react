import React from 'react';
import { connect } from 'react-redux';
import { fetchProyectos, editProyecto, deleteProyecto, addPaso } from '../actions/proyectos';
import { addMemoProyect } from '../actions/mymemory';

import Paso from './Paso';
import PasoOptions from './PasoOptions';

import Tutorials from '../Tutorials';


class Proyecto extends React.Component {

  constructor(){
    super();

    this.state = {
      showEdit: false,
      showAdd: false,
      cualTopic: null,
      cualSubTopic: null,
      estilo: 'paragraph',
      highness: '36px',

      files: [],
      preview: false
    }

    this.memorySetter = this.memorySetter.bind(this);

    this.showEditContent = this.showEditContent.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editForm = this.editForm.bind(this);

    this.showPasosDisplay = this.showPasosDisplay.bind(this);
    this.showAddPasoOption = this.showAddPasoOption.bind(this);
    this.pasoSubmit = this.pasoSubmit.bind(this);
    this.pasoOptionsConection = this.pasoOptionsConection.bind(this);

    this.topicChanger = this.topicChanger.bind(this);
    this.setTextareaHeight = this.setTextareaHeight.bind(this);

    // upload image
    this.selectFiles = this.selectFiles.bind(this);
    this.imageRender = this.imageRender.bind(this);


  }

  componentDidMount(){
    $('select').material_select();
    // console.log('soy proyecto');
    let full = 'full'
    this.props.dispatch(fetchProyectos(full));

    // put in setState this: modalize: isMobile
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
    this.setTextareaHeight($('textarea'));
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

  setTextareaHeight(paso){
    paso.each(function(index, item){
      item.style.height = item.scrollHeight+'px';
    });
  }

  // ALL MIGHTY MEMORY
  memorySetter(show){
    // console.log('im memory setter in proyecto')
    let whoAmI = {
      id: this.props.elproyecto.id,
      state: {
        show: show
      }
    }
    // this.props.dispatch(addMemoProyect(whoAmI))
    this.props.memoryBankFunction(whoAmI)
  }

  // PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!
  showEditContent(){
    this.setState({ showEdit: !this.state.showEdit });
  }

  topicChanger(aTopic){
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
      <div className="proyecto-unidad principal">
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
    let name = this.refs.name.value;
    let topic = this.refs.topic.value;
    let subtopic = this.refs.subtopic.value;
    let difficulty = this.refs.difficulty.value;
    let order = 0;

    this.props.dispatch(editProyecto(id, name, topic, subtopic, difficulty, order));
    this.showEditContent();
    this.memorySetter();
  }

  // PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!
  showPasosDisplay(){
    let show = !this.props.doorStatus;
    this.memorySetter(show);
  }

  showAddPasoOption(){
    this.setState({ showAdd: !this.state.showAdd })
  }

  // PASO ADD DISPATCHER
  pasoSubmit(){
    let proyecto = this.props.elproyecto;

    let step = this.refs.step.value;
    let orden;
    let estilo = this.state.estilo;
    let tutoLink;
    let videoLink;
    let imageLink;
    let picture;
    // para upload
    if(this.state.estilo === 'download') {
      imageLink = Math.random().toString(36).replace(/0\./i, '');
      let image = `http://res.cloudinary.com/lucianouribe/image/upload/${imageLink}.jpg`;
      picture = this.refs.picture.files[0];
    }

    this.props.dispatch(addPaso(proyecto, step, orden, estilo, tutoLink, videoLink, imageLink, picture));
    this.setState({showAdd: false})
    let show = true
    this.memorySetter(show);
  }


  // ADD PASO FORM

  // connector for PasoOptions
  pasoOptionsConection(income){
    if(income === 'submit') {
      this.pasoSubmit()
    } else if (income === 'cancel') {
      this.showAddPasoOption()
    } else {
      this.setState({ estilo: income})
    }
  }

  selectFiles(){
    let file = this.refs.picture.files[0];
    let reader = new FileReader();
    let url = reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      this.setState({
          files: [reader.result],
          preview: true
      })
    }

  }


  imageRender(){
    var images = this.state.files.map( (f, x) => {
      return(
        <div key={x} className="paso-second-image-cont">
          <img src={f} className="paso-second-image"/>
        </div>
      )
    });
    return(<div>{images}</div>)
  }

  addPasoFormOptions(){
    if(this.state.estilo === 'download'){
      return(
        <div className="paso-second-form" >
          <span className="paso-second-cont">
            <input type="text" ref="step" className="paso-second-step" placeholder=" >_  picture name"/>
            <input type="file" ref="picture" onChange={this.selectFiles} className="paso-second-picture"/>
            <input type="hidden" value={this.state.files} />
          </span>
          <div className={this.state.preview ? "image-preview" : "hide"}>
            {this.imageRender()}
          </div>
        </div>
      )
    } else {
      return(
        <textarea id="add-paso-textarea" className="paso-content-text" ref='step' placeholder="Add a new step" onChange={()=>this.setTextareaHeight($('#add-paso-textarea'))}></textarea>
      )
    }
  }

  addPasoForm(){
    let whichButtonsShouldIHave = 'add-paso-full-buttons';
    if(this.state.showAdd){
      return(
        <div className="modal-form">
          <form className="paso-container-form" encType="multipart/form-data">
            <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.estilo} conection={this.pasoOptionsConection}/>
            {this.addPasoFormOptions()}
          </form>
        </div>
      )
    }
  }

  pasosDisplay(){
    if(this.props.doorStatus) {
      let showPasos = this.props.pasos;
      let proyecto = this.props.elproyecto;
      let bank = this.props.newbank;
      let index;
      let doorStatus2;
      let typeStatus2;

      if(showPasos.length > 0) {
        return showPasos.map( paso => {

          if(bank !== 'nope'){
            index = bank.findIndex( elem => elem["id"] === paso.id)
            if(index !== -1) {
              doorStatus2 = bank[index].state['showProcom']
              typeStatus2 = bank[index].state['typeOfProcom']
            } else {
              doorStatus2 = false
              typeStatus2 = ''
            }
          }

          return(<Paso key={paso.id} elpaso={paso} proyecto={proyecto} procoms={paso.procoms} memoryBankFunction={this.props.memoryBankFunction} showProcom={doorStatus2} typeOfProcom={typeStatus2}/>);
        })
      } else {
        return(<p className="nothing-flash">Sin Pasos</p>);
      }
    }
  }

  //RENDER DISPLAY
  individualProject(){
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
            <h4 onClick={() => this.showPasosDisplay()}>{proyecto.name}</h4>
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
    let bodyStyle;
    let containerStyle;
    if(this.props.modalize === true && this.props.doorStatus === true) {
      bodyStyle = {
        width: '100vw',
        height: '100vh',
        zDepth: '2500',
        position: 'absolute',
        top: '0',
        left: '0',
        background: '#fff'
      }
      containerStyle = {
        maxHeight: '90vh'
      }
    }
    return (
      <div style={bodyStyle}>
        {this.individualProject()}
        <div className="pasos-container" style={containerStyle}>
          {this.pasosDisplay()}
        </div>
        {this.addPasoForm()}
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {

 }
}

export default connect(mapStateToProps)(Proyecto);
