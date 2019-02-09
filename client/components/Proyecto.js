import React from 'react';
import { connect } from 'react-redux';
import update from 'immutability-helper';
import { fetchProyectos, editProyecto, addPaso, editPaso, deletePaso } from '../actions/proyectos';
import { addMemory } from '../actions/mymemory';
import ProyectoEdit from './ProyectoEdit';
import ProyectoShow from './ProyectoShow';
import NewPaso from './NewPaso';
import PasoOptions from './PasoOptions';
import TempPicture from './TempPicture';


class Proyecto extends React.Component {

  constructor(){
    super();

    this.state = {
      showEdit: false,
      showAdd: false,
      estilo: 'paragraph',
      highness: '36px',
      pasos: [],
      files: [],
      preview: false,
      max_id: 0
    }

    this.memorySetter = this.memorySetter.bind(this);
    this.pasosSetter = this.pasosSetter.bind(this);
    this.deletePasoFunc = this.deletePasoFunc.bind(this);

    this.showEditContent = this.showEditContent.bind(this);
    this.saveProyecto = this.saveProyecto.bind(this);
    this.savePasosChanges = this.savePasosChanges.bind(this);

    this.showPasosDisplay = this.showPasosDisplay.bind(this);
    this.showAddPasoOption = this.showAddPasoOption.bind(this);
    this.pasoBuild = this.pasoBuild.bind(this);
    this.pasoOptionsConection = this.pasoOptionsConection.bind(this);

    this.tabFixer = this.tabFixer.bind(this);
    this.setTextareaHeight = this.setTextareaHeight.bind(this);

    // upload image
    this.selectFiles = this.selectFiles.bind(this);
  }

  componentDidMount(){
    $('select').formSelect();
    this.tabFixer(document.getElementsByTagName('textarea'));
    // put in setState this: modalize: isMobile
    let pasos = this.props.proyecto.pasos
    this.setState({
      pasos,
      max_id: this.props.maxPasoId
    });
  }

  componentDidUpdate() {
    $('select').formSelect();
    this.setTextareaHeight($('textarea'));
    this.savePasosChanges();
    this.tabFixer(document.getElementsByTagName('textarea'));
  }

