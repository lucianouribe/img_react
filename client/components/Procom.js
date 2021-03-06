import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers';
import PasoOptions from './PasoOptions';
import TextArea from './TextArea';
import ProcomSign from './ProcomSign';

class Procom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeOfIssue: 'comment',
      estilo: 'comentario',
      showEditButtons: 'hide-buttons',
    }

    this.procomFormSubmiter = this.procomFormSubmiter.bind(this);
    this.onChange4Textarea = this.onChange4Textarea.bind(this);
    this.procomOptionsConection = this.procomOptionsConection.bind(this);
  }

  componentDidMount(){
    let estilo = this.props.procom.pro_style;
    this.setState({estilo})
  }

  // EDIT PROCOM
  onChange4Textarea(viewType){
    this.setState({showEditButtons: viewType});
  }

  // procom connection with PasoOptions component
  procomOptionsConection(income){
    let hide = 'hide-buttons'
    if(income === 'submit') {
      this.procomFormSubmiter()
    } else if (income === 'cancel') {
      this.setState({ showEditButtons: hide})
    } else {
      this.setState({estilo: income})
    }
  }

  // takes info from procom form and paso options and submit them
  procomFormSubmiter(){
    let id = this.props.procom.id;
    let pasId = this.props.pasoId;
    let proId = this.props.proyectoId;
    let procom = this.props.procom;
    let pro_content = this.refs.text_area.refs.text_content.value;
    let type_of_issue;
    let pro_style;
    if(this.state.estilo === 'problema') {
      pro_style = 'problema';
      type_of_issue = 'problem';
    } else if (this.state.estilo === 'ejemplo'){
      pro_style = 'ejemplo';
      type_of_issue = "comment";
    } else if (this.state.estilo === 'resultado'){
      pro_style = 'resultado';
      type_of_issue = "comment";
    } else {
      pro_style = "comentario"
      type_of_issue = 'comment';
    }
    let pro_order = 0;
    let novelty = true;

    let outcome = { pasId, id, pro_content, pro_style, pro_order, type_of_issue, novelty }
    this.setState({showEditButtons: 'hide-buttons'})
    this.props.procomSetter(outcome);
  }

  render(){
    let whichButtonsShouldIHave = 'add-procom-full-buttons'
    let procom = this.props.procom;
    let pasoId = this.props.pasoId;
    let proyectoId = this.props.proyectoId;
    let hide = 'hide-buttons';

    return (
      <div className={`procom-container ${procom.pro_style}`}>
        <ProcomSign procom={procom}/>
        <span className="procom-content">
          <TextArea the_class='procom-content-text' the_content={procom.pro_content} onChange4Textarea={this.onChange4Textarea} ref='text_area'/>
        </span>
        <span className="mini-botones">
          <i className="fa fa-trash" aria-hidden="true" onClick={()=> this.props.deleteProcomFunc(procom.id, pasoId, proyectoId)}></i>
        </span>
        <div className={this.state.showEditButtons}>
          <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.estilo} conection={this.procomOptionsConection} />
        </div>
      </div>
    )
  }

}

export default Procom;
