import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers';
import { editProcom, deleteProcom } from '../actions/proyectos';
import PasoOptions from './PasoOptions';

class Procom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeOfIssue: 'comment',
      estilo: 'comment',
      showEditButtons: 'hide-buttons',
    }

    this.submitEditProcom = this.submitEditProcom.bind(this);
    this.deleteProcom = this.deleteProcom.bind(this);
    this.setTextareaHeight = this.setTextareaHeight.bind(this);
    this.onChange4Textarea = this.onChange4Textarea.bind(this);
    this.procomOptionsConection = this.procomOptionsConection.bind(this);
  }

  componentDidMount(){
    this.setTextareaHeight($('textarea'));
    let estilo = this.props.procom.pro_style;
    this.setState({estilo})
  }

  setTextareaHeight(paso){
    paso.each(function(index, item){
      item.style.height = item.scrollHeight+'px';
    });
  }

  // EDIT PROCOM
  onChange4Textarea(viewType){
    this.setState({showEditButtons: viewType});
    this.setTextareaHeight($('#edit-procom-textarea'));
  }

  // procom connection with PasoOptions component
  procomOptionsConection(income){
    let hide = 'hide-buttons'
    if(income === 'submit') {
      this.submitEditProcom()
    } else if (income === 'cancel') {
      this.setState({ showEditButtons: hide})
    } else {
      this.setState({estilo: income})
    }
  }

  submitEditProcom(){
    let pasId = this.props.paso.id;
    let proId = this.props.proyectoId;
    let procom = this.props.procom;
    let pro_content = this.refs.pro_content.value;
    let type_of_issue;
    let pro_style;
    if(this.state.estilo === 'problema') {
      pro_style = 'problema';
      type_of_issue = 'problem';
    } else if (this.state.estilo === 'ejemplo'){
      pro_style = 'ejemplo';
      type_of_issue = "comment";
    } else {
      pro_style = "comentario"
      type_of_issue = 'comment';
    }
    let pro_order = 0;
    this.props.dispatch(editProcom(proId, pasId, procom.id, pro_content, pro_style, pro_order, type_of_issue));
    this.setState({showEditButtons: 'hide-buttons'})
  }

  // DELETE PROCOM
  deleteProcom(procomId, pasoId, proyectoId){
    // console.log('delete me')
    this.props.dispatch(deleteProcom(procomId, pasoId, proyectoId));
  }

  extraContent(){
    let procom = this.props.procom;
    if(procom.pro_style === 'ejemplo') {
      return(<i className="fa fa-eye procom-type" aria-hidden="true"></i>)
    } else if (procom.pro_style === 'comentario') {
      return(<i className="fa fa-comments procom-type" aria-hidden="true"></i>)
    } else if (procom.pro_style === 'problema'){
      return(<i className="fa fa-exclamation-triangle procom-type" aria-hidden="true"></i>)
    }
  }

  render(){
    // <strong>{`${this.props.numeracion} `}</strong>
    let whichButtonsShouldIHave = 'add-procom-full-buttons'

    let procom = this.props.procom;
    let pasoId = this.props.paso.id;
    let proyectoId = this.props.proyectoId;
    let comentario = true;
    let problema = false;
    let show = 'show-buttons';
    let hide = 'hide-buttons';
    let inlineStyle = {height: '18px'};
    return (
      <div className={`procom-container ${procom.pro_style}`}>
        {this.extraContent()}
        <span className="procom-content">
          <div className={this.state.showEditButtons}>
            <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.estilo} conection={this.procomOptionsConection} />
          </div>
          <textarea id="edit-procom-textarea" className="procom-content-text" style={inlineStyle} ref='pro_content' onChange={()=>this.onChange4Textarea(show)}>{procom.pro_content}</textarea>
        </span>
        <span className="mini-botones">
          <i className="fa fa-trash" aria-hidden="true" onClick={()=> this.deleteProcom(procom.id, pasoId, proyectoId)}></i>
        </span>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {

  }
}
export default connect(mapStateToProps)(Procom);