  tabFixer = (textareas) => {
    var count = textareas.length;
    for(var i=0;i<count;i++) {
      textareas[i].onkeydown = (e) => {
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
    let what = 'proyecto';
    let proId = this.props.proyecto.id;
    this.props.dispatch(addMemory({show, what, proId}));
  }

  pasosSetter(incoming) {
    let pasos = this.state.pasos;
    let index = pasos.findIndex( paso => paso.id === incoming.id)
    pasos[index] = incoming;
    this.setState({pasos})
  }

  deletePasoFunc(pasId, proId) {
    let pasos = this.state.pasos;

    if(typeof pasId === 'number' && (pasId % 1) === 0) {
      this.props.dispatch(deletePaso(pasId, proId));
    }
    let index = pasos.findIndex( paso => paso.id === pasId);
    pasos = [...pasos.slice(0, index), ...pasos.slice(index + 1)]
    this.setState({pasos})
  }

  // PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!PROYECTO CRUD!!!!
  showEditContent(){
    this.setState({ showEdit: !this.state.showEdit });
  }

  saveProyecto(proyectoRefs){
    let proyecto = this.props.proyecto;
    let id = proyectoRefs.id.value;
    let name = proyectoRefs.name.value;
    let topic = proyectoRefs.topic.value;
    let subtopic = proyectoRefs.subtopic.value;
    let difficulty = proyectoRefs.difficulty.value;
    let orden = 0;
    this.props.dispatch(editProyecto(id, name, topic, subtopic, difficulty, orden));
    this.savePasosChanges();
    this.showEditContent();
  }

  savePasosChanges(){
    // console.log('savePasosChanges!')
    let proyecto = this.props.proyecto;
    let pasos = this.state.pasos;
    for (var i = 0; i < pasos.length; i++) {
      if(pasos[i].novelty === true) {
        const step = pasos[i].step;
        const orden = pasos[i].orden;
        const estilo = pasos[i].estilo;
        const procom_link = pasos[i].procom_link;
        const videoLink = pasos[i].videoLink;
        const image_link = pasos[i].image_link;
        const picture = pasos[i].picture;
        // if el paso tiene id numerico
        if(typeof pasos[i].id === 'number' && (pasos[i].id % 1) === 0) {
          const pasoId = pasos[i].id;
          const proyectoId = proyecto.id;
          this.props.dispatch(editPaso(proyectoId, pasoId, step, orden, estilo, procom_link, videoLink, image_link ));
        } else {
          this.props.dispatch(addPaso(proyecto, step, orden, estilo, procom_link, videoLink, image_link, picture));
          const updatedPasos = update(pasos, {[i]: {id: {$set: procom_link}, novelty: {$set: false}} })
          this.setState({pasos: updatedPasos});
        }
      }
    }
  }

  dispatcher(){
    let full = 'full';
    this.props.dispatch(fetchProyectos(full))
  }

  // PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!PASO!!!!
  showPasosDisplay(){
    let show = !this.props.doorStatus;
    this.memorySetter(show);
  }

  showAddPasoOption(){
    this.setState({ showAdd: !this.state.showAdd });
  }

  // PASO ADD DISPATCHER
  pasoBuild(){
    let proyecto = this.props.proyecto;
    let pasos = this.state.pasos;
    let id = new Date();
    let step = this.refs.step.value;
    let orden;
    let estilo = this.state.estilo;
    let novelty = true;
    // let procom_link;
    let procom_link = this.state.max_id + 1;
    let videoLink;
    let image_link;
    let picture;
    let procoms = [];
    // para upload
    if(this.state.estilo === 'download') {
      image_link = Math.random().toString(36).replace(/0\./i, '');
      let image = `http://res.cloudinary.com/lucianouribe/image/upload/${image_link}.jpg`;
      picture = this.refs.picture.files[0];
    } else {
      image_link = 'undefined';
    }
    let new_paso = {id, step, orden, estilo, procom_link, videoLink, image_link, picture, procoms, novelty};
    pasos = [...pasos, new_paso]
    this.setState({pasos: pasos, showAdd: false, max_id: this.state.max_id + 1});
    // let show = true;
    // this.memorySetter(show);
  }

  // ADD PASO FORM
  // connector for PasoOptions
  pasoOptionsConection(income){
    if(income === 'submit') {
      this.pasoBuild();
    } else if (income === 'cancel') {
      this.showAddPasoOption()
    } else {
      this.setState({ estilo: income})
    }
  }

  selectFiles(){
    let file = this.refs.picture.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = (e) => {
      this.setState({
          files: [reader.result],
          preview: true
      })
    }

  }
  // turn into component or mix it with the existing one
  addPasoFormOptions(){
    if(this.state.estilo === 'download'){
      return(
        <div className="paso-second-form" >
          <span className="paso-second-cont">
            <input type="text" ref="step" className="paso-second-step" placeholder=" >_  picture name"/>
            <input type="file" ref="picture" onChange={this.selectFiles} className="paso-second-picture"/>
            <input type="hidden" value={this.state.files} />
          </span>
          <TempPicture preview={this.state.preview} files={this.state.files}/>
        </div>
      )
    } else {
      return(
        <textarea id="add-paso-textarea" className="paso-content-text" ref='step' autoFocus placeholder="Add a new step" onChange={()=>this.setTextareaHeight($('#add-paso-textarea'))}></textarea>
      )
    }
  }

  addPasoForm(){
    let whichButtonsShouldIHave = 'add-paso-full-buttons';
    if(this.state.showAdd){
      return(<div>
          <form className="paso-container-form" encType="multipart/form-data">
            {this.addPasoFormOptions()}
          </form>
          <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.estilo} conection={this.pasoOptionsConection}/>
        </div>
      )
    }
  }

  pasosDisplay(){
    if(this.props.doorStatus) {
      let showPasos = this.state.pasos;
      let proyecto = this.props.proyecto;
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

          return(
            <NewPaso key={paso.id}
              paso={paso}
              proyectoId={proyecto.id}
              showProcom={doorStatus2}
              typeOfProcom={typeStatus2}
              pasosSetter={this.pasosSetter}
              deletePasoFunc={this.deletePasoFunc} />
            );
        })
      } else {
        return(<p className="nothing-flash">Sin Pasos</p>);
      }
    }
  }

  //RENDER DISPLAY
  individualProject(){
    if(this.state.showEdit) {
      return(
        <ProyectoEdit
          proyecto={this.props.proyecto}
          saveProyecto={this.saveProyecto}
          showEditContent={this.showEditContent} />
      )
    } else {
      let proyecto = this.props.proyecto;
      return (
        <ProyectoShow
          proyecto={this.props.proyecto}
          showPasosDisplay={this.showPasosDisplay}
          showAddPasoOption={this.showAddPasoOption}
          showEditContent={this.showEditContent} />
      )
    }
  }

  render(){
    let proyectoFull;
    if(this.props.modalize === true && this.props.doorStatus === true) {
      proyectoFull = "proyecto-full"
    }
    let containerStyle;
    if(this.state.showAdd){
      containerStyle = { maxHeight: 'calc(100vh - 8rem)' }
    } else {
      containerStyle = { maxHeight: 'calc(100vh - 5rem)' }
    }

    return (
      <div className={proyectoFull}>
        {this.individualProject()}
        <div className="pasos-container" style={containerStyle}>
          {this.pasosDisplay()}
          {this.addPasoForm()}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    mymemory: state.mymemory,
    maxPasoId: state.maxPasoId
 }
}

export default connect(mapStateToProps)(Proyecto);
