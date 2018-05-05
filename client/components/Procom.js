import React from 'react';
import { connect } from 'react-redux';
import { createMarkup } from '../helpers';
import PasoOptions from './PasoOptions';
import TextArea from './TextArea';

class Procom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typeOfIssue: 'comment',
      estilo: 'comment',
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
    let pasoId = this.props.pasoId;
    let proyectoId = this.props.proyectoId;
    let comentario = true;
    let problema = false;
    let hide = 'hide-buttons';

    return (
      <div className={`procom-container ${procom.pro_style}`}>
        {this.extraContent()}
        <span className="procom-content">
          <div className={this.state.showEditButtons}>
            <PasoOptions whichType={whichButtonsShouldIHave} elected={this.state.estilo} conection={this.procomOptionsConection} />
          </div>
          <TextArea the_class='procom-content-text' the_content={procom.pro_content} onChange4Textarea={this.onChange4Textarea} ref='text_area'/>
        </span>
        <span className="mini-botones">
          <i className="fa fa-trash" aria-hidden="true" onClick={()=> this.props.deleteProcomFunc(procom.id, pasoId, proyectoId)}></i>
        </span>
      </div>
    )
  }

}

export default Procom;
