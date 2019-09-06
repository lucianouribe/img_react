import Markdown from 'markdown-to-jsx';
import React from 'react';
import { connect } from 'react-redux';
import PasoOptions from './PasoOptions';
import PasoControl from './PasoControl';
import TextArea from './TextArea';
import { addMemory } from '../actions/mymemory';
import { setProcomClass } from '../helpers';

class Paso extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showEditButtons: 'hide-buttons', // show-buttons: to show the form
      imgFiles: [],
      closeStuff: false
    }

    this.memorySetter = this.memorySetter.bind(this);
    // PASO CRUDS
    this.submitEditPaso = this.submitEditPaso.bind(this);
    // BOTONES
    this.pasoOptionsConection = this.pasoOptionsConection.bind(this);
    this.displayPasoControl = this.displayPasoControl.bind(this);
    this.displayPasoOptions = this.displayPasoOptions.bind(this);
    // EDIT PASO
    this.onChange4Textarea = this.onChange4Textarea.bind(this);
    this.markdownDiv = this.markdownDiv.bind(this);
  }

  componentDidMount(){
    setProcomClass()
  }

  componentDidUpdate(){
    setProcomClass()
  }

  // ALL MIGHTY MEMORY
  memorySetter(show, how){
    // console.log('im memory setter in paso')
    let pasId = this.props.paso.id;
    let proId = this.props.proyectoId;
    this.props.dispatch(addMemory({proId, pasId, show, how}));
  }

  // EDIT PASO
  // this should be a component
  submitEditPaso(){
    // console.log('submiting edit paso')
    let proyectoId = this.props.proyectoId;
    let id = this.props.paso.id;
    let step = this.refs.text_area.refs.text_content.value;
    let orden = 0;
    let estilo;
    let procom_link;
    let videoLink;
    let imageLink;
    let procoms = this.props.paso.procoms;
    let novelty = true;
    let outcome = { proyectoId, id, step, orden, estilo, procom_link, videoLink, imageLink, procoms, novelty }
    this.setState({showEditButtons: 'hide-buttons'})
    this.props.pasosSetter(outcome);
  }

  // RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!RENDER!!!!
  // connector for PasoOptions
  pasoOptionsConection(income){
    if(income === 'submit') {
      this.submitEditPaso()
    } else if (income === 'cancel') {
      this.setState({showEditButtons: 'hide-buttons'})
    }
  }

  onChange4Textarea(viewType){
    this.setState({showEditButtons: viewType});
  }

  markdownDiv(){
    let paso = this.props.paso;
    let show = 'show-buttons';
    if(this.state.showEditButtons === 'show-buttons' && this.props.user.role === 'admin'){
      return(<TextArea the_class='paso-content-text' the_content={paso.step} onChange4Textarea={this.onChange4Textarea} ref='text_area'/>)
    } else {
      return(<div className='paso-content-text' onDoubleClick={() => this.setState({showEditButtons: show})} ><Markdown>{paso.step}</Markdown></div>)
    }
  }

  displayPasoControl(){
    let paso = this.props.paso;
    let proyectoId = this.props.proyectoId;
    if(this.props.user.role === 'admin'){
      return (
        <PasoControl
        proyectoId={proyectoId}
        pasoId={paso.id}
        deletePasoFunc={this.props.deletePasoFunc}
        closeStuff={this.state.closeStuff}
        setCloseStuff={this.setCloseStuff}/>
      )
    }
  }

  displayPasoOptions(){
    if(this.props.user.role === 'admin'){
      return(<PasoOptions conection={this.pasoOptionsConection} />)
    }
  }

  renderPasoContent(){  
    return(
      <div>
        <div className="paso-container">
          <div className="paso-content">
            {this.displayPasoControl()}
            {this.markdownDiv()}
          </div>
        </div>
        <div className={this.state.showEditButtons}>
          {this.displayPasoOptions()}
        </div>
      </div>
    )
  }

  render() {return(this.renderPasoContent())}
}

const mapStateToProps = (state) => {
  return {
    maxProcomId: state.maxProcomId,
    user: state.user
 }
}
export default connect(mapStateToProps)(Paso);
