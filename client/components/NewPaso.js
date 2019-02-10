import Markdown from 'markdown-to-jsx';
import React from 'react';
import { connect } from 'react-redux';
import PasoOptions from './PasoOptions';
import PasoControl from './PasoControl';
import TextArea from './TextArea';
import { addMemory } from '../actions/mymemory';

class NewPaso extends React.Component {

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
    // EDIT PASO
    this.onChange4Textarea = this.onChange4Textarea.bind(this);
    this.markdownDiv = this.markdownDiv.bind(this);
  }

  componentDidMount(){
    // $('select').formSelect();
  }

  componentDidUpdate(){
    // $('select').formSelect();
    // para que los tab funcionen en el textarea
    const textareas = document.getElementsByTagName('textarea');
    let count = textareas.length;
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
    if(this.state.showEditButtons === 'show-buttons'){
      return(<TextArea the_class='paso-content-text' the_content={paso.step} onChange4Textarea={this.onChange4Textarea} ref='text_area'/>)
    } else {
      return(<div className='paso-content-text' onClick={() => this.setState({showEditButtons: show})} ><Markdown>{paso.step}</Markdown></div>)
    }
  }

  renderPasoContent(){  
    let paso = this.props.paso;
    let proyectoId = this.props.proyectoId;
    return(
      <div>
        <div className="paso-container">
          <div className="paso-content">
            <PasoControl
              proyectoId={proyectoId}
              pasoId={paso.id}
              deletePasoFunc={this.props.deletePasoFunc}
              closeStuff={this.state.closeStuff}
              setCloseStuff={this.setCloseStuff}/>
            {this.markdownDiv()}
          </div>
        </div>
        <div className={this.state.showEditButtons}>
          <PasoOptions
            conection={this.pasoOptionsConection} />
        </div>
      </div>
    )
  }

  render() {return(this.renderPasoContent())}
}

const mapStateToProps = (state) => {
  return {
    maxProcomId: state.maxProcomId
 }
}
export default connect(mapStateToProps)(NewPaso);
